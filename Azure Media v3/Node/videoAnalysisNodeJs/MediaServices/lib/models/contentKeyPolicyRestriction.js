/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Base class for Content Key Policy restrictions. A derived class must be used
 * to create a restriction.
 *
 */
class ContentKeyPolicyRestriction {
  /**
   * Create a ContentKeyPolicyRestriction.
   * @member {string} odatatype Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of ContentKeyPolicyRestriction
   *
   * @returns {object} metadata of ContentKeyPolicyRestriction
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContentKeyPolicyRestriction',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'ContentKeyPolicyRestriction',
        className: 'ContentKeyPolicyRestriction',
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

module.exports = ContentKeyPolicyRestriction;
