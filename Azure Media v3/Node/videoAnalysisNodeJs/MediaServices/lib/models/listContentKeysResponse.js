/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Class of response for listContentKeys action
 *
 */
class ListContentKeysResponse {
  /**
   * Create a ListContentKeysResponse.
   * @member {array} [contentKeys] ContentKeys used by current Streaming
   * Locator
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListContentKeysResponse
   *
   * @returns {object} metadata of ListContentKeysResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListContentKeysResponse',
      type: {
        name: 'Composite',
        className: 'ListContentKeysResponse',
        modelProperties: {
          contentKeys: {
            required: false,
            serializedName: 'contentKeys',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StreamingLocatorContentKeyElementType',
                  type: {
                    name: 'Composite',
                    className: 'StreamingLocatorContentKey'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ListContentKeysResponse;
