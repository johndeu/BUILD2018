/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Class for NoEncryption scheme
 *
 */
class NoEncryption {
  /**
   * Create a NoEncryption.
   * @member {object} [enabledProtocols] Representing supported protocols
   * @member {boolean} [enabledProtocols.download] Enable Download protocol or
   * not
   * @member {boolean} [enabledProtocols.dash] Enable Dash protocol or not
   * @member {boolean} [enabledProtocols.hls] Enable Hls protocol or not
   * @member {boolean} [enabledProtocols.smoothStreaming] Enable
   * SmoothStreaming protocol or not
   */
  constructor() {
  }

  /**
   * Defines the metadata of NoEncryption
   *
   * @returns {object} metadata of NoEncryption
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NoEncryption',
      type: {
        name: 'Composite',
        className: 'NoEncryption',
        modelProperties: {
          enabledProtocols: {
            required: false,
            serializedName: 'enabledProtocols',
            type: {
              name: 'Composite',
              className: 'EnabledProtocols'
            }
          }
        }
      }
    };
  }
}

module.exports = NoEncryption;
