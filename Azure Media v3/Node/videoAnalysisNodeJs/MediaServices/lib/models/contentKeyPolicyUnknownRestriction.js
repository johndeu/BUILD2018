/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Represents a ContentKeyPolicyRestriction that is unavailable in the current
 * API version.
 *
 * @extends models['ContentKeyPolicyRestriction']
 */
class ContentKeyPolicyUnknownRestriction extends models['ContentKeyPolicyRestriction'] {
  /**
   * Create a ContentKeyPolicyUnknownRestriction.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ContentKeyPolicyUnknownRestriction
   *
   * @returns {object} metadata of ContentKeyPolicyUnknownRestriction
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.ContentKeyPolicyUnknownRestriction',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'ContentKeyPolicyRestriction',
        className: 'ContentKeyPolicyUnknownRestriction',
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

module.exports = ContentKeyPolicyUnknownRestriction;
