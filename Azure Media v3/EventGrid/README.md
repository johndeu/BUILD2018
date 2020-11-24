# Using EventGrid and Azure Functions with Media Services. 

This sample shows how to create a custom webhook in Azure Functions starting with the generic c# Webhook to catch EventGrid events from an Azure Media Services Transform resource. 

While there are now simple ways to hook an Azure Function or Logic App directly to a Media Services EventGrid notification in the Azure portal, this sample is provided to show what it would take to register a custom HTTP webhook to listen for Media Services JobStateChange events in your own custom Azure Function, ASP.NET or other web framework code that uses C#.

The "sample.dat" file shows example JSON input to the function that can be used in the Azure Portal to test the Function code without triggering a Job in Media Services. The first sample is the verification event that is sent by the Event Grid service when registering a Webhook.  The second example shows what is sent from Media Services when a Job is in the "Finished" state. 

## Opening and Deploying this Sample
This sample uses .NET 4.6 and should be opened in Visual Studio 2017 to avoid error messages.

To deploy this code - since I didn't get enough time to package this up nicely - I actually manually deployed the code through the Azure Portal by creating each of the files and cutting and pasting the .csx code into them.


After that, make sure that you also update the project.json to reference the key dependencies in Nuget
    {
        "frameworks": {
            "net46":{
            "dependencies": {
                "Microsoft.Azure.Management.Media": "1.0.0",
                "Microsoft.IdentityModel.Clients.ActiveDirectory": "3.19.3"
            }
            }
        }
    }

## Function App Settings required
Finally, update the App Settings for your Azure Function through the Portal to include the values required in the configwrapper.csx file, using the values obtained from the CLI when getting your app.config settings for your service prinicipal. 

For example, the following CLI command (download the latest CLI with the AMS module first!) will create a new AD application called "build2018demo" for the Media Services account called "build18" and set the service principal as "Owner" role on that account.  The --xml attribute will return the keys needed to connect to the account in the App.config XML format. Use the values from this XML to fill in the App Settings for your Azure Function in the Portal. 

    # Create a service principal with password and configure its access to an Azure Media Services account.
    az ams account sp create --account-name build18  --name build2018demo  --resource-group build2018  --role Owner  --xml  --years 2 


## .NET Core Sample

This is a Quickstart sample showing how to use Azure Media Services API and .NET SDK in .NET Core. 
Open this folder directly (seperately) in Visual Studio Code. 

## Required Assemblies in the project
•	Microsoft.Azure.Management.Media -Version 1.0.0
•	Microsoft.IdentityModel.Clients.ActiveDirectory -Version 3.19.4
•	WindowsAzure.Storage  -Version 9.1.1

## Update the App.config

To use this project, you must first update the App.config with your account settings. The settings for your account can be retrieved using the following Azure CLI command in the Media Services module.

The following bash shell script creates a service principal for the account and returns the app.config settings as xml

    #!/bin/bash

    resourceGroup=build2018
    amsAccountName=build2018
    amsSPName=build2018AADapplication

    # Create a service principal with password and configure its access to an Azure Media Services account.
    az ams account sp create \
    --account-name $amsAccountName \
    --name $amsSPName \
    --resource-group $resourceGroup \
    --role Owner \
    --xml \
    --years 2 \