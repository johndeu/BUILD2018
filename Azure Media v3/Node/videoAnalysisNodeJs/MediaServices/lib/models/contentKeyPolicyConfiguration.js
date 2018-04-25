/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Base class for Content Key Policy configuration. A derived class must be
 * used to create a configuration.
 *
 */
class ContentKeyPolicyConfiguration {
  /**
   * Create a ContentKeyPolicyConfiguration.
   * @member {string} odatatype Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of ContentKeyPolicyConfiguration
   *
   * @returns {object} metadata of ContentKeyPolicyConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContentKeyPolicyConfiguration',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'ContentKeyPolicyConfiguration',
        className: 'ContentKeyPolicyConfiguration',
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

module.exports = ContentKeyPolicyConfiguration;
