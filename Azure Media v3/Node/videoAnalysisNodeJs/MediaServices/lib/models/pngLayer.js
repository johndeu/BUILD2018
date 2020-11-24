/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Describes the settings to produce a PNG image from the input video.
 *
 * @extends models['Layer']
 */
class PngLayer extends models['Layer'] {
  /**
   * Create a PngLayer.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PngLayer
   *
   * @returns {object} metadata of PngLayer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.PngLayer',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Layer',
        className: 'PngLayer',
        modelProperties: {
          width: {
            required: false,
            serializedName: 'width',
            type: {
              name: 'String'
            }
          },
          height: {
            required: false,
            serializedName: 'height',
            type: {
              name: 'String'
            }
          },
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

module.exports = PngLayer;
