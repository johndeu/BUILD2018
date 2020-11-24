/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Describes the properties of a user-defined content key in the Streaming
 * Locator
 *
 */
class StreamingLocatorUserDefinedContentKey {
  /**
   * Create a StreamingLocatorUserDefinedContentKey.
   * @member {uuid} id ID of Content Key
   * @member {string} [label] The Content Key description
   * @member {string} [value] The Content Key secret
   */
  constructor() {
  }

  /**
   * Defines the metadata of StreamingLocatorUserDefinedContentKey
   *
   * @returns {object} metadata of StreamingLocatorUserDefinedContentKey
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StreamingLocatorUserDefinedContentKey',
      type: {
        name: 'Composite',
        className: 'StreamingLocatorUserDefinedContentKey',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          label: {
            required: false,
            serializedName: 'label',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = StreamingLocatorUserDefinedContentKey;
