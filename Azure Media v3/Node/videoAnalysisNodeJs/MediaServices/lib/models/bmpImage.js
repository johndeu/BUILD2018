/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Describes the basic properties for generating BMP thumbnails from the input
 * video.
 *
 * @extends models['Image']
 */
class BmpImage extends models['Image'] {
  /**
   * Create a BmpImage.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of BmpImage
   *
   * @returns {object} metadata of BmpImage
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.BmpImage',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Codec',
        className: 'BmpImage',
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
          },
          keyFrameInterval: {
            required: false,
            serializedName: 'keyFrameInterval',
            type: {
              name: 'TimeSpan'
            }
          },
          stretchMode: {
            required: false,
            serializedName: 'stretchMode',
            type: {
              name: 'String'
            }
          },
          start: {
            required: false,
            serializedName: 'start',
            type: {
              name: 'String'
            }
          },
          step: {
            required: false,
            serializedName: 'step',
            type: {
              name: 'String'
            }
          },
          range: {
            required: false,
            serializedName: 'range',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BmpImage;
