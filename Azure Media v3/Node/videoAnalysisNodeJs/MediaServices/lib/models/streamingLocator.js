/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * A Streaming Locator resource
 *
 * @extends models['ProxyResource']
 */
class StreamingLocator extends models['ProxyResource'] {
  /**
   * Create a StreamingLocator.
   * @member {string} [assetName] Asset Name
   * @member {date} [created] Creation time of Streaming Locator
   * @member {date} [startTime] StartTime of Streaming Locator
   * @member {date} [endTime] EndTime of Streaming Locator
   * @member {uuid} [streamingLocatorId] StreamingLocatorId of Streaming
   * Locator
   * @member {string} [streamingPolicyName] Streaming Policy name used by this
   * Streaming Locator
   * @member {string} [defaultContentKeyPolicyName] Default ContentKeyPolicy
   * used by this Streaming Locator
   * @member {array} [contentKeys] ContentKeys used by this Streaming Locator
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StreamingLocator
   *
   * @returns {object} metadata of StreamingLocator
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StreamingLocator',
      type: {
        name: 'Composite',
        className: 'StreamingLocator',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          assetName: {
            required: false,
            serializedName: 'properties.assetName',
            type: {
              name: 'String'
            }
          },
          created: {
            required: false,
            readOnly: true,
            serializedName: 'properties.created',
            type: {
              name: 'DateTime'
            }
          },
          startTime: {
            required: false,
            serializedName: 'properties.startTime',
            type: {
              name: 'DateTime'
            }
          },
          endTime: {
            required: false,
            serializedName: 'properties.endTime',
            type: {
              name: 'DateTime'
            }
          },
          streamingLocatorId: {
            required: false,
            serializedName: 'properties.streamingLocatorId',
            type: {
              name: 'String'
            }
          },
          streamingPolicyName: {
            required: false,
            serializedName: 'properties.streamingPolicyName',
            type: {
              name: 'String'
            }
          },
          defaultContentKeyPolicyName: {
            required: false,
            serializedName: 'properties.defaultContentKeyPolicyName',
            type: {
              name: 'String'
            }
          },
          contentKeys: {
            required: false,
            serializedName: 'properties.contentKeys',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StreamingLocatorUserDefinedContentKeyElementType',
                  type: {
                    name: 'Composite',
                    className: 'StreamingLocatorUserDefinedContentKey'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = StreamingLocator;
