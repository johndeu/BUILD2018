/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Describes the basic properties of all codecs.
 *
 */
class Codec {
  /**
   * Create a Codec.
   * @member {string} [label] Describes the optional label for the codec.
   * @member {string} odatatype Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of Codec
   *
   * @returns {object} metadata of Codec
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Codec',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Codec',
        className: 'Codec',
        modelProperties: {
          label: {
            required: false,
            serializedName: 'label',
            type: {
              name: 'String'
            }
          },
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

module.exports = Codec;
