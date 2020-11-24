/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Describes the settings to be used when encoding the input video into a
 * desired output bitrate layer with the H264 video codec.
 *
 * @extends models['VideoLayer']
 */
class H264Layer extends models['VideoLayer'] {
  /**
   * Create a H264Layer.
   * @member {string} [profile] Describes which Profile of the H.264 standard
   * should be used when encoding this layer. Default is Auto. Possible values
   * include: 'Auto', 'Baseline', 'Main', 'High', 'High422', 'High444'
   * @member {string} [level] Describes which Level of the H.264 standard
   * should be used when encoding this layer. The value can be Auto, or a
   * number that matches the H264 Profile. If not specified, the default is
   * Auto, which lets the encoder choose the Level that is appropriate for this
   * layer.
   * @member {moment.duration} [bufferWindow] Describes the VBV buffer window
   * length. The value should be in ISO 8601 format. The default is PT5S or 5
   * seconds.
   * @member {number} [referenceFrames] Describes the number of reference
   * frames to be used when encoding this layer. If not specified, the encoder
   * determines an appropriate number based on the encoder complexity setting.
   * @member {string} [entropyMode] Describes the entropy mode to be used for
   * this layer. If not specified, the encoder chooses the mode that is
   * appropriate for the Profile and Level. Possible values include: 'Cabac',
   * 'Cavlc'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of H264Layer
   *
   * @returns {object} metadata of H264Layer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.H264Layer',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Layer',
        className: 'H264Layer',
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
          bitrate: {
            required: false,
            serializedName: 'bitrate',
            type: {
              name: 'Number'
            }
          },
          maxBitrate: {
            required: false,
            serializedName: 'maxBitrate',
            type: {
              name: 'Number'
            }
          },
          bFrames: {
            required: false,
            serializedName: 'bFrames',
            type: {
              name: 'Number'
            }
          },
          frameRate: {
            required: false,
            serializedName: 'frameRate',
            type: {
              name: 'String'
            }
          },
          slices: {
            required: false,
            serializedName: 'slices',
            type: {
              name: 'Number'
            }
          },
          adaptiveBFrame: {
            required: false,
            serializedName: 'adaptiveBFrame',
            type: {
              name: 'Boolean'
            }
          },
          profile: {
            required: false,
            serializedName: 'profile',
            type: {
              name: 'String'
            }
          },
          level: {
            required: false,
            serializedName: 'level',
            type: {
              name: 'String'
            }
          },
          bufferWindow: {
            required: false,
            serializedName: 'bufferWindow',
            type: {
              name: 'TimeSpan'
            }
          },
          referenceFrames: {
            required: false,
            serializedName: 'referenceFrames',
            type: {
              name: 'Number'
            }
          },
          entropyMode: {
            required: false,
            serializedName: 'entropyMode',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = H264Layer;
