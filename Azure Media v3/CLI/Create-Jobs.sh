#!/bin/bash

resourceGroup=build2018
amsAccountName=build2018
outputAssetName=myOutputAsset
transformName=myFirstTransform

# NOTE: First create the Transforms in the Create-Transform.sh for these jobs to work!

# Create a Media Services Asset to output the job results to.
az ams asset create \
    -n $outputAssetName \
    -a $amsAccountName \
    -g $resourceGroup \

# Submit a Job to a simple encoding Transform using HTTPs URL
az ams job start \
    --name myFirstJob \
    --transform-name $transformName \
    --files 'https://nimbuscdn-nimbuspm.streaming.mediaservices.windows.net/2b533311-b215-4409-80af-529c3e853622/Ignite-short.mp4' \
    --output-asset-names $outputAssetName \
    -a $amsAccountName \
    -g $resourceGroup \

echo "press  [ENTER]  to continue."
read continue