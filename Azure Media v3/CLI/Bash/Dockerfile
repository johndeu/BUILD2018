
FROM microsoft/azure-cli:latest
LABEL Name=amscli Version=0.0.1
ARG source=.
WORKDIR /
EXPOSE 3000
COPY $source .
ENTRYPOINT bash