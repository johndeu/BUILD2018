/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Class to specify configurations of Widevine in Streaming Policy
 *
 */
class StreamingPolicyWidevineConfiguration {
  /**
   * Create a StreamingPolicyWidevineConfiguration.
   * @member {string} [customLicenseAcquisitionUrlTemplate] The template for a
   * customer service to deliver keys to end users.  Not needed if using the
   * built in Key Delivery service.
   */
  constructor() {
  }

  /**
   * Defines the metadata of StreamingPolicyWidevineConfiguration
   *
   * @returns {object} metadata of StreamingPolicyWidevineConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StreamingPolicyWidevineConfiguration',
      type: {
        name: 'Composite',
        className: 'StreamingPolicyWidevineConfiguration',
        modelProperties: {
          customLicenseAcquisitionUrlTemplate: {
            required: false,
            serializedName: 'customLicenseAcquisitionUrlTemplate',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = StreamingPolicyWidevineConfiguration;
