/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Class to specify which protocols are enabled
 *
 */
class EnabledProtocols {
  /**
   * Create a EnabledProtocols.
   * @member {boolean} download Enable Download protocol or not
   * @member {boolean} dash Enable Dash protocol or not
   * @member {boolean} hls Enable Hls protocol or not
   * @member {boolean} smoothStreaming Enable SmoothStreaming protocol or not
   */
  constructor() {
  }

  /**
   * Defines the metadata of EnabledProtocols
   *
   * @returns {object} metadata of EnabledProtocols
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EnabledProtocols',
      type: {
        name: 'Composite',
        className: 'EnabledProtocols',
        modelProperties: {
          download: {
            required: true,
            serializedName: 'download',
            type: {
              name: 'Boolean'
            }
          },
          dash: {
            required: true,
            serializedName: 'dash',
            type: {
              name: 'Boolean'
            }
          },
          hls: {
            required: true,
            serializedName: 'hls',
            type: {
              name: 'Boolean'
            }
          },
          smoothStreaming: {
            required: true,
            serializedName: 'smoothStreaming',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = EnabledProtocols;
