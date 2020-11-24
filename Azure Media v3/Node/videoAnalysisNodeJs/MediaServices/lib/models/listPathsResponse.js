/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Class of response for listPaths action
 *
 */
class ListPathsResponse {
  /**
   * Create a ListPathsResponse.
   * @member {array} [streamingPaths] Streaming Paths supported by current
   * Streaming Locator
   * @member {array} [downloadPaths] Download Paths supported by current
   * Streaming Locator
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListPathsResponse
   *
   * @returns {object} metadata of ListPathsResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListPathsResponse',
      type: {
        name: 'Composite',
        className: 'ListPathsResponse',
        modelProperties: {
          streamingPaths: {
            required: false,
            serializedName: 'streamingPaths',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StreamingPathElementType',
                  type: {
                    name: 'Composite',
                    className: 'StreamingPath'
                  }
              }
            }
          },
          downloadPaths: {
            required: false,
            serializedName: 'downloadPaths',
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

module.exports = ListPathsResponse;
