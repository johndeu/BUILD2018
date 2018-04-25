/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Describes the properties of a video overlay.
 *
 * @extends models['Overlay']
 */
class VideoOverlay extends models['Overlay'] {
  /**
   * Create a VideoOverlay.
   * @member {object} [position] Describes the area in the input video where
   * the overlay is applied.
   * @member {string} [position.left] Describes the number of pixels from the
   * left-margin. This can be absolute pixel value (e.g 100), or relative to
   * the size of the video (e.g: 50%).
   * @member {string} [position.top] Describes the number of pixels from the
   * top-margin. This can be absolute pixel value (e.g 100), or relative to the
   * size of the video (e.g: 50%).
   * @member {string} [position.width] Describes the width of the rectangular
   * region in pixels. This can be absolute pixel value (e.g 100), or relative
   * to the size of the video (e.g: 50%).
   * @member {string} [position.height] Describes the height of the rectangular
   * region in pixels. This can be absolute pixel value (e.g 100), or relative
   * to the size of the video (e.g: 50%).
   * @member {number} [opacity] Describes the opacity of the overlay. This is a
   * value in the range [0 - 1.0]. Default is 1.0
   * @member {object} [cropRectangle] Describes the an optional rectangular
   * window used to crop the overlay image or video.
   * @member {string} [cropRectangle.left] Describes the number of pixels from
   * the left-margin. This can be absolute pixel value (e.g 100), or relative
   * to the size of the video (e.g: 50%).
   * @member {string} [cropRectangle.top] Describes the number of pixels from
   * the top-margin. This can be absolute pixel value (e.g 100), or relative to
   * the size of the video (e.g: 50%).
   * @member {string} [cropRectangle.width] Describes the width of the
   * rectangular region in pixels. This can be absolute pixel value (e.g 100),
   * or relative to the size of the video (e.g: 50%).
   * @member {string} [cropRectangle.height] Describes the height of the
   * rectangular region in pixels. This can be absolute pixel value (e.g 100),
   * or relative to the size of the video (e.g: 50%).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VideoOverlay
   *
   * @returns {object} metadata of VideoOverlay
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.VideoOverlay',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Overlay',
        className: 'VideoOverlay',
        modelProperties: {
          inputLabel: {
            required: false,
            serializedName: 'inputLabel',
            type: {
              name: 'String'
            }
          },
          inputLoop: {
            required: false,
            serializedName: 'inputLoop',
            type: {
              name: 'Boolean'
            }
          },
          start: {
            required: false,
            serializedName: 'start',
            type: {
              name: 'TimeSpan'
            }
          },
          end: {
            required: false,
            serializedName: 'end',
            type: {
              name: 'TimeSpan'
            }
          },
          fadeInDuration: {
            required: false,
            serializedName: 'fadeInDuration',
            type: {
              name: 'TimeSpan'
            }
          },
          fadeOutDuration: {
            required: false,
            serializedName: 'fadeOutDuration',
            type: {
              name: 'TimeSpan'
            }
          },
          audioGainLevel: {
            required: false,
            serializedName: 'audioGainLevel',
            type: {
              name: 'Number'
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
          position: {
            required: false,
            serializedName: 'position',
            type: {
              name: 'Composite',
              className: 'Rectangle'
            }
          },
          opacity: {
            required: false,
            serializedName: 'opacity',
            type: {
              name: 'Number'
            }
          },
          cropRectangle: {
            required: false,
            serializedName: 'cropRectangle',
            type: {
              name: 'Composite',
              className: 'Rectangle'
            }
          }
        }
      }
    };
  }
}

module.exports = VideoOverlay;
