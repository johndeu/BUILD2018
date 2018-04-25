/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * This represents a layer in the BmpImage class.
 *
 * @extends models['Layer']
 */
class BmpLayer extends models['Layer'] {
  /**
   * Create a BmpLayer.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of BmpLayer
   *
   * @returns {object} metadata of BmpLayer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.BmpLayer',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Layer',
        className: 'BmpLayer',
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

module.exports = BmpLayer;
