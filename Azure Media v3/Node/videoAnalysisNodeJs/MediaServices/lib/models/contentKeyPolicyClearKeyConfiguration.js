/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Represents a configuration for non-DRM keys.
 *
 * @extends models['ContentKeyPolicyConfiguration']
 */
class ContentKeyPolicyClearKeyConfiguration extends models['ContentKeyPolicyConfiguration'] {
  /**
   * Create a ContentKeyPolicyClearKeyConfiguration.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ContentKeyPolicyClearKeyConfiguration
   *
   * @returns {object} metadata of ContentKeyPolicyClearKeyConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'ContentKeyPolicyConfiguration',
        className: 'ContentKeyPolicyClearKeyConfiguration',
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

module.exports = ContentKeyPolicyClearKeyConfiguration;
