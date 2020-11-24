/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Represents a token claim.
 *
 */
class ContentKeyPolicyTokenClaim {
  /**
   * Create a ContentKeyPolicyTokenClaim.
   * @member {string} [claimType] Token claim type.
   * @member {string} [claimValue] Token claim value.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ContentKeyPolicyTokenClaim
   *
   * @returns {object} metadata of ContentKeyPolicyTokenClaim
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContentKeyPolicyTokenClaim',
      type: {
        name: 'Composite',
        className: 'ContentKeyPolicyTokenClaim',
        modelProperties: {
          claimType: {
            required: false,
            serializedName: 'claimType',
            type: {
              name: 'String'
            }
          },
          claimValue: {
            required: false,
            serializedName: 'claimValue',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ContentKeyPolicyTokenClaim;
