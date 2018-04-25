/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Describes the properties of a rectangular window applied to the input media
 * before processing it.
 *
 */
class Rectangle {
  /**
   * Create a Rectangle.
   * @member {string} [left] Describes the number of pixels from the
   * left-margin. This can be absolute pixel value (e.g 100), or relative to
   * the size of the video (e.g: 50%).
   * @member {string} [top] Describes the number of pixels from the top-margin.
   * This can be absolute pixel value (e.g 100), or relative to the size of the
   * video (e.g: 50%).
   * @member {string} [width] Describes the width of the rectangular region in
   * pixels. This can be absolute pixel value (e.g 100), or relative to the
   * size of the video (e.g: 50%).
   * @member {string} [height] Describes the height of the rectangular region
   * in pixels. This can be absolute pixel value (e.g 100), or relative to the
   * size of the video (e.g: 50%).
   */
  constructor() {
  }

  /**
   * Defines the metadata of Rectangle
   *
   * @returns {object} metadata of Rectangle
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Rectangle',
      type: {
        name: 'Composite',
        className: 'Rectangle',
        modelProperties: {
          left: {
            required: false,
            serializedName: 'left',
            type: {
              name: 'String'
            }
          },
          top: {
            required: false,
            serializedName: 'top',
            type: {
              name: 'String'
            }
          },
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
          }
        }
      }
    };
  }
}

module.exports = Rectangle;
