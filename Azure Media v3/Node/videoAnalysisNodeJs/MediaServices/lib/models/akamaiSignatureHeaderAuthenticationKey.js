/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Akamai Signature Header authentication key.
 *
 */
class AkamaiSignatureHeaderAuthenticationKey {
  /**
   * Create a AkamaiSignatureHeaderAuthenticationKey.
   * @member {string} [identifier] identifier of the key
   * @member {string} [base64Key] authentication key
   * @member {date} [expiration] The exact time the authentication key.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AkamaiSignatureHeaderAuthenticationKey
   *
   * @returns {object} metadata of AkamaiSignatureHeaderAuthenticationKey
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AkamaiSignatureHeaderAuthenticationKey',
      type: {
        name: 'Composite',
        className: 'AkamaiSignatureHeaderAuthenticationKey',
        modelProperties: {
          identifier: {
            required: false,
            serializedName: 'identifier',
            type: {
              name: 'String'
            }
          },
          base64Key: {
            required: false,
            serializedName: 'base64Key',
            type: {
              name: 'String'
            }
          },
          expiration: {
            required: false,
            serializedName: 'expiration',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = AkamaiSignatureHeaderAuthenticationKey;
