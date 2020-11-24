/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var msRestAzure = require('ms-rest-azure');

exports.BaseResource = msRestAzure.BaseResource;
exports.CloudError = msRestAzure.CloudError;
exports.Provider = require('./provider');
exports.OperationDisplay = require('./operationDisplay');
exports.Operation = require('./operation');
exports.EntityNameAvailabilityCheckOutput = require('./entityNameAvailabilityCheckOutput');
exports.StorageAccount = require('./storageAccount');
exports.SyncStorageKeysInput = require('./syncStorageKeysInput');
exports.Resource = require('./resource');
exports.TrackedResource = require('./trackedResource');
exports.MediaService = require('./mediaService');
exports.SubscriptionMediaService = require('./subscriptionMediaService');
exports.ODataError = require('./oDataError');
exports.ApiError = require('./apiError');
exports.CheckNameAvailabilityInput = require('./checkNameAvailabilityInput');
exports.ProxyResource = require('./proxyResource');
exports.AssetContainerSas = require('./assetContainerSas');
exports.AssetStorageEncryptionKey = require('./assetStorageEncryptionKey');
exports.Asset = require('./asset');
exports.ListContainerSasInput = require('./listContainerSasInput');
exports.ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction = require('./contentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction');
exports.ContentKeyPolicyPlayReadyContentKeyLocation = require('./contentKeyPolicyPlayReadyContentKeyLocation');
exports.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader = require('./contentKeyPolicyPlayReadyContentEncryptionKeyFromHeader');
exports.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier = require('./contentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier');
exports.ContentKeyPolicyPlayReadyPlayRight = require('./contentKeyPolicyPlayReadyPlayRight');
exports.ContentKeyPolicyTokenClaim = require('./contentKeyPolicyTokenClaim');
exports.ContentKeyPolicyPlayReadyLicense = require('./contentKeyPolicyPlayReadyLicense');
exports.ContentKeyPolicyRestriction = require('./contentKeyPolicyRestriction');
exports.ContentKeyPolicyOpenRestriction = require('./contentKeyPolicyOpenRestriction');
exports.ContentKeyPolicyUnknownRestriction = require('./contentKeyPolicyUnknownRestriction');
exports.ContentKeyPolicyConfiguration = require('./contentKeyPolicyConfiguration');
exports.ContentKeyPolicyRestrictionTokenKey = require('./contentKeyPolicyRestrictionTokenKey');
exports.ContentKeyPolicySymmetricTokenKey = require('./contentKeyPolicySymmetricTokenKey');
exports.ContentKeyPolicyRsaTokenKey = require('./contentKeyPolicyRsaTokenKey');
exports.ContentKeyPolicyX509CertificateTokenKey = require('./contentKeyPolicyX509CertificateTokenKey');
exports.ContentKeyPolicyTokenRestriction = require('./contentKeyPolicyTokenRestriction');
exports.ContentKeyPolicyClearKeyConfiguration = require('./contentKeyPolicyClearKeyConfiguration');
exports.ContentKeyPolicyUnknownConfiguration = require('./contentKeyPolicyUnknownConfiguration');
exports.ContentKeyPolicyWidevineConfiguration = require('./contentKeyPolicyWidevineConfiguration');
exports.ContentKeyPolicyPlayReadyConfiguration = require('./contentKeyPolicyPlayReadyConfiguration');
exports.ContentKeyPolicyFairPlayConfiguration = require('./contentKeyPolicyFairPlayConfiguration');
exports.ContentKeyPolicyOption = require('./contentKeyPolicyOption');
exports.ContentKeyPolicyProperties = require('./contentKeyPolicyProperties');
exports.ContentKeyPolicy = require('./contentKeyPolicy');
exports.Preset = require('./preset');
exports.Codec = require('./codec');
exports.Audio = require('./audio');
exports.AacAudio = require('./aacAudio');
exports.AudioAnalyzerPreset = require('./audioAnalyzerPreset');
exports.Overlay = require('./overlay');
exports.AudioOverlay = require('./audioOverlay');
exports.CopyVideo = require('./copyVideo');
exports.Video = require('./video');
exports.Image = require('./image');
exports.Format = require('./format');
exports.ImageFormat = require('./imageFormat');
exports.JpgFormat = require('./jpgFormat');
exports.PngFormat = require('./pngFormat');
exports.BmpImage = require('./bmpImage');
exports.Layer = require('./layer');
exports.BmpLayer = require('./bmpLayer');
exports.CopyAudio = require('./copyAudio');
exports.Deinterlace = require('./deinterlace');
exports.Rectangle = require('./rectangle');
exports.Filters = require('./filters');
exports.VideoLayer = require('./videoLayer');
exports.H264Layer = require('./h264Layer');
exports.H264Video = require('./h264Video');
exports.JpgLayer = require('./jpgLayer');
exports.JpgImage = require('./jpgImage');
exports.OutputFile = require('./outputFile');
exports.MultiBitrateFormat = require('./multiBitrateFormat');
exports.Mp4Format = require('./mp4Format');
exports.PngLayer = require('./pngLayer');
exports.PngImage = require('./pngImage');
exports.BuiltInStandardEncoderPreset = require('./builtInStandardEncoderPreset');
exports.StandardEncoderPreset = require('./standardEncoderPreset');
exports.VideoAnalyzerPreset = require('./videoAnalyzerPreset');
exports.TransportStreamFormat = require('./transportStreamFormat');
exports.VideoOverlay = require('./videoOverlay');
exports.TransformOutput = require('./transformOutput');
exports.AvailablePresets = require('./availablePresets');
exports.Transform = require('./transform');
exports.JobInput = require('./jobInput');
exports.JobInputClip = require('./jobInputClip');
exports.JobInputs = require('./jobInputs');
exports.JobInputAsset = require('./jobInputAsset');
exports.JobInputHttp = require('./jobInputHttp');
exports.JobErrorDetail = require('./jobErrorDetail');
exports.JobError = require('./jobError');
exports.JobOutput = require('./jobOutput');
exports.JobOutputAsset = require('./jobOutputAsset');
exports.Job = require('./job');
exports.TrackPropertyCondition = require('./trackPropertyCondition');
exports.TrackSelection = require('./trackSelection');
exports.DefaultKey = require('./defaultKey');
exports.StreamingPolicyContentKey = require('./streamingPolicyContentKey');
exports.StreamingPolicyContentKeys = require('./streamingPolicyContentKeys');
exports.StreamingPolicyPlayReadyConfiguration = require('./streamingPolicyPlayReadyConfiguration');
exports.StreamingPolicyWidevineConfiguration = require('./streamingPolicyWidevineConfiguration');
exports.StreamingPolicyFairPlayConfiguration = require('./streamingPolicyFairPlayConfiguration');
exports.CbcsDrmConfiguration = require('./cbcsDrmConfiguration');
exports.CencDrmConfiguration = require('./cencDrmConfiguration');
exports.EnabledProtocols = require('./enabledProtocols');
exports.NoEncryption = require('./noEncryption');
exports.EnvelopeEncryption = require('./envelopeEncryption');
exports.CommonEncryptionCenc = require('./commonEncryptionCenc');
exports.CommonEncryptionCbcs = require('./commonEncryptionCbcs');
exports.StreamingPolicy = require('./streamingPolicy');
exports.StreamingLocatorUserDefinedContentKey = require('./streamingLocatorUserDefinedContentKey');
exports.StreamingLocatorContentKey = require('./streamingLocatorContentKey');
exports.StreamingPath = require('./streamingPath');
exports.ListContentKeysResponse = require('./listContentKeysResponse');
exports.ListPathsResponse = require('./listPathsResponse');
exports.StreamingLocator = require('./streamingLocator');
exports.Hls = require('./hls');
exports.LiveOutput = require('./liveOutput');
exports.LiveEventEndpoint = require('./liveEventEndpoint');
exports.LiveEventInput = require('./liveEventInput');
exports.IPRange = require('./iPRange');
exports.IPAccessControl = require('./iPAccessControl');
exports.LiveEventPreviewAccessControl = require('./liveEventPreviewAccessControl');
exports.LiveEventPreview = require('./liveEventPreview');
exports.LiveEventEncoding = require('./liveEventEncoding');
exports.CrossSiteAccessPolicies = require('./crossSiteAccessPolicies');
exports.LiveEventActionInput = require('./liveEventActionInput');
exports.LiveEvent = require('./liveEvent');
exports.AkamaiSignatureHeaderAuthenticationKey = require('./akamaiSignatureHeaderAuthenticationKey');
exports.AkamaiAccessControl = require('./akamaiAccessControl');
exports.StreamingEndpointAccessControl = require('./streamingEndpointAccessControl');
exports.StreamingEntityScaleUnit = require('./streamingEntityScaleUnit');
exports.StreamingEndpoint = require('./streamingEndpoint');
exports.OperationCollection = require('./operationCollection');
exports.MediaServiceCollection = require('./mediaServiceCollection');
exports.SubscriptionMediaServiceCollection = require('./subscriptionMediaServiceCollection');
exports.AssetCollection = require('./assetCollection');
exports.ContentKeyPolicyCollection = require('./contentKeyPolicyCollection');
exports.TransformCollection = require('./transformCollection');
exports.JobCollection = require('./jobCollection');
exports.StreamingPolicyCollection = require('./streamingPolicyCollection');
exports.StreamingLocatorCollection = require('./streamingLocatorCollection');
exports.LiveEventListResult = require('./liveEventListResult');
exports.LiveOutputListResult = require('./liveOutputListResult');
exports.StreamingEndpointListResult = require('./streamingEndpointListResult');
exports.discriminators = {
  'ContentKeyPolicyPlayReadyContentKeyLocation' : exports.ContentKeyPolicyPlayReadyContentKeyLocation,
  'ContentKeyPolicyPlayReadyContentKeyLocation.#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader' : exports.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader,
  'ContentKeyPolicyPlayReadyContentKeyLocation.#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier' : exports.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier,
  'ContentKeyPolicyRestriction' : exports.ContentKeyPolicyRestriction,
  'ContentKeyPolicyRestriction.#Microsoft.Media.ContentKeyPolicyOpenRestriction' : exports.ContentKeyPolicyOpenRestriction,
  'ContentKeyPolicyRestriction.#Microsoft.Media.ContentKeyPolicyUnknownRestriction' : exports.ContentKeyPolicyUnknownRestriction,
  'ContentKeyPolicyConfiguration' : exports.ContentKeyPolicyConfiguration,
  'ContentKeyPolicyRestrictionTokenKey' : exports.ContentKeyPolicyRestrictionTokenKey,
  'ContentKeyPolicyRestrictionTokenKey.#Microsoft.Media.ContentKeyPolicySymmetricTokenKey' : exports.ContentKeyPolicySymmetricTokenKey,
  'ContentKeyPolicyRestrictionTokenKey.#Microsoft.Media.ContentKeyPolicyRsaTokenKey' : exports.ContentKeyPolicyRsaTokenKey,
  'ContentKeyPolicyRestrictionTokenKey.#Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey' : exports.ContentKeyPolicyX509CertificateTokenKey,
  'ContentKeyPolicyRestriction.#Microsoft.Media.ContentKeyPolicyTokenRestriction' : exports.ContentKeyPolicyTokenRestriction,
  'ContentKeyPolicyConfiguration.#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration' : exports.ContentKeyPolicyClearKeyConfiguration,
  'ContentKeyPolicyConfiguration.#Microsoft.Media.ContentKeyPolicyUnknownConfiguration' : exports.ContentKeyPolicyUnknownConfiguration,
  'ContentKeyPolicyConfiguration.#Microsoft.Media.ContentKeyPolicyWidevineConfiguration' : exports.ContentKeyPolicyWidevineConfiguration,
  'ContentKeyPolicyConfiguration.#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration' : exports.ContentKeyPolicyPlayReadyConfiguration,
  'ContentKeyPolicyConfiguration.#Microsoft.Media.ContentKeyPolicyFairPlayConfiguration' : exports.ContentKeyPolicyFairPlayConfiguration,
  'Preset' : exports.Preset,
  'Codec' : exports.Codec,
  'Codec.#Microsoft.Media.Audio' : exports.Audio,
  'Codec.#Microsoft.Media.AacAudio' : exports.AacAudio,
  'Preset.#Microsoft.Media.AudioAnalyzerPreset' : exports.AudioAnalyzerPreset,
  'Overlay' : exports.Overlay,
  'Overlay.#Microsoft.Media.AudioOverlay' : exports.AudioOverlay,
  'Codec.#Microsoft.Media.CopyVideo' : exports.CopyVideo,
  'Codec.#Microsoft.Media.Video' : exports.Video,
  'Codec.#Microsoft.Media.Image' : exports.Image,
  'Format' : exports.Format,
  'Format.#Microsoft.Media.ImageFormat' : exports.ImageFormat,
  'Format.#Microsoft.Media.JpgFormat' : exports.JpgFormat,
  'Format.#Microsoft.Media.PngFormat' : exports.PngFormat,
  'Codec.#Microsoft.Media.BmpImage' : exports.BmpImage,
  'Layer' : exports.Layer,
  'Layer.#Microsoft.Media.BmpLayer' : exports.BmpLayer,
  'Codec.#Microsoft.Media.CopyAudio' : exports.CopyAudio,
  'Layer.#Microsoft.Media.VideoLayer' : exports.VideoLayer,
  'Layer.#Microsoft.Media.H264Layer' : exports.H264Layer,
  'Codec.#Microsoft.Media.H264Video' : exports.H264Video,
  'Layer.#Microsoft.Media.JpgLayer' : exports.JpgLayer,
  'Codec.#Microsoft.Media.JpgImage' : exports.JpgImage,
  'Format.#Microsoft.Media.MultiBitrateFormat' : exports.MultiBitrateFormat,
  'Format.#Microsoft.Media.Mp4Format' : exports.Mp4Format,
  'Layer.#Microsoft.Media.PngLayer' : exports.PngLayer,
  'Codec.#Microsoft.Media.PngImage' : exports.PngImage,
  'Preset.#Microsoft.Media.BuiltInStandardEncoderPreset' : exports.BuiltInStandardEncoderPreset,
  'Preset.#Microsoft.Media.StandardEncoderPreset' : exports.StandardEncoderPreset,
  'Preset.#Microsoft.Media.VideoAnalyzerPreset' : exports.VideoAnalyzerPreset,
  'Format.#Microsoft.Media.TransportStreamFormat' : exports.TransportStreamFormat,
  'Overlay.#Microsoft.Media.VideoOverlay' : exports.VideoOverlay,
  'JobInput' : exports.JobInput,
  'JobInput.#Microsoft.Media.JobInputClip' : exports.JobInputClip,
  'JobInput.#Microsoft.Media.JobInputs' : exports.JobInputs,
  'JobInput.#Microsoft.Media.JobInputAsset' : exports.JobInputAsset,
  'JobInput.#Microsoft.Media.JobInputHttp' : exports.JobInputHttp,
  'JobOutput' : exports.JobOutput,
  'JobOutput.#Microsoft.Media.JobOutputAsset' : exports.JobOutputAsset
};
