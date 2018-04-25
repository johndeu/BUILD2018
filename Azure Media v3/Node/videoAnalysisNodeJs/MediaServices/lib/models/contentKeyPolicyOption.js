/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Represents a policy option.
 *
 */
class ContentKeyPolicyOption {
  /**
   * Create a ContentKeyPolicyOption.
   * @member {uuid} [policyOptionId] The legacy Policy Option ID.
   * @member {string} [name] The Policy Option description.
   * @member {object} configuration The key delivery configuration.
   * @member {string} [configuration.odatatype] Polymorphic Discriminator
   * @member {object} restriction The requirements that must be met to deliver
   * keys with this configuration
   * @member {string} [restriction.odatatype] Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of ContentKeyPolicyOption
   *
   * @returns {object} metadata of ContentKeyPolicyOption
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContentKeyPolicyOption',
      type: {
        name: 'Composite',
        className: 'ContentKeyPolicyOption',
        modelProperties: {
          policyOptionId: {
            required: false,
            readOnly: true,
            serializedName: 'policyOptionId',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          configuration: {
            required: true,
            serializedName: 'configuration',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '@odata.type',
                clientName: 'odatatype'
              },
              uberParent: 'ContentKeyPolicyConfiguration',
              className: 'ContentKeyPolicyConfiguration'
            }
          },
          restriction: {
            required: true,
            serializedName: 'restriction',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '@odata.type',
                clientName: 'odatatype'
              },
              uberParent: 'ContentKeyPolicyRestriction',
              className: 'ContentKeyPolicyRestriction'
            }
          }
        }
      }
    };
  }
}

module.exports = ContentKeyPolicyOption;
