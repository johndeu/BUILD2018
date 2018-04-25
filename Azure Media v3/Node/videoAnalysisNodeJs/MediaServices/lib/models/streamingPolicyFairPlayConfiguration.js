/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Class to specify configurations of FairPlay in Streaming Policy
 *
 */
class StreamingPolicyFairPlayConfiguration {
  /**
   * Create a StreamingPolicyFairPlayConfiguration.
   * @member {string} [customLicenseAcquisitionUrlTemplate] The template for a
   * customer service to deliver keys to end users.  Not needed if using the
   * built in Key Delivery service.
   * @member {boolean} allowPersistentLicense All license to be persistent or
   * not
   */
  constructor() {
  }

  /**
   * Defines the metadata of StreamingPolicyFairPlayConfiguration
   *
   * @returns {object} metadata of StreamingPolicyFairPlayConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StreamingPolicyFairPlayConfiguration',
      type: {
        name: 'Composite',
        className: 'StreamingPolicyFairPlayConfiguration',
        modelProperties: {
          customLicenseAcquisitionUrlTemplate: {
            required: false,
            serializedName: 'customLicenseAcquisitionUrlTemplate',
            type: {
              name: 'String'
            }
          },
          allowPersistentLicense: {
            required: true,
            serializedName: 'allowPersistentLicense',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = StreamingPolicyFairPlayConfiguration;
