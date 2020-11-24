/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * The response message for available presets.
 *
 */
class AvailablePresets {
  /**
   * Create a AvailablePresets.
   * @member {array} [presets] Lists the available presets
   */
  constructor() {
  }

  /**
   * Defines the metadata of AvailablePresets
   *
   * @returns {object} metadata of AvailablePresets
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AvailablePresets',
      type: {
        name: 'Composite',
        className: 'AvailablePresets',
        modelProperties: {
          presets: {
            required: false,
            serializedName: 'presets',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = AvailablePresets;
