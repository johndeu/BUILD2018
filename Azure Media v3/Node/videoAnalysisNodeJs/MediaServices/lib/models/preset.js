/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Base type for all Presets, which define the recipe or instructions on how
 * the input media files should be processed.
 *
 */
class Preset {
  /**
   * Create a Preset.
   * @member {string} odatatype Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of Preset
   *
   * @returns {object} metadata of Preset
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Preset',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Preset',
        className: 'Preset',
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

module.exports = Preset;
