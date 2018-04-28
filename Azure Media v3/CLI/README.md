# Setting up the CLI

## Install the official Azure CLI 2.0 to use the AMS module

[https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest )


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

