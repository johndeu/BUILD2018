/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Represents an open restriction. License or key will be delivered on every
 * request.
 *
 * @extends models['ContentKeyPolicyRestriction']
 */
class ContentKeyPolicyOpenRestriction extends models['ContentKeyPolicyRestriction'] {
  /**
   * Create a ContentKeyPolicyOpenRestriction.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ContentKeyPolicyOpenRestriction
   *
   * @returns {object} metadata of ContentKeyPolicyOpenRestriction
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.ContentKeyPolicyOpenRestriction',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'ContentKeyPolicyRestriction',
        className: 'ContentKeyPolicyOpenRestriction',
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

module.exports = ContentKeyPolicyOpenRestriction;
