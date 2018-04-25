/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Describes the settings to produce a JPEG image from the input video.
 *
 * @extends models['Layer']
 */
class JpgLayer extends models['Layer'] {
  /**
   * Create a JpgLayer.
   * @member {number} [quality] Describes the compression quality of the JPEG
   * output. Range is from 0-100 and the default is 70.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of JpgLayer
   *
   * @returns {object} metadata of JpgLayer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.JpgLayer',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Layer',
        className: 'JpgLayer',
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
          },
          quality: {
            required: false,
            serializedName: 'quality',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = JpgLayer;
