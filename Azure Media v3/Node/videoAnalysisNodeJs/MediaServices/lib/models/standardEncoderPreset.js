/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Describes all the settings to be used when encoding the input video with the
 * Standard Encoder.
 *
 * @extends models['Preset']
 */
class StandardEncoderPreset extends models['Preset'] {
  /**
   * Create a StandardEncoderPreset.
   * @member {object} [filters] Describes the default set of filters to be
   * applied to all the input media (except overlays). Describes operations
   * like rotation, deinterlacing and overlays.
   * @member {object} [filters.deinterlace] Describes the de-interlacing
   * settings.
   * @member {string} [filters.deinterlace.parity] Describes the field parity
   * for de-interlacing, defaults to Auto. Possible values include: 'Auto',
   * 'TopFieldFirst', 'BottomFieldFirst'
   * @member {string} [filters.deinterlace.mode] Describes the deinterlacing
   * mode, defaults to AutoPixelAdaptive. Possible values include: 'Off',
   * 'AutoPixelAdaptive'
   * @member {string} [filters.rotation] Describes the rotation, if any, to be
   * applied to the input video, before it is encoded. Possible values include:
   * 'Auto', 'None', 'Rotate0', 'Rotate90', 'Rotate180', 'Rotate270'
   * @member {object} [filters.crop] Describes the parameters for the
   * rectangular window with which to crop the input video.
   * @member {string} [filters.crop.left] Describes the number of pixels from
   * the left-margin. This can be absolute pixel value (e.g 100), or relative
   * to the size of the video (e.g: 50%).
   * @member {string} [filters.crop.top] Describes the number of pixels from
   * the top-margin. This can be absolute pixel value (e.g 100), or relative to
   * the size of the video (e.g: 50%).
   * @member {string} [filters.crop.width] Describes the width of the
   * rectangular region in pixels. This can be absolute pixel value (e.g 100),
   * or relative to the size of the video (e.g: 50%).
   * @member {string} [filters.crop.height] Describes the height of the
   * rectangular region in pixels. This can be absolute pixel value (e.g 100),
   * or relative to the size of the video (e.g: 50%).
   * @member {array} [filters.overlays] Describes the properties of overlays to
   * be applied to the input video. These could be audio, image or video
   * overlays.
   * @member {array} [codecs] Describes the list of codecs to be used when
   * encoding the input video.
   * @member {array} [formats] Describes the list of outputs to be produced by
   * the encoder.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StandardEncoderPreset
   *
   * @returns {object} metadata of StandardEncoderPreset
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.StandardEncoderPreset',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Preset',
        className: 'StandardEncoderPreset',
        modelProperties: {
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          filters: {
            required: false,
            serializedName: 'filters',
            type: {
              name: 'Composite',
              className: 'Filters'
            }
          },
          codecs: {
            required: false,
            serializedName: 'codecs',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CodecElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '@odata.type',
                      clientName: 'odatatype'
                    },
                    uberParent: 'Codec',
                    className: 'Codec'
                  }
              }
            }
          },
          formats: {
            required: false,
            serializedName: 'formats',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'FormatElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '@odata.type',
                      clientName: 'odatatype'
                    },
                    uberParent: 'Format',
                    className: 'Format'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = StandardEncoderPreset;
