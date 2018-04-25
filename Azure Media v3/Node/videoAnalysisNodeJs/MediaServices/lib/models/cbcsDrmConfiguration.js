/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Class to specify drm configurations of CommonEncryptionCbcs scheme in
 * Streaming Policy
 *
 */
class CbcsDrmConfiguration {
  /**
   * Create a CbcsDrmConfiguration.
   * @member {object} [fairPlay] Fairplay configurations
   * @member {string} [fairPlay.customLicenseAcquisitionUrlTemplate] The
   * template for a customer service to deliver keys to end users.  Not needed
   * if using the built in Key Delivery service.
   * @member {boolean} [fairPlay.allowPersistentLicense] All license to be
   * persistent or not
   * @member {object} [playReady] PlayReady configurations
   * @member {string} [playReady.customLicenseAcquisitionUrlTemplate] The
   * template for a customer service to deliver keys to end users.  Not needed
   * if using the built in Key Delivery service.
   * @member {string} [playReady.playReadyCustomAttributes] Custom attributes
   * for PlayReady
   * @member {object} [widevine] Widevine configurations
   * @member {string} [widevine.customLicenseAcquisitionUrlTemplate] The
   * template for a customer service to deliver keys to end users.  Not needed
   * if using the built in Key Delivery service.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CbcsDrmConfiguration
   *
   * @returns {object} metadata of CbcsDrmConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CbcsDrmConfiguration',
      type: {
        name: 'Composite',
        className: 'CbcsDrmConfiguration',
        modelProperties: {
          fairPlay: {
            required: false,
            serializedName: 'fairPlay',
            type: {
              name: 'Composite',
              className: 'StreamingPolicyFairPlayConfiguration'
            }
          },
          playReady: {
            required: false,
            serializedName: 'playReady',
            type: {
              name: 'Composite',
              className: 'StreamingPolicyPlayReadyConfiguration'
            }
          },
          widevine: {
            required: false,
            serializedName: 'widevine',
            type: {
              name: 'Composite',
              className: 'StreamingPolicyWidevineConfiguration'
            }
          }
        }
      }
    };
  }
}

module.exports = CbcsDrmConfiguration;
