#!/bin/bash

# Update the following variables for your own settings:
location=westus
resourceGroup=build2018
storageName=build2018storage
amsAccountName=build18
transformName=adaptivestreamingencoding
inputBaseUri=https://github.com/johndeu/BUILD2018/raw/master/Media/
inputFile=Ignite-short.mp4
randomValue=$(cat /dev/urandom | env LC_CTYPE=C tr -cd 'a-f0-9' | head -c 32)
jobName=adaptivestreamingencoding$randomValue
refreshInterval=15
outputAssetName=adaptivestreamingencodingoutput$randomValue
locatorName=adaptivestreamingencodingoutput$randomValue
streamingPolicyName="Predefined_DownloadAndClearStreaming"

echo "Creating '$resourceGroup' Resouce Group in '$location' Azure region if does not exist..."
az group create \
--name $resourceGroup \
--location $location

echo "Creating '$storageName' Storage account in '$location' Azure region if does not exist..."
az storage account create \
--name $storageName \
--kind StorageV2 \
--sku Standard_RAGRS \
--location $location \
--resource-group $resourceGroup

echo "Creating '$amsAccountName' Media Services account in '$location' Azure region if does not exist..."
az ams account create \
--name $amsAccountName \
--resource-group $resourceGroup \
--storage-account $storageName \
--location $location

echo "Creating '$transformName' Transform for Adaptive Bitrate encoding in '$amsAccountName' Media Services account if does not exist..."
az ams transform create \
--name $transformName \
--preset-names AdaptiveStreaming \
--description 'A simple transform for adaptive bitrate encoding' \
-g $resourceGroup \
-a $amsAccountName

echo "Creating '$outputAssetName' Asset in '$amsAccountName' Media Services account to output the Adaptive Bitrate encoding results to..."
az ams asset create \
-n $outputAssetName \
-a $amsAccountName \
-g $resourceGroup

echo "Submitting '$jobName' Job in '$transformName' Transform for '$inputBaseUri$inputFile' input file..."
az ams job start \
--name $jobName \
--transform-name $transformName \
--base-uri $inputBaseUri \
--files $inputFile \
--output-asset-names $outputAssetName \
-a $amsAccountName \
-g $resourceGroup

sleep $refreshInterval

while [ "$(az ams job show --name $jobName --transform-name $transformName -a $amsAccountName -g $resourceGroup --query 'state' --output tsv)" != "Finished" ]; do
    
    echo "Waiting '$jobName' Job to finish processing..."
    
    sleep $refreshInterval
    
done

echo "Successfully finished processing '$jobName' Job."

echo "Checking that there is at least one Streaming Endpoints running in '$amsAccountName' Media Services account..."

if [ $(az ams streaming endpoint list -a $amsAccountName -g $resourceGroup --query '[?resourceState==`Running`] | length(@)') -ge 1 ]; then
    
    streamingEndpointHostName=$(az ams streaming endpoint list -a $amsAccountName -g $resourceGroup --query '[?resourceState==`Running`] | [0].hostName' --output tsv)
    
else
    
    echo "There is no Streaming Endpoint running in '$amsAccountName' Media Services account."
    
    echo "Trying to start 'default' Streaming Endpoint..."
    az ams streaming endpoint start \
    --streaming-endpoint-name default \
    -a $amsAccountName \
    -g $resourceGroup
    
    while [ $(echo $?) -gt 0 ]; do
        
        echo "Transient error: Waiting 'default' Streaming Endpoint to finish provisioning process before retrying..."
        
        sleep $refreshInterval
        
        echo "Retrying to start 'default' Streaming Endpoint..."
        az ams streaming endpoint start \
        --streaming-endpoint-name default \
        -a $amsAccountName \
        -g $resourceGroup
        
    done
    
    streamingEndpointHostName=$(az ams streaming endpoint list -a $amsAccountName -g $resourceGroup --query '[?name==`default`] | [0].hostName' --output tsv)
    
fi

echo "Creating '$locatorName' Streaming Locator for '$outputAssetName' Asset with the Adaptive Bitrate encoding output..."
az ams streaming locator create \
--name $locatorName \
--asset-name $outputAssetName \
--streaming-policy-name $streamingPolicyName \
-a $amsAccountName \
-g $resourceGroup

echo "Getting Adaptive Streaming URLs from '$locatorName' Streaming Locator..."
az ams streaming locator get-paths \
--name $locatorName \
-a $amsAccountName \
-g $resourceGroup \
--query 'streamingPaths[].paths[]' \
--output tsv | cat | while read one; do echo //$streamingEndpointHostName$one; done

echo "Press [ENTER] to continue."

read continue