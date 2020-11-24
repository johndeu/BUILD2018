/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * A collection of StreamingLocator items.
 */
class StreamingLocatorCollection extends Array {
  /**
   * Create a StreamingLocatorCollection.
   * @member {string} [odatanextLink] A link to the next page of the collection
   * (when the collection contains too many results to return in one response).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StreamingLocatorCollection
   *
   * @returns {object} metadata of StreamingLocatorCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StreamingLocatorCollection',
      type: {
        name: 'Composite',
        className: 'StreamingLocatorCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StreamingLocatorElementType',
                  type: {
                    name: 'Composite',
                    className: 'StreamingLocator'
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

module.exports = StreamingLocatorCollection;
