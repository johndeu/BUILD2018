/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * The HLS configuration.
 *
 */
class Hls {
  /**
   * Create a Hls.
   * @member {number} [fragmentsPerTsSegment] The amount of fragments per HTTP
   * Live Streaming (HLS) segment.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Hls
   *
   * @returns {object} metadata of Hls
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Hls',
      type: {
        name: 'Composite',
        className: 'Hls',
        modelProperties: {
          fragmentsPerTsSegment: {
            required: false,
            serializedName: 'fragmentsPerTsSegment',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = Hls;
