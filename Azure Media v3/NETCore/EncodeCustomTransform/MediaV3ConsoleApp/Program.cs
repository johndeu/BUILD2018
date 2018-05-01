using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using Microsoft.Azure.Management.Media;
using Microsoft.Azure.Management.Media.Models;

namespace AnalyzeVideos
{
    class Program
    {
        const String outputFolder = @"Output";
        const String transformName = "Custom_TwoLayerMp4AAC";
        static String resourceGroupName;
        static String accountName;

        static void Main(string[] args)
        {
            ConfigWrapper config = new ConfigWrapper();
            IAzureMediaServicesClient client = CreateMediaServicesClient(config);

            try
            {
        
                // Ensure that you have customized encoding Transform.  This is really a one time setup operation.
                Transform adaptiveEncodeTransform = EnsureTransformExists(client, config.Region, transformName);

                // Creating a unique suffix so that we don't have name collisions if you run the sample
                // multiple times without cleaning up.
                string uniqueness = Guid.NewGuid().ToString().Substring(0, 13);
                string jobName = "job-" + uniqueness;
                string inputAssetName = "input-" + uniqueness;
                string outputAssetName = "output-" + uniqueness;


                Asset asset = client.Assets.CreateOrUpdate(resourceGroupName, accountName,  inputAssetName, new Asset());

                var input = new JobInputHttp(
                                    baseUri: "https://nimbuscdn-nimbuspm.streaming.mediaservices.windows.net/2b533311-b215-4409-80af-529c3e853622/",
                                    files: new List<String> {"Ignite-short.mp4"}
                                    );
                

                CreateOutputAsset(client, outputAssetName);

                Job job = SubmitJob(client, transformName, jobName, input, outputAssetName);

                DateTime startedTime = DateTime.Now;

                job = WaitForJobToFinish(client, transformName, jobName);

                TimeSpan elapsed = DateTime.Now - startedTime;

                if (job.State == JobState.Finished)
                {
                    Console.WriteLine("Job finished.");
                    if (!Directory.Exists(outputFolder))
                        Directory.CreateDirectory(outputFolder);
                    DownloadResults(client, outputAssetName, outputFolder).Wait();
                }
                else if (job.State == JobState.Error)
                {
                    Console.WriteLine($"ERROR: Job finished with error message: {job.Outputs[0].Error.Message}");
                    Console.WriteLine($"ERROR:                   error details: {job.Outputs[0].Error.Details[0].Message}");
                }
            }
            catch(ApiErrorException ex)
            {
                string code = ex.Body.Error.Code;
                string message = ex.Body.Error.Message;

                Console.WriteLine("ERROR:API call failed with error code: {0} and message: {1}", code, message);

            }          
        }


        private static IAzureMediaServicesClient CreateMediaServicesClient(ConfigWrapper config)
        {
            ArmClientCredentials credentials = new ArmClientCredentials(config);

            resourceGroupName = config.ResourceGroup;
            accountName = config.AccountName;

            return new AzureMediaServicesClient(config.ArmEndpoint, credentials)
            {
                SubscriptionId = config.SubscriptionId,                
            };
        }

        private static Transform EnsureTransformExists(IAzureMediaServicesClient client, string location, string transformName)
        {
            Transform transform = client.Transforms.Get(resourceGroupName, accountName, transformName);

            if (transform == null)
            {
                // Create a new Transform Outputs array - this defines the set of outputs for the Transform
                TransformOutput[] outputs = new TransformOutput[]
                {
                    // Create a new TransformOutput with a custom Standard Encoder Preset
                    // This demonstrates how to create custom codec and layer output settings
                    new TransformOutput(new StandardEncoderPreset()
                        {
                            Codecs =new List<Codec>
                            {
                            // Add an AAC Audio layer
                            new AacAudio(),
                            // Add two H264 video encoding layers
                            new H264Video
                                {
                                    Layers =new List<H264Layer>
                                    {
                                        new H264Layer
                                            {
                                                Width ="1280",
                                                Height ="720",
                                                Bitrate = 1000000,
                                                Label ="HD"
                                            },
                                        new H264Layer
                                            {
                                                Width ="640",
                                                Height ="480",
                                                Bitrate = 600000,
                                                Label = "SD"
                                            }
                                        }
                                },
                            // Add a thumbnail image layer that outputs a range of thumbnails
                            new PngImage
                                {
                                    Start ="25%",
                                    Step ="25%",
                                    Range ="80%",
                                    Layers =new List<PngLayer>
                                    {
                                        new PngLayer
                                            {
                                                Width ="50%",
                                                Height ="50%"
                                            }
                                    }
                                }
                            },
                            Formats =new List<Format>
                            {
                                // Write the Video file to MP4 file format using the basename and extension macros
                                new Mp4Format()
                                    {
                                        FilenamePattern="Video-{Basename}-{Label}-{Bitrate}.{Extension}"
                                    },
                                // Write the Thumbnails out using the basename, index and extension macros
                                new PngFormat
                                    {   
                                        FilenamePattern ="Thumbnail-{Basename}-{Index}.{Extension}"
                                    }
                            }
                        }
                    )
                };

                // Create the custom transform templat with the outputs defined above
                transform = client.Transforms.CreateOrUpdate(resourceGroupName, accountName, transformName, outputs);
            }

            return transform;
        }
     

        private static Asset CreateOutputAsset(IAzureMediaServicesClient client, string assetName)
        {
            Asset input = new Asset();

            return client.Assets.CreateOrUpdate(resourceGroupName, accountName, assetName, input);
        }

        private static Job SubmitJob(IAzureMediaServicesClient client, string transformName, string jobName, JobInput jobInput, string outputAssetName)
        {
            JobOutput[] jobOutputs =
            {
                new JobOutputAsset(outputAssetName), 
            };

            Job job = client.Jobs.Create(
                resourceGroupName, 
                accountName,
                transformName,
                jobName,
                new Job
                {
                    Input = jobInput,
                    Outputs = jobOutputs,
                });

            return job;
        }


        private static Job WaitForJobToFinish(IAzureMediaServicesClient client, string transformName, string jobName)
        {
            const int SleepInterval = 10 * 1000;

            Job job = null;
            bool exit = false;

            do
            {
                job = client.Jobs.Get(resourceGroupName, accountName, transformName, jobName);
                
                if (job.State == JobState.Finished || job.State == JobState.Error || job.State == JobState.Canceled)
                {
                    exit = true;
                }
                else
                {
                    Console.WriteLine($"Job is {job.State}.");

                    for (int i = 0; i < job.Outputs.Count; i++)
                    {
                        JobOutput output = job.Outputs[i];

                        Console.Write($"\tJobOutput[{i}] is {output.State}.");

                        if (output.State == JobState.Processing)
                        {
                            Console.Write($"  Progress: {output.Progress}");
                        }

                        Console.WriteLine();
                    }

                    System.Threading.Thread.Sleep(SleepInterval);
                }
            }
            while (!exit);

            return job;
        }



        private async static Task DownloadResults(IAzureMediaServicesClient client, string assetName, string resultsFolder)
        {
            ListContainerSasInput parameters = new ListContainerSasInput();
            AssetContainerSas assetContainerSas = client.Assets.ListContainerSas(
                            resourceGroupName, 
                            accountName, 
                            assetName,
                            permissions: AssetContainerPermission.Read, 
                            expiryTime: DateTime.UtcNow.AddHours(1).ToUniversalTime()
                            );

            Uri containerSasUrl = new Uri(assetContainerSas.AssetContainerSasUrls.FirstOrDefault());
            CloudBlobContainer container = new CloudBlobContainer(containerSasUrl);

            string directory = Path.Combine(resultsFolder, assetName);
            Directory.CreateDirectory(directory);

            Console.WriteLine("Downloading results to {0}.", directory);
            
            var blobs = container.ListBlobsSegmentedAsync(null,true, BlobListingDetails.None,200,null,null,null).Result;
            
            foreach (var blobItem in blobs.Results)
            {
                if (blobItem is CloudBlockBlob)
                {
                    CloudBlockBlob blob = blobItem as CloudBlockBlob;
                    string filename = Path.Combine(directory, blob.Name);

                    await blob.DownloadToFileAsync(filename, FileMode.Create);
                }
            }

            Console.WriteLine("Download complete.");
            
        }

    }
}
