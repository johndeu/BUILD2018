/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * The Live Event endpoint.
 *
 */
class LiveEventEndpoint {
  /**
   * Create a LiveEventEndpoint.
   * @member {string} [protocol] The endpoint protocol.
   * @member {string} [url] The endpoint URL.
   */
  constructor() {
  }

  /**
   * Defines the metadata of LiveEventEndpoint
   *
   * @returns {object} metadata of LiveEventEndpoint
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LiveEventEndpoint',
      type: {
        name: 'Composite',
        className: 'LiveEventEndpoint',
        modelProperties: {
          protocol: {
            required: false,
            serializedName: 'protocol',
            type: {
              name: 'String'
            }
          },
          url: {
            required: false,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = LiveEventEndpoint;
