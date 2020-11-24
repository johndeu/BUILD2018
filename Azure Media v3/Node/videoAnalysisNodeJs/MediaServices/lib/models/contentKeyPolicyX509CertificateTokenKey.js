/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Specifies a certificate for token validation.
 *
 * @extends models['ContentKeyPolicyRestrictionTokenKey']
 */
class ContentKeyPolicyX509CertificateTokenKey extends models['ContentKeyPolicyRestrictionTokenKey'] {
  /**
   * Create a ContentKeyPolicyX509CertificateTokenKey.
   * @member {buffer} rawBody The raw data field of a certificate in PKCS 12
   * format (X509Certificate2 in .NET)
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ContentKeyPolicyX509CertificateTokenKey
   *
   * @returns {object} metadata of ContentKeyPolicyX509CertificateTokenKey
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'ContentKeyPolicyRestrictionTokenKey',
        className: 'ContentKeyPolicyX509CertificateTokenKey',
        modelProperties: {
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          rawBody: {
            required: true,
            serializedName: 'rawBody',
            type: {
              name: 'ByteArray'
            }
          }
        }
      }
    };
  }
}

module.exports = ContentKeyPolicyX509CertificateTokenKey;
