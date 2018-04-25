/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Describes the properties for an output image file.
 *
 * @extends models['Format']
 */
class ImageFormat extends models['Format'] {
  /**
   * Create a ImageFormat.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ImageFormat
   *
   * @returns {object} metadata of ImageFormat
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.ImageFormat',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Format',
        className: 'ImageFormat',
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

module.exports = ImageFormat;
