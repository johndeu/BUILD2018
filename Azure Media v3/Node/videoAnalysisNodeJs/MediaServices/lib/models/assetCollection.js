/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * A collection of Asset items.
 */
class AssetCollection extends Array {
  /**
   * Create a AssetCollection.
   * @member {string} [odatanextLink] A link to the next page of the collection
   * (when the collection contains too many results to return in one response).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AssetCollection
   *
   * @returns {object} metadata of AssetCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AssetCollection',
      type: {
        name: 'Composite',
        className: 'AssetCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AssetElementType',
                  type: {
                    name: 'Composite',
                    className: 'Asset'
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

module.exports = AssetCollection;
