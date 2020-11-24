/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Specifies a symmetric key for token validation.
 *
 * @extends models['ContentKeyPolicyRestrictionTokenKey']
 */
class ContentKeyPolicySymmetricTokenKey extends models['ContentKeyPolicyRestrictionTokenKey'] {
  /**
   * Create a ContentKeyPolicySymmetricTokenKey.
   * @member {buffer} keyValue The key value of the key
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ContentKeyPolicySymmetricTokenKey
   *
   * @returns {object} metadata of ContentKeyPolicySymmetricTokenKey
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.ContentKeyPolicySymmetricTokenKey',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'ContentKeyPolicyRestrictionTokenKey',
        className: 'ContentKeyPolicySymmetricTokenKey',
        modelProperties: {
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          keyValue: {
            required: true,
            serializedName: 'keyValue',
            type: {
              name: 'ByteArray'
            }
          }
        }
      }
    };
  }
}

module.exports = ContentKeyPolicySymmetricTokenKey;
