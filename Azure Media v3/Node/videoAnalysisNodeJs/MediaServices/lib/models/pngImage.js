/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * This class represents a video encoder which outputs a sequence of Png
 * images.
 *
 * @extends models['Image']
 */
class PngImage extends models['Image'] {
  /**
   * Create a PngImage.
   * @member {array} [layers] Describes a collection of output PNG layers to be
   * produced by the encoder.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PngImage
   *
   * @returns {object} metadata of PngImage
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.PngImage',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Codec',
        className: 'PngImage',
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
          },
          layers: {
            required: false,
            serializedName: 'layers',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PngLayerElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '@odata.type',
                      clientName: 'odatatype'
                    },
                    uberParent: 'Layer',
                    className: 'PngLayer'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PngImage;
