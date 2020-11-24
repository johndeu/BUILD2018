/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * A collection of SubscriptionMediaService items.
 */
class SubscriptionMediaServiceCollection extends Array {
  /**
   * Create a SubscriptionMediaServiceCollection.
   * @member {string} [odatanextLink] A link to the next page of the collection
   * (when the collection contains too many results to return in one response).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SubscriptionMediaServiceCollection
   *
   * @returns {object} metadata of SubscriptionMediaServiceCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SubscriptionMediaServiceCollection',
      type: {
        name: 'Composite',
        className: 'SubscriptionMediaServiceCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SubscriptionMediaServiceElementType',
                  type: {
                    name: 'Composite',
                    className: 'SubscriptionMediaService'
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

module.exports = SubscriptionMediaServiceCollection;
