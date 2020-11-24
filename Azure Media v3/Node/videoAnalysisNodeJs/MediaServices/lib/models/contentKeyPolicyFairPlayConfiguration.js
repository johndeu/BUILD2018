/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Specifies a configuration for FairPlay licenses.
 *
 * @extends models['ContentKeyPolicyConfiguration']
 */
class ContentKeyPolicyFairPlayConfiguration extends models['ContentKeyPolicyConfiguration'] {
  /**
   * Create a ContentKeyPolicyFairPlayConfiguration.
   * @member {buffer} ask The key that must be used as FairPlay ASk.
   * @member {string} fairPlayPfxPassword The password encrypting FairPlay
   * certificate in PKCS 12 (pfx) format.
   * @member {string} fairPlayPfx The Base64 representation of FairPlay
   * certificate in PKCS 12 (pfx) format (including private key).
   * @member {string} rentalAndLeaseKeyType The rental and lease key type.
   * Possible values include: 'Unknown', 'Undefined', 'PersistentUnlimited',
   * 'PersistentLimited'
   * @member {number} rentalDuration The rental duration. Must be greater than
   * or equal to 0.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ContentKeyPolicyFairPlayConfiguration
   *
   * @returns {object} metadata of ContentKeyPolicyFairPlayConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.ContentKeyPolicyFairPlayConfiguration',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'ContentKeyPolicyConfiguration',
        className: 'ContentKeyPolicyFairPlayConfiguration',
        modelProperties: {
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          ask: {
            required: true,
            serializedName: 'ask',
            type: {
              name: 'ByteArray'
            }
          },
          fairPlayPfxPassword: {
            required: true,
            serializedName: 'fairPlayPfxPassword',
            type: {
              name: 'String'
            }
          },
          fairPlayPfx: {
            required: true,
            serializedName: 'fairPlayPfx',
            type: {
              name: 'String'
            }
          },
          rentalAndLeaseKeyType: {
            required: true,
            serializedName: 'rentalAndLeaseKeyType',
            type: {
              name: 'String'
            }
          },
          rentalDuration: {
            required: true,
            serializedName: 'rentalDuration',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ContentKeyPolicyFairPlayConfiguration;
