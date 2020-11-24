/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * A collection of ContentKeyPolicy items.
 */
class ContentKeyPolicyCollection extends Array {
  /**
   * Create a ContentKeyPolicyCollection.
   * @member {string} [odatanextLink] A link to the next page of the collection
   * (when the collection contains too many results to return in one response).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ContentKeyPolicyCollection
   *
   * @returns {object} metadata of ContentKeyPolicyCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContentKeyPolicyCollection',
      type: {
        name: 'Composite',
        className: 'ContentKeyPolicyCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ContentKeyPolicyElementType',
                  type: {
                    name: 'Composite',
                    className: 'ContentKeyPolicy'
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

module.exports = ContentKeyPolicyCollection;
