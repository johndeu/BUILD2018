/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Represents a ContentKeyPolicyConfiguration that is unavailable in the
 * current API version.
 *
 * @extends models['ContentKeyPolicyConfiguration']
 */
class ContentKeyPolicyUnknownConfiguration extends models['ContentKeyPolicyConfiguration'] {
  /**
   * Create a ContentKeyPolicyUnknownConfiguration.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ContentKeyPolicyUnknownConfiguration
   *
   * @returns {object} metadata of ContentKeyPolicyUnknownConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.ContentKeyPolicyUnknownConfiguration',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'ContentKeyPolicyConfiguration',
        className: 'ContentKeyPolicyUnknownConfiguration',
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

module.exports = ContentKeyPolicyUnknownConfiguration;
