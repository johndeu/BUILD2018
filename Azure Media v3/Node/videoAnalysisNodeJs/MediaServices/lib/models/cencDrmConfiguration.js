/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Class to specify drm configurations of CommonEncryptionCenc scheme in
 * Streaming Policy
 *
 */
class CencDrmConfiguration {
  /**
   * Create a CencDrmConfiguration.
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
   * Defines the metadata of CencDrmConfiguration
   *
   * @returns {object} metadata of CencDrmConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CencDrmConfiguration',
      type: {
        name: 'Composite',
        className: 'CencDrmConfiguration',
        modelProperties: {
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

module.exports = CencDrmConfiguration;
