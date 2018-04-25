/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * The Live Event encoding.
 *
 */
class LiveEventEncoding {
  /**
   * Create a LiveEventEncoding.
   * @member {string} [encodingType] The encoding type for Live Event. Possible
   * values include: 'None', 'Basic'
   * @member {string} [presetName] The encoding preset name.
   */
  constructor() {
  }

  /**
   * Defines the metadata of LiveEventEncoding
   *
   * @returns {object} metadata of LiveEventEncoding
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LiveEventEncoding',
      type: {
        name: 'Composite',
        className: 'LiveEventEncoding',
        modelProperties: {
          encodingType: {
            required: false,
            serializedName: 'encodingType',
            type: {
              name: 'Enum',
              allowedValues: [ 'None', 'Basic' ]
            }
          },
          presetName: {
            required: false,
            serializedName: 'presetName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = LiveEventEncoding;
