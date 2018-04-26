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
    
    // Do some work with Media Events here...


    // Return a response
    return req.CreateResponse(HttpStatusCode.OK, new
    {
        greeting = $"Did some Media Services stuff!"
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
