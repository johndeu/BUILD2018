/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * A Streaming Policy resource
 *
 * @extends models['ProxyResource']
 */
class StreamingPolicy extends models['ProxyResource'] {
  /**
   * Create a StreamingPolicy.
   * @member {date} [created] Creation time of Streaming Policy
   * @member {string} [defaultContentKeyPolicyName] Default ContentKey used by
   * current Streaming Policy
   * @member {object} [envelopeEncryption] Configuration of EnvelopeEncryption
   * @member {object} [envelopeEncryption.enabledProtocols] Representing
   * supported protocols
   * @member {boolean} [envelopeEncryption.enabledProtocols.download] Enable
   * Download protocol or not
   * @member {boolean} [envelopeEncryption.enabledProtocols.dash] Enable Dash
   * protocol or not
   * @member {boolean} [envelopeEncryption.enabledProtocols.hls] Enable Hls
   * protocol or not
   * @member {boolean} [envelopeEncryption.enabledProtocols.smoothStreaming]
   * Enable SmoothStreaming protocol or not
   * @member {array} [envelopeEncryption.clearTracks] Representing which tracks
   * should not be encrypted
   * @member {object} [envelopeEncryption.contentKeys] Representing default
   * content key for each encryption scheme and separate content keys for
   * specific tracks
   * @member {object} [envelopeEncryption.contentKeys.defaultKey] Default
   * content key for an encryption scheme
   * @member {string} [envelopeEncryption.contentKeys.defaultKey.label] Label
   * can be used to specify Content Key when creating Stremaing Locator
   * @member {string} [envelopeEncryption.contentKeys.defaultKey.policyName]
   * Policy used by Default Key
   * @member {array} [envelopeEncryption.contentKeys.keyToTrackMappings]
   * Representing tracks needs sepearete content key
   * @member {string} [envelopeEncryption.customLicenseAcquisitionUrlTemplate]
   * The template for a customer service to deliver keys to end users.  Not
   * needed if using the built in Key Delivery service.
   * @member {object} [commonEncryptionCenc] Configuration of
   * CommonEncryptionCenc
   * @member {object} [commonEncryptionCenc.enabledProtocols] Representing
   * supported protocols
   * @member {boolean} [commonEncryptionCenc.enabledProtocols.download] Enable
   * Download protocol or not
   * @member {boolean} [commonEncryptionCenc.enabledProtocols.dash] Enable Dash
   * protocol or not
   * @member {boolean} [commonEncryptionCenc.enabledProtocols.hls] Enable Hls
   * protocol or not
   * @member {boolean} [commonEncryptionCenc.enabledProtocols.smoothStreaming]
   * Enable SmoothStreaming protocol or not
   * @member {array} [commonEncryptionCenc.clearTracks] Representing which
   * tracks should not be encrypted
   * @member {object} [commonEncryptionCenc.contentKeys] Representing default
   * content key for each encryption scheme and separate content keys for
   * specific tracks
   * @member {object} [commonEncryptionCenc.contentKeys.defaultKey] Default
   * content key for an encryption scheme
   * @member {string} [commonEncryptionCenc.contentKeys.defaultKey.label] Label
   * can be used to specify Content Key when creating Stremaing Locator
   * @member {string} [commonEncryptionCenc.contentKeys.defaultKey.policyName]
   * Policy used by Default Key
   * @member {array} [commonEncryptionCenc.contentKeys.keyToTrackMappings]
   * Representing tracks needs sepearete content key
   * @member {object} [commonEncryptionCenc.drm] Represents configuration
   * specific to Dynamic Encryption using the scheme defined in ISO/IEC 23001-7
   * (also known as MPEG Common Encryption) using the 'cbcs' scheme.
   * @member {object} [commonEncryptionCenc.drm.playReady] PlayReady
   * configurations
   * @member {string}
   * [commonEncryptionCenc.drm.playReady.customLicenseAcquisitionUrlTemplate]
   * The template for a customer service to deliver keys to end users.  Not
   * needed if using the built in Key Delivery service.
   * @member {string}
   * [commonEncryptionCenc.drm.playReady.playReadyCustomAttributes] Custom
   * attributes for PlayReady
   * @member {object} [commonEncryptionCenc.drm.widevine] Widevine
   * configurations
   * @member {string}
   * [commonEncryptionCenc.drm.widevine.customLicenseAcquisitionUrlTemplate]
   * The template for a customer service to deliver keys to end users.  Not
   * needed if using the built in Key Delivery service.
   * @member {object} [commonEncryptionCbcs] Configuration of
   * CommonEncryptionCbcs
   * @member {object} [commonEncryptionCbcs.enabledProtocols] Representing
   * supported protocols
   * @member {boolean} [commonEncryptionCbcs.enabledProtocols.download] Enable
   * Download protocol or not
   * @member {boolean} [commonEncryptionCbcs.enabledProtocols.dash] Enable Dash
   * protocol or not
   * @member {boolean} [commonEncryptionCbcs.enabledProtocols.hls] Enable Hls
   * protocol or not
   * @member {boolean} [commonEncryptionCbcs.enabledProtocols.smoothStreaming]
   * Enable SmoothStreaming protocol or not
   * @member {array} [commonEncryptionCbcs.clearTracks] Representing which
   * tracks should not be encrypted
   * @member {object} [commonEncryptionCbcs.contentKeys] Representing default
   * content key for each encryption scheme and separate content keys for
   * specific tracks
   * @member {object} [commonEncryptionCbcs.contentKeys.defaultKey] Default
   * content key for an encryption scheme
   * @member {string} [commonEncryptionCbcs.contentKeys.defaultKey.label] Label
   * can be used to specify Content Key when creating Stremaing Locator
   * @member {string} [commonEncryptionCbcs.contentKeys.defaultKey.policyName]
   * Policy used by Default Key
   * @member {array} [commonEncryptionCbcs.contentKeys.keyToTrackMappings]
   * Representing tracks needs sepearete content key
   * @member {object} [commonEncryptionCbcs.drm] Configuration of DRMs for
   * current encryption scheme
   * @member {object} [commonEncryptionCbcs.drm.fairPlay] Fairplay
   * configurations
   * @member {string}
   * [commonEncryptionCbcs.drm.fairPlay.customLicenseAcquisitionUrlTemplate]
   * The template for a customer service to deliver keys to end users.  Not
   * needed if using the built in Key Delivery service.
   * @member {boolean}
   * [commonEncryptionCbcs.drm.fairPlay.allowPersistentLicense] All license to
   * be persistent or not
   * @member {object} [commonEncryptionCbcs.drm.playReady] PlayReady
   * configurations
   * @member {string}
   * [commonEncryptionCbcs.drm.playReady.customLicenseAcquisitionUrlTemplate]
   * The template for a customer service to deliver keys to end users.  Not
   * needed if using the built in Key Delivery service.
   * @member {string}
   * [commonEncryptionCbcs.drm.playReady.playReadyCustomAttributes] Custom
   * attributes for PlayReady
   * @member {object} [commonEncryptionCbcs.drm.widevine] Widevine
   * configurations
   * @member {string}
   * [commonEncryptionCbcs.drm.widevine.customLicenseAcquisitionUrlTemplate]
   * The template for a customer service to deliver keys to end users.  Not
   * needed if using the built in Key Delivery service.
   * @member {object} [noEncryption] Configuations of NoEncryption
   * @member {object} [noEncryption.enabledProtocols] Representing supported
   * protocols
   * @member {boolean} [noEncryption.enabledProtocols.download] Enable Download
   * protocol or not
   * @member {boolean} [noEncryption.enabledProtocols.dash] Enable Dash
   * protocol or not
   * @member {boolean} [noEncryption.enabledProtocols.hls] Enable Hls protocol
   * or not
   * @member {boolean} [noEncryption.enabledProtocols.smoothStreaming] Enable
   * SmoothStreaming protocol or not
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StreamingPolicy
   *
   * @returns {object} metadata of StreamingPolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StreamingPolicy',
      type: {
        name: 'Composite',
        className: 'StreamingPolicy',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          created: {
            required: false,
            readOnly: true,
            serializedName: 'properties.created',
            type: {
              name: 'DateTime'
            }
          },
          defaultContentKeyPolicyName: {
            required: false,
            serializedName: 'properties.defaultContentKeyPolicyName',
            type: {
              name: 'String'
            }
          },
          envelopeEncryption: {
            required: false,
            serializedName: 'properties.envelopeEncryption',
            type: {
              name: 'Composite',
              className: 'EnvelopeEncryption'
            }
          },
          commonEncryptionCenc: {
            required: false,
            serializedName: 'properties.commonEncryptionCenc',
            type: {
              name: 'Composite',
              className: 'CommonEncryptionCenc'
            }
          },
          commonEncryptionCbcs: {
            required: false,
            serializedName: 'properties.commonEncryptionCbcs',
            type: {
              name: 'Composite',
              className: 'CommonEncryptionCbcs'
            }
          },
          noEncryption: {
            required: false,
            serializedName: 'properties.noEncryption',
            type: {
              name: 'Composite',
              className: 'NoEncryption'
            }
          }
        }
      }
    };
  }
}

module.exports = StreamingPolicy;
