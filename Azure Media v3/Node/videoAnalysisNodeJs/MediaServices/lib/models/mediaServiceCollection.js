/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * A collection of MediaService items.
 */
class MediaServiceCollection extends Array {
  /**
   * Create a MediaServiceCollection.
   * @member {string} [odatanextLink] A link to the next page of the collection
   * (when the collection contains too many results to return in one response).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of MediaServiceCollection
   *
   * @returns {object} metadata of MediaServiceCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MediaServiceCollection',
      type: {
        name: 'Composite',
        className: 'MediaServiceCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MediaServiceElementType',
                  type: {
                    name: 'Composite',
                    className: 'MediaService'
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

module.exports = MediaServiceCollection;
