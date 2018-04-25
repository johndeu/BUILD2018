/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Specifies a configuration for Widevine licenses.
 *
 * @extends models['ContentKeyPolicyConfiguration']
 */
class ContentKeyPolicyWidevineConfiguration extends models['ContentKeyPolicyConfiguration'] {
  /**
   * Create a ContentKeyPolicyWidevineConfiguration.
   * @member {string} widevineTemplate The Widevine template.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ContentKeyPolicyWidevineConfiguration
   *
   * @returns {object} metadata of ContentKeyPolicyWidevineConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.ContentKeyPolicyWidevineConfiguration',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'ContentKeyPolicyConfiguration',
        className: 'ContentKeyPolicyWidevineConfiguration',
        modelProperties: {
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          widevineTemplate: {
            required: true,
            serializedName: 'widevineTemplate',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ContentKeyPolicyWidevineConfiguration;
