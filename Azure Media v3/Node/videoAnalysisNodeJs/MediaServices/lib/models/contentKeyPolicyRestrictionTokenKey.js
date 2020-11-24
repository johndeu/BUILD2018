/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Base class for Content Key Policy key for token validation. A derived class
 * must be used to create a token key.
 *
 */
class ContentKeyPolicyRestrictionTokenKey {
  /**
   * Create a ContentKeyPolicyRestrictionTokenKey.
   * @member {string} odatatype Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of ContentKeyPolicyRestrictionTokenKey
   *
   * @returns {object} metadata of ContentKeyPolicyRestrictionTokenKey
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContentKeyPolicyRestrictionTokenKey',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'ContentKeyPolicyRestrictionTokenKey',
        className: 'ContentKeyPolicyRestrictionTokenKey',
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

module.exports = ContentKeyPolicyRestrictionTokenKey;
