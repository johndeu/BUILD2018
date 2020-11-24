# Setting up the CLI

## Install the official Azure CLI 2.0 to use the AMS module
(Available the week of BUILD 2018)

[https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest )


## Bash Scripts
The Bash folder contains sample bash shell scripts for basic scenarios used with Azure Media Services. 
Samples demonstrate the following tasks:
- How to create an Account and get back credentials
- How to create Transforms using the built in presets for Encoding and Video/Audio analysis
- How to submit Jobs to Transforms
- How to publish an Asset for Streaming
- How to subscribe to EventGrid events using a Webhook URL
- How to reset your account credentials and get back the App.config settings XML for your code. 

## VS Code Scripts
The VSCode folder contains a similar set of scrips that can be executed directly inside Visual Studio code using the Azure CLI Extension for VS Code. You will need to install the extension first, and the simply right click on the line to execute the command in the built-in Terminal or view results in the Editor. 

This tool is very helpful as a scratchpad for testing out and learning the various commands available in the Media Services module. 

## Pre-release builds are available for testing here:
git clone https://github.com/southworkscom/azure-cli

cd azure-cli

git checkout add/ams-module

python -m venv C:\Repos\azure-cli\env

C:\Repos\azure-cli\env\scripts\activate.bat

python scripts/dev_setup.py

set PYTHONPATH=C:\Repos\azure-cli\src;%PYTHONPATH%

pip install "git+https://github.com/Azure/azure-sdk-for-python@restapi_auto_MediaServices-2018-03-30-preview#egg=azure-mgmt-media&subdirectory=azure-mgmt-media"

pip install -r requirements.txt

pip install -e C:\Repos\azure-cli\src\command_modules\azure-cli-ams

pip install -I azure-nspkg==1.0.0


After running the dev environment setup steps, you can execute the `pip list` command and verify that you have the following versions of the azure-cli-ams and azure-mgmt-media packages:
azure-cli-ams (0.1.0, c:\repos\azure-cli\src\command_modules\azure-cli-ams)
azure-mgmt-media (2018-03-30-preview)

