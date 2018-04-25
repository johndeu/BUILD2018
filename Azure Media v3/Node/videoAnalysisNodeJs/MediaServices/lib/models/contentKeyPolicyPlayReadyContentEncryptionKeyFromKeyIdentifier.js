/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Specifies that the content key ID is specified in the PlayReady
 * configuration.
 *
 * @extends models['ContentKeyPolicyPlayReadyContentKeyLocation']
 */
class ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier extends models['ContentKeyPolicyPlayReadyContentKeyLocation'] {
  /**
   * Create a ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier.
   * @member {uuid} keyId The content key ID.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier
   *
   * @returns {object} metadata of ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'ContentKeyPolicyPlayReadyContentKeyLocation',
        className: 'ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier',
        modelProperties: {
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          keyId: {
            required: true,
            serializedName: 'keyId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier;
