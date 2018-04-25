/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * The Live Event input.
 *
 */
class LiveEventInput {
  /**
   * Create a LiveEventInput.
   * @member {string} [streamingProtocol] The streaming protocol for the Live
   * Event. Possible values include: 'FragmentedMP4', 'RTMP', 'RTPMPEG2TS'
   * @member {string} [keyFrameIntervalDuration] ISO 8601 timespan duration of
   * the key frame interval duration.
   * @member {string} [accessToken] The access token.
   * @member {array} [endpoints] The input endpoints for the Live Event.
   */
  constructor() {
  }

  /**
   * Defines the metadata of LiveEventInput
   *
   * @returns {object} metadata of LiveEventInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LiveEventInput',
      type: {
        name: 'Composite',
        className: 'LiveEventInput',
        modelProperties: {
          streamingProtocol: {
            required: false,
            serializedName: 'streamingProtocol',
            type: {
              name: 'Enum',
              allowedValues: [ 'FragmentedMP4', 'RTMP', 'RTPMPEG2TS' ]
            }
          },
          keyFrameIntervalDuration: {
            required: false,
            serializedName: 'keyFrameIntervalDuration',
            type: {
              name: 'String'
            }
          },
          accessToken: {
            required: false,
            serializedName: 'accessToken',
            type: {
              name: 'String'
            }
          },
          endpoints: {
            required: false,
            serializedName: 'endpoints',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LiveEventEndpointElementType',
                  type: {
                    name: 'Composite',
                    className: 'LiveEventEndpoint'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = LiveEventInput;
