using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using Microsoft.Azure.Management.Media;
using Microsoft.Azure.Management.Media.Models;
using Microsoft.WindowsAzure.Storage.Blob;

namespace LiveSample
{
    class Program
    {

        private static void Main(string[] args)
        {
            try
            {
                ConfigWrapper config = new ConfigWrapper();

                IAzureMediaServicesClient client = CreateMediaServicesClient(config);

                CleanupAccount(client, config.ResourceGroup, config.AccountName);

                // Getting the mediaServices account so that we can use the location to create the
                // LiveEvent and StreamingEndpoint
                MediaService mediaService = client.Mediaservices.Get(config.ResourceGroup, config.AccountName);

                // Creating a unique suffix so that we don't have name collisions if you run the sample
                // multiple times without cleaning up.
                string uniqueness = Guid.NewGuid().ToString().Substring(0, 13);
            
                string liveEventName = "liveevent-" + uniqueness;
                Console.WriteLine($"Creating a live event named {liveEventName}");
                Console.WriteLine();

                LiveEventPreview liveEventPreview = new LiveEventPreview
                {
                    AccessControl = new LiveEventPreviewAccessControl
                    {
                        Ip = new IPAccessControl
                        {
                            Allow = new List<IPRange>
                            {
                                new IPRange
                                {
                                    Name = "AllowAll",
                                    Address = "0.0.0.0",
                                    SubnetPrefixLength = 0
                                }
                            }
                        }
                    }
                };

                // This can sometimes take awhile. Be patient.
                LiveEvent liveEvent = new LiveEvent(
                    location: mediaService.Location, 
                    description:"Sample non-encoding pass-through LiveEvent for testing",
                    vanityUrl:false,
                    encoding:new LiveEventEncoding(encodingType:LiveEventEncodingType.None, presetName:null),
                    input: new LiveEventInput(LiveEventInputProtocol.RTMP), 
                    preview: liveEventPreview
                );

                liveEvent = client.LiveEvents.Create(config.ResourceGroup, config.AccountName, liveEventName, liveEvent, autoStart:true);

                // Start the LiveEvent so  that we can begin sending encoding data to it. 
                // client.LiveEvents.Start(config.ResourceGroup,config.AccountName, liveEventName);

                // Get the LiveEvent again to refresh the ingest endpoints after starting. 
                //liveEvent = client.LiveEvents.Get(config.ResourceGroup, config.AccountName, liveEventName);

                // Get the input endpoint to configure the on premise encoder with
                string ingestUrl = liveEvent.Input.Endpoints.First().Url;
                Console.WriteLine($"The ingest url to configure the on premise encoder with is:");
                Console.WriteLine($"\t{ingestUrl}");
                Console.WriteLine();

                // Use the previewEndpoint to preview and verify
                // that the input from the encoder is actually being received
                string previewEndpoint = liveEvent.Preview.Endpoints.First().Url;
                Console.WriteLine($"The preview url is:");
                Console.WriteLine($"\t{previewEndpoint}");
                Console.WriteLine();

                Console.WriteLine("Start the live stream now, sending the input to the ingest url and verify that it is arriving with the preview url.");
                Console.WriteLine("Press enter to continue...");
                Console.Out.Flush();
                var ignoredInput = Console.ReadLine();

                // Create an Asset for the LiveOutput to use
                string assetName = "archiveAsset" + uniqueness;
                Console.WriteLine($"Creating an asset named {assetName}");
                Console.WriteLine();
                Asset asset = client.Assets.CreateOrUpdate(config.ResourceGroup, config.AccountName, assetName, new Asset());

                // Create the LiveOutput
                string manifestName = "output";
                string liveOutputName = "liveOutput" + uniqueness;
                Console.WriteLine($"Creating a lived output named {liveOutputName}");
                Console.WriteLine();

                // TODO: Update this to Asset.Name once the fix is deployed
                LiveOutput liveOutput = new LiveOutput(assetName: asset.AssetId.ToString(), manifestName: manifestName, archiveWindowLength: TimeSpan.FromMinutes(10));
                liveOutput = client.LiveOutputs.Create(config.ResourceGroup, config.AccountName, liveEventName, liveOutputName, liveOutput);

                // Create the StreamingLocator
                string streamingLocatorName = "streamingLocator" + uniqueness;

                Console.WriteLine($"Creating a streaming locator named {streamingLocatorName}");
                Console.WriteLine();

                StreamingLocator locator = new StreamingLocator(assetName: assetName, streamingPolicyName: PredefinedStreamingPolicy.ClearStreamingOnly);
                locator = client.StreamingLocators.Create(config.ResourceGroup, config.AccountName, streamingLocatorName, locator);

                // Create the StreamingEndpoint
                // string endpointName = "endpoint" + uniqueness;

                // Console.WriteLine($"Creating a streaming endpoint named {endpointName}");
                // Console.WriteLine();

                // StreamingEndpoint streamingEndpoint = new StreamingEndpoint(location: mediaService.Location);
                // streamingEndpoint = client.StreamingEndpoints.Create(config.ResourceGroup, config.AccountName, endpointName, streamingEndpoint, autoStart: true);

                // Get the default Streaming Endpoint on the account
                StreamingEndpoint streamingEndpoint = client.StreamingEndpoints.Get(config.ResourceGroup, config.AccountName, "default");

                // If it's not running, Start it. 
                if (streamingEndpoint.ResourceState != StreamingEndpointResourceState.Running)
                {
                    client.StreamingEndpoints.Start(config.ResourceGroup, config.AccountName, "default");
                }

                // Get the url to stream the output
                var paths = client.StreamingLocators.ListPaths(config.ResourceGroup, config.AccountName, streamingLocatorName);

                Console.WriteLine("The urls to stream the output from a client:");
                Console.WriteLine();
                StringBuilder stringBuilder = new StringBuilder();
                for (int i = 0; i < paths.StreamingPaths.Count; i++)
                {
                    UriBuilder uriBuilder = new UriBuilder();
                    uriBuilder.Scheme = "https";
                    uriBuilder.Host = streamingEndpoint.HostName;

                    if (paths.StreamingPaths[i].Paths.Count > 0)
                    {
                        uriBuilder.Path = paths.StreamingPaths[i].Paths[0];
                        stringBuilder.AppendLine($"\t{paths.StreamingPaths[i].StreamingProtocol}-{paths.StreamingPaths[i].EncryptionScheme}");
                        stringBuilder.AppendLine($"\t\t{uriBuilder.ToString()}");
                        stringBuilder.AppendLine();
                    }                
                }

                if (stringBuilder.Length > 0)
                {
                    Console.WriteLine(stringBuilder.ToString());
                }
                else
                {
                    Console.WriteLine("No Streaming Paths were detected.  Has the Stream been started?");
                    Console.WriteLine("Cleaning up and Exiting...");

                    CleanupLiveEventAndOutput(client, config.ResourceGroup, config.AccountName, liveEventName, liveOutputName);
                    CleanupLocatorAssetAndStreamingEndpoint(client, config.ResourceGroup, config.AccountName, streamingLocatorName, assetName);

                    return;
                }

                Console.WriteLine("Continue experimenting with the stream until you are ready to finish.");
                Console.WriteLine("Press enter to stop the LiveOutput...");
                Console.Out.Flush();
                ignoredInput = Console.ReadLine();

                CleanupLiveEventAndOutput(client, config.ResourceGroup, config.AccountName, liveEventName, liveOutputName);

                Console.WriteLine("The LiveOutput and LiveEvent are now deleted.  The event is available as an archive and can still be streamed.");
                Console.WriteLine("Press enter to finish cleanup...");
                Console.Out.Flush();
                ignoredInput = Console.ReadLine();

                CleanupLocatorAssetAndStreamingEndpoint(client, config.ResourceGroup, config.AccountName, streamingLocatorName, assetName);
            }
            catch (ApiErrorException e)
            {
                Console.WriteLine("Hit ApiErrorException");
                Console.WriteLine($"\tCode: {e.Body.Error.Code}");
                Console.WriteLine($"\tCode: {e.Body.Error.Message}");
                Console.WriteLine();
                Console.WriteLine("Exiting, cleanup may be necessary...");
            }
        }

        private static void CleanupLiveEventAndOutput(IAzureMediaServicesClient client, string resourceGroup, string accountName, string liveEventName, string liveOutputName)
        {
            // Delete the LiveOutput
            client.LiveOutputs.Delete(resourceGroup, accountName, liveEventName, liveOutputName);

            // Stop and delete the LiveEvent
            client.LiveEvents.Stop(resourceGroup, accountName, liveEventName);
            client.LiveEvents.Delete(resourceGroup, accountName, liveEventName);
        }

        private static void CleanupLocatorAssetAndStreamingEndpoint(IAzureMediaServicesClient client, string resourceGroup, string accountName, string streamingLocatorName, string assetName)
        {
            // Delete the Streaming Locator
            client.StreamingLocators.Delete(resourceGroup, accountName, streamingLocatorName);

            // Delete the Archive Asset
            client.Assets.Delete(resourceGroup, accountName, assetName);

            // Stop and delete the StreamingEndpoint
            // client.StreamingEndpoints.Stop(resourceGroup, accountName, endpointName);
            // client.StreamingEndpoints.Delete(resourceGroup, accountName, endpointName);

        }

        private static IAzureMediaServicesClient CreateMediaServicesClient(ConfigWrapper config)
        {
            ArmClientCredentials credentials = new ArmClientCredentials(config);

            return new AzureMediaServicesClient(config.ArmEndpoint, credentials)
            {
                SubscriptionId = config.SubscriptionId,
            };
        }

        
        private static void CleanupAccount(IAzureMediaServicesClient client, string resourceGroup, string accountName)
        {
            var endpoints = client.StreamingEndpoints.List(resourceGroup, accountName);
            foreach (StreamingEndpoint p in endpoints)
            {
                if (p.Name == "default")
                {
                    continue;
                }
                else
                {
                    client.StreamingEndpoints.Stop(resourceGroup, accountName, p.Name);
                    client.StreamingEndpoints.Delete(resourceGroup, accountName, p.Name);
                }
            }

            var events = client.LiveEvents.List(resourceGroup, accountName);
            foreach (LiveEvent l in events)
            {
                var outputs = client.LiveOutputs.List(resourceGroup, accountName, l.Name);

                foreach (LiveOutput o in outputs)
                {
                    client.LiveOutputs.Delete(resourceGroup, accountName, l.Name, o.Name);
                }

                client.LiveEvents.Stop(resourceGroup, accountName, l.Name);
                client.LiveEvents.Delete(resourceGroup, accountName, l.Name);
            }

            var locators = client.StreamingLocators.List(resourceGroup, accountName);
            foreach (StreamingLocator sl in locators)
            {
                client.StreamingLocators.Delete(resourceGroup, accountName, sl.Name);
            }

            var assets = client.Assets.List(resourceGroup, accountName);
            foreach (Asset a in assets)
            {
                client.Assets.Delete(resourceGroup, accountName, a.Name);
            }
        }
    }
}

