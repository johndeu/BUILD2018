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
    IAzureMediaServicesClient client = CreateMediaServicesClient(config);

    string jsonContent = await req.Content.ReadAsStringAsync();
    string eventGridValidation = req.Headers.FirstOrDefault( x => x.Key == "Aeg-Event-Type" ).Value?.FirstOrDefault();

    dynamic eventData = JsonConvert.DeserializeObject(jsonContent);

    log.Info($"event: {eventData}");

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
    

    log.Info(jsonContent);

    return req.CreateResponse(HttpStatusCode.OK, new
    {
        greeting = $"Hello!"
    });


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
