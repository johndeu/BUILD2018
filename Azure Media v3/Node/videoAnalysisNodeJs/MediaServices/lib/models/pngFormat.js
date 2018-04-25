/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Describes the settings to produce PNG thumbnail output.
 *
 * @extends models['ImageFormat']
 */
class PngFormat extends models['ImageFormat'] {
  /**
   * Create a PngFormat.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PngFormat
   *
   * @returns {object} metadata of PngFormat
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.PngFormat',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Format',
        className: 'PngFormat',
        modelProperties: {
          filenamePattern: {
            required: false,
            serializedName: 'filenamePattern',
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

module.exports = PngFormat;
