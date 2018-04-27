#r "Newtonsoft.Json"

#load "configwrapper.csx"
#load "armclientcredentials.csx"

using System;
using System.Net;
using Newtonsoft.Json;
using Microsoft.Azure.Management.Media;
using Microsoft.Azure.Management.Media.Models;


static String resourceGroupName;
static String accountName;


public static async Task<object> Run(HttpRequestMessage req, TraceWriter log)
{
    log.Info($"Webhook was triggered!");

    log.Info($"Creating Media Services Client.");
    ConfigWrapper config = new ConfigWrapper();
    IAzureMediaServicesClient client = CreateMediaServicesClient(config, log);

    string jsonContent = await req.Content.ReadAsStringAsync();
    string eventGridValidation = req.Headers.FirstOrDefault( x => x.Key == "Aeg-Event-Type" ).Value?.FirstOrDefault();

    dynamic eventData = JsonConvert.DeserializeObject(jsonContent);

    log.Info($"event: {eventData}");


    // List the Assets in the account as a quick Test that everything is working.
    var assets = client.Assets.List(resourceGroupName, accountName);
    log.Info("Assets In account");
    foreach(var a in assets){
        log.Info($"Asset: {a.Name}");
    }

    // This is a one-time setup step when registering for Event Grid Subscriptions - see Event Grid documentation for details.
    if (eventGridValidation != String.Empty)
    {

        if (eventData[0].data.validationCode !=String.Empty && eventData[0].eventType == "Microsoft.EventGrid.SubscriptionValidationEvent")
        {
            log.Info($"Validation Event!");

            return req.CreateResponse(HttpStatusCode.OK, new 
            {
                validationResponse = eventData[0].data.validationCode
            });

        }
    }

    // If the Job is not Finished, just return the state
    if (eventData[0].data.state != "Finished")
    {
        // Return a response
        return req.CreateResponse(HttpStatusCode.OK, new
        {
            message = $"Job still in progress.}",
            state = $"{eventData[0].data.state}"
        });
    }

     // Do some work with Media Events here...
    string subject;
    string transformName;
    string jobName;

    //Get the "subject" of the event, which contains the Media Services resource.
    if (eventData[0].subject !=String.Empty){
        subject = eventData[0].subject;
        log.Info($"Subject : {subject}");

        // Regular Expresssion to extract the Transform and Job Names from the Subject of the Event 
        Regex r = new Regex(@"transforms\/(?<transformName>.*)\/jobs\/(?<jobName>.*)", RegexOptions.None, TimeSpan.FromMilliseconds(150));
        Match m = r.Match(subject);

        if (m.Success){
            transformName = r.Match(subject).Result("${transformName}");
            jobName = r.Match(subject).Result("${jobName}");
            log.Info($"Job Name : {jobName}"); 
            log.Info($"Transform Name : {jobName}"); 

            // Go get the Job from Media Services
            var job = await client.Jobs.GetAsync(resourceGroupName, accountName, transformName, jobName);

            // Get the first Job Output. For simple Transforms, there is only one output, for complex Transforms, there could be multiple Outputs.
            // Note here that you have to cast to a JobOutputAsset to get the assetName property.
            var jobOutputAsset = job.Outputs[0] as JobOutputAsset;
            if(jobOutputAsset != null)
            {
                var assetName = jobOutputAsset.AssetName;
                log.Info($"AssetName: {assetName}");

                // Get the output asset from Media Services
                var outputAsset = await client.Assets.GetAsync(resourceGroupName,accountName,assetName);
                log.Info($"OutputAsset storage:{outputAsset.StorageAccountName}");

                // Get the SAS URL to the Container so that we can read the file content of the JSON result from the job
                AssetContainerSas assetContainerSas = client.Assets.ListContainerSas(
                            resourceGroupName, 
                            accountName, 
                            assetName,
                            permissions: AssetContainerPermission.Read, 
                            expiryTime: DateTime.UtcNow.AddHours(1).ToUniversalTime()
                            );
                
                // Let's use the first SAS URL returned and use that to open the storage Container and list the files in it
                Uri containerSasUrl = new Uri(assetContainerSas.AssetContainerSasUrls.FirstOrDefault());

                // Here we use the Storage Library to get the Container of the Asset
                CloudBlobContainer container = new CloudBlobContainer(containerSasUrl);

                log.Info($"SAS Url to Container:{containerSasUrl.AbsoluteUri}");
                
                /// Lets now list all of the blobs in the Asset's storage Container
                var blobs = container.ListBlobsSegmentedAsync(null,true, BlobListingDetails.None,200,null,null,null).Result;
                
                // Let's loop through the blobs to find the .json result file and build a modified SAS URL to download it. 
                foreach (var blobItem in blobs.Results)
                {
                    if (blobItem is CloudBlockBlob)
                    {
                        CloudBlockBlob blob = blobItem as CloudBlockBlob;
                        if(blob.Name.IndexOf(".json")>-1){
                            UriBuilder sasToResults = new UriBuilder(containerSasUrl);
                            sasToResults.Path +="/"+ blob.Name;
                            log.Info($"JSON Output SAS: {sasToResults.ToString()}");
                        }       
                    }
                }
            }
        }
    }

    // Return a response
    return req.CreateResponse(HttpStatusCode.OK, new
    {
        results = $"Did some Media Services stuff!"
    });


}

private static IAzureMediaServicesClient CreateMediaServicesClient(ConfigWrapper config, TraceWriter log)
{
    ArmClientCredentials credentials = new ArmClientCredentials(config);

    resourceGroupName = config.ResourceGroup;
    accountName = config.AccountName;
    log.Info($"Using Media Services Account: {accountName}");
    log.Info($"Using Subscripton ID: {config.SubscriptionId}");

    return new AzureMediaServicesClient(config.ArmEndpoint, credentials)
    {
        SubscriptionId = config.SubscriptionId,                
    };

    

}
