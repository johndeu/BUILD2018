/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * A collection of StreamingPolicy items.
 */
class StreamingPolicyCollection extends Array {
  /**
   * Create a StreamingPolicyCollection.
   * @member {string} [odatanextLink] A link to the next page of the collection
   * (when the collection contains too many results to return in one response).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StreamingPolicyCollection
   *
   * @returns {object} metadata of StreamingPolicyCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StreamingPolicyCollection',
      type: {
        name: 'Composite',
        className: 'StreamingPolicyCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StreamingPolicyElementType',
                  type: {
                    name: 'Composite',
                    className: 'StreamingPolicy'
                  }
              }
            }
          },
          odatanextLink: {
            required: false,
            serializedName: '@odata\\.nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = StreamingPolicyCollection;
