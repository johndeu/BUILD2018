/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Describes the settings to be used when encoding the input video into a
 * desired output bitrate layer.
 *
 * @extends models['Layer']
 */
class VideoLayer extends models['Layer'] {
  /**
   * Create a VideoLayer.
   * @member {number} [bitrate] Describes the average bitrate (in bits per
   * second) at which to encode the input video when generating this layer.
   * This is a required field.
   * @member {number} [maxBitrate] Describes the maximum bitrate (in bits per
   * second), at which the VBV buffer should be assumed to refill. If not
   * specified, defaults to the same value as bitrate.
   * @member {number} [bFrames] Describes the number of B-frames to be used
   * when encoding this layer. If not specified, the encoder chooses an
   * appropriate number based on the video Profile and Level.
   * @member {string} [frameRate] Describes the frame rate (in frames per
   * second) at which to encode this layer. The value can be in the form of M/N
   * where M and N are integers (e.g. 30000/1001), or in the form of a number
   * (e.g. 30, or 29.97). The encoder enforces constraints on allowed frame
   * rates based on the Profile and Level. If it is not specified, the encoder
   * will use the same frame rate as the input video.
   * @member {number} [slices] Describes the number of slices to be used when
   * encoding this layer. If not specified, default is zero, which means that
   * encoder will use a single slice for each frame.
   * @member {boolean} [adaptiveBFrame] Determines whether or not adaptive
   * B-frames are to be used when encoding this layer. If not specified, the
   * encoder will turn it on whenever the video Profile permits its use.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VideoLayer
   *
   * @returns {object} metadata of VideoLayer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.VideoLayer',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Layer',
        className: 'VideoLayer',
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
          }
        }
      }
    };
  }
}

module.exports = VideoLayer;
