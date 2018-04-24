#!/bin/bash

resourceGroup=johndeu_BUILD2018
amsAccountName=johndeubuild2018
resourceId=/subscriptions/35c2594a-23da-4fce-b59c-f6fb9513eeeb/resourceGroups/johndeu_BUILD2018/providers/Microsoft.Media/mediaservices/johndeubuild2018
webhookEndpoint=https://mywebhookurl

# Create an account level Event Grid subscription for Job State Changes.
# ResourceId variable should be set to the full ARM resource URL for the media account.
# Endpoint must point to a valid webhook that is enabled to respond to the EventGrid validation event.
az eventgrid event-subscription create \
	--name johndeuEvent \
	--resource-id $resourceId \
	--included-event-types "Microsoft.Media.JobStateChange" \
	--endpoint $webhookEndpoint

echo "press  [ENTER]  to continue."
read continue