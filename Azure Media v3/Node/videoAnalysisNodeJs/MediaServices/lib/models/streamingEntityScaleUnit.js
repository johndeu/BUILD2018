/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * scale units definition
 *
 */
class StreamingEntityScaleUnit {
  /**
   * Create a StreamingEntityScaleUnit.
   * @member {number} [scaleUnit] ScaleUnit. The scale unit number of the
   * StreamingEndpoint.
   */
  constructor() {
  }

  /**
   * Defines the metadata of StreamingEntityScaleUnit
   *
   * @returns {object} metadata of StreamingEntityScaleUnit
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StreamingEntityScaleUnit',
      type: {
        name: 'Composite',
        className: 'StreamingEntityScaleUnit',
        modelProperties: {
          scaleUnit: {
            required: false,
            serializedName: 'scaleUnit',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = StreamingEntityScaleUnit;
