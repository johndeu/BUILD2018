/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Specifies a RSA key for token validation
 *
 * @extends models['ContentKeyPolicyRestrictionTokenKey']
 */
class ContentKeyPolicyRsaTokenKey extends models['ContentKeyPolicyRestrictionTokenKey'] {
  /**
   * Create a ContentKeyPolicyRsaTokenKey.
   * @member {buffer} exponent The RSA Parameter exponent
   * @member {buffer} modulus The RSA Parameter modulus
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ContentKeyPolicyRsaTokenKey
   *
   * @returns {object} metadata of ContentKeyPolicyRsaTokenKey
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.ContentKeyPolicyRsaTokenKey',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'ContentKeyPolicyRestrictionTokenKey',
        className: 'ContentKeyPolicyRsaTokenKey',
        modelProperties: {
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          exponent: {
            required: true,
            serializedName: 'exponent',
            type: {
              name: 'ByteArray'
            }
          },
          modulus: {
            required: true,
            serializedName: 'modulus',
            type: {
              name: 'ByteArray'
            }
          }
        }
      }
    };
  }
}

module.exports = ContentKeyPolicyRsaTokenKey;
