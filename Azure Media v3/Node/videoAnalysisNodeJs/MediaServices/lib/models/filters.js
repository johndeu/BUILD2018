/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Describes all the filtering operations that are to be applied to the input
 * video before encoding.
 *
 */
class Filters {
  /**
   * Create a Filters.
   * @member {object} [deinterlace] Describes the de-interlacing settings.
   * @member {string} [deinterlace.parity] Describes the field parity for
   * de-interlacing, defaults to Auto. Possible values include: 'Auto',
   * 'TopFieldFirst', 'BottomFieldFirst'
   * @member {string} [deinterlace.mode] Describes the deinterlacing mode,
   * defaults to AutoPixelAdaptive. Possible values include: 'Off',
   * 'AutoPixelAdaptive'
   * @member {string} [rotation] Describes the rotation, if any, to be applied
   * to the input video, before it is encoded. Possible values include: 'Auto',
   * 'None', 'Rotate0', 'Rotate90', 'Rotate180', 'Rotate270'
   * @member {object} [crop] Describes the parameters for the rectangular
   * window with which to crop the input video.
   * @member {string} [crop.left] Describes the number of pixels from the
   * left-margin. This can be absolute pixel value (e.g 100), or relative to
   * the size of the video (e.g: 50%).
   * @member {string} [crop.top] Describes the number of pixels from the
   * top-margin. This can be absolute pixel value (e.g 100), or relative to the
   * size of the video (e.g: 50%).
   * @member {string} [crop.width] Describes the width of the rectangular
   * region in pixels. This can be absolute pixel value (e.g 100), or relative
   * to the size of the video (e.g: 50%).
   * @member {string} [crop.height] Describes the height of the rectangular
   * region in pixels. This can be absolute pixel value (e.g 100), or relative
   * to the size of the video (e.g: 50%).
   * @member {array} [overlays] Describes the properties of overlays to be
   * applied to the input video. These could be audio, image or video overlays.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Filters
   *
   * @returns {object} metadata of Filters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Filters',
      type: {
        name: 'Composite',
        className: 'Filters',
        modelProperties: {
          deinterlace: {
            required: false,
            serializedName: 'deinterlace',
            type: {
              name: 'Composite',
              className: 'Deinterlace'
            }
          },
          rotation: {
            required: false,
            serializedName: 'rotation',
            type: {
              name: 'String'
            }
          },
          crop: {
            required: false,
            serializedName: 'crop',
            type: {
              name: 'Composite',
              className: 'Rectangle'
            }
          },
          overlays: {
            required: false,
            serializedName: 'overlays',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'OverlayElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '@odata.type',
                      clientName: 'odatatype'
                    },
                    uberParent: 'Overlay',
                    className: 'Overlay'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Filters;
