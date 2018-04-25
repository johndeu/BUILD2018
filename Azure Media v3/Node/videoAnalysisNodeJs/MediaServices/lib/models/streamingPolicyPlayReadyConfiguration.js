/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Class to specify configurations of PlayReady in Streaming Policy
 *
 */
class StreamingPolicyPlayReadyConfiguration {
  /**
   * Create a StreamingPolicyPlayReadyConfiguration.
   * @member {string} [customLicenseAcquisitionUrlTemplate] The template for a
   * customer service to deliver keys to end users.  Not needed if using the
   * built in Key Delivery service.
   * @member {string} [playReadyCustomAttributes] Custom attributes for
   * PlayReady
   */
  constructor() {
  }

  /**
   * Defines the metadata of StreamingPolicyPlayReadyConfiguration
   *
   * @returns {object} metadata of StreamingPolicyPlayReadyConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StreamingPolicyPlayReadyConfiguration',
      type: {
        name: 'Composite',
        className: 'StreamingPolicyPlayReadyConfiguration',
        modelProperties: {
          customLicenseAcquisitionUrlTemplate: {
            required: false,
            serializedName: 'customLicenseAcquisitionUrlTemplate',
            type: {
              name: 'String'
            }
          },
          playReadyCustomAttributes: {
            required: false,
            serializedName: 'playReadyCustomAttributes',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = StreamingPolicyPlayReadyConfiguration;
