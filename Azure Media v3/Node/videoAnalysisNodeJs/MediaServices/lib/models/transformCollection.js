/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * A collection of Transform items.
 */
class TransformCollection extends Array {
  /**
   * Create a TransformCollection.
   * @member {string} [odatanextLink] A link to the next page of the collection
   * (when the collection contains too many results to return in one response).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of TransformCollection
   *
   * @returns {object} metadata of TransformCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TransformCollection',
      type: {
        name: 'Composite',
        className: 'TransformCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TransformElementType',
                  type: {
                    name: 'Composite',
                    className: 'Transform'
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

module.exports = TransformCollection;
