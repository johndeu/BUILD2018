/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Specifies that the content key ID is in the PlayReady header.
 *
 * @extends models['ContentKeyPolicyPlayReadyContentKeyLocation']
 */
class ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader extends models['ContentKeyPolicyPlayReadyContentKeyLocation'] {
  /**
   * Create a ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader
   *
   * @returns {object} metadata of ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'ContentKeyPolicyPlayReadyContentKeyLocation',
        className: 'ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader',
        modelProperties: {
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader;
