using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Media.Encoding.Rest.ArmClient;
using Microsoft.Media.Encoding.Rest.ArmClient.Models;
using Newtonsoft.Json;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;

namespace AnalyzeVideos
{
    class Program
    {
        const String inputMP4FileName = @"ignite.mp4";
        const String outputFolder = @"Output";
        const String VideoAnalyzerTransformName = "VideoAnalyzerTransform";

        static void Main(string[] args)
        {
            ConfigWrapper config = new ConfigWrapper();
            IAzureMediaServicesClient client = CreateMediaServicesClient(config);

            try
            {
                // Ensure that you have customized transforms for the VideoAnalyzer.  This is really a one time setup operation.
                Transform videoAnalyzerTransform = EnsureTransformExists(client, config.Region, VideoAnalyzerTransformName, new VideoAnalyzerPreset());

                String jobName = Guid.NewGuid().ToString() + "-job";

                string inputAssetName = Guid.NewGuid().ToString() + "-input";
                string outputAssetName = Guid.NewGuid().ToString() + "-output";

                CreateInputAsset(client, inputAssetName, inputMP4FileName).Wait();

                JobInput input = new JobInputAsset(assetName: inputAssetName);

                CreateOutputAsset(client, outputAssetName);

                Job job = SubmitJob(client, VideoAnalyzerTransformName, jobName, input, outputAssetName);

                DateTime startedTime = DateTime.Now;

                job = WaitForJobToFinish(client, VideoAnalyzerTransformName, jobName);

                TimeSpan elapsed = DateTime.Now - startedTime;

                if (job.State == JobState.Finished)
                {
                    Console.WriteLine("Job finished.");
                    if (!Directory.Exists(outputFolder))
                        Directory.CreateDirectory(outputFolder);
                    DownloadResults(client, outputAssetName, outputFolder).Wait();
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

            return new AzureMediaServicesClient(config.ArmEndpoint, credentials)
            {
                SubscriptionId = config.SubscriptionId,
                ResourceGroupName = config.ResourceGroup,
                AccountName = config.AccountName
            };
        }

          private static Transform EnsureTransformExists(IAzureMediaServicesClient client, string location, string transformName, Preset preset)
        {
            Transform transform = client.Transforms.Get(transformName);

            if (transform == null)
            {
                TransformOutput[] outputs = new TransformOutput[]
                {
                    new TransformOutput(preset),
                };

                transform = new Transform(outputs);

                transform = client.Transforms.CreateOrUpdate(transformName, transform);
            }

            return transform;
        }
        private static async Task<Asset> CreateInputAsset(IAzureMediaServicesClient client, string assetName, string fileToUpload)
        {
            Console.WriteLine("Creating Input Asset");
            Asset asset = client.Assets.CreateOrUpdate(assetName, new Asset());

            ListContainerSasInput input = new ListContainerSasInput()
            {
                Permissions = AssetContainerPermission.ReadWrite,
                ExpiryTime = DateTimeOffset.Now.AddHours(2)
            };

            var response = client.Assets.ListContainerSasAsync(assetName, input).Result;

            string uploadSasUrl = response.AssetContainerSasUrls.First();

            string filename = Path.GetFileName(fileToUpload);
            Console.WriteLine("Uploading file: {0}", filename);

            var sasUri = new Uri(uploadSasUrl);
            CloudBlobContainer container = new CloudBlobContainer(sasUri);
            var blob = container.GetBlockBlobReference(filename);
            blob.Properties.ContentType = "video/mp4";
            Console.WriteLine("Uploading File to container: {0}", sasUri);
            await blob.UploadFromFileAsync(fileToUpload);

            return asset;
        }

        private static Asset CreateOutputAsset(IAzureMediaServicesClient client, string assetName)
        {
            Asset input = new Asset();

            return client.Assets.CreateOrUpdate(assetName, input);
        }

        private static Job SubmitJob(IAzureMediaServicesClient client, string transformName, string jobName, JobInput jobInput, string outputAssetName)
        {
            JobOutput[] jobOutputs =
            {
                new JobOutputAsset(outputAssetName), 
            };

            Job job = client.Jobs.CreateOrUpdate(
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
                job = client.Jobs.Get(transformName, jobName);

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
            ListContainerSasInput parameters = new ListContainerSasInput(permissions: AssetContainerPermission.Read, expiryTime: DateTimeOffset.UtcNow.AddHours(1));
            AssetContainerSas assetContainerSas = client.Assets.ListContainerSas(assetName, parameters);

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
