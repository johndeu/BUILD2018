/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Class for CommonEncryptionCbcs encryption scheme
 *
 */
class CommonEncryptionCbcs {
  /**
   * Create a CommonEncryptionCbcs.
   * @member {object} [enabledProtocols] Representing supported protocols
   * @member {boolean} [enabledProtocols.download] Enable Download protocol or
   * not
   * @member {boolean} [enabledProtocols.dash] Enable Dash protocol or not
   * @member {boolean} [enabledProtocols.hls] Enable Hls protocol or not
   * @member {boolean} [enabledProtocols.smoothStreaming] Enable
   * SmoothStreaming protocol or not
   * @member {array} [clearTracks] Representing which tracks should not be
   * encrypted
   * @member {object} [contentKeys] Representing default content key for each
   * encryption scheme and separate content keys for specific tracks
   * @member {object} [contentKeys.defaultKey] Default content key for an
   * encryption scheme
   * @member {string} [contentKeys.defaultKey.label] Label can be used to
   * specify Content Key when creating Stremaing Locator
   * @member {string} [contentKeys.defaultKey.policyName] Policy used by
   * Default Key
   * @member {array} [contentKeys.keyToTrackMappings] Representing tracks needs
   * sepearete content key
   * @member {object} [drm] Configuration of DRMs for current encryption scheme
   * @member {object} [drm.fairPlay] Fairplay configurations
   * @member {string} [drm.fairPlay.customLicenseAcquisitionUrlTemplate] The
   * template for a customer service to deliver keys to end users.  Not needed
   * if using the built in Key Delivery service.
   * @member {boolean} [drm.fairPlay.allowPersistentLicense] All license to be
   * persistent or not
   * @member {object} [drm.playReady] PlayReady configurations
   * @member {string} [drm.playReady.customLicenseAcquisitionUrlTemplate] The
   * template for a customer service to deliver keys to end users.  Not needed
   * if using the built in Key Delivery service.
   * @member {string} [drm.playReady.playReadyCustomAttributes] Custom
   * attributes for PlayReady
   * @member {object} [drm.widevine] Widevine configurations
   * @member {string} [drm.widevine.customLicenseAcquisitionUrlTemplate] The
   * template for a customer service to deliver keys to end users.  Not needed
   * if using the built in Key Delivery service.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CommonEncryptionCbcs
   *
   * @returns {object} metadata of CommonEncryptionCbcs
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CommonEncryptionCbcs',
      type: {
        name: 'Composite',
        className: 'CommonEncryptionCbcs',
        modelProperties: {
          enabledProtocols: {
            required: false,
            serializedName: 'enabledProtocols',
            type: {
              name: 'Composite',
              className: 'EnabledProtocols'
            }
          },
          clearTracks: {
            required: false,
            serializedName: 'clearTracks',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TrackSelectionElementType',
                  type: {
                    name: 'Composite',
                    className: 'TrackSelection'
                  }
              }
            }
          },
          contentKeys: {
            required: false,
            serializedName: 'contentKeys',
            type: {
              name: 'Composite',
              className: 'StreamingPolicyContentKeys'
            }
          },
          drm: {
            required: false,
            serializedName: 'drm',
            type: {
              name: 'Composite',
              className: 'CbcsDrmConfiguration'
            }
          }
        }
      }
    };
  }
}

module.exports = CommonEncryptionCbcs;
