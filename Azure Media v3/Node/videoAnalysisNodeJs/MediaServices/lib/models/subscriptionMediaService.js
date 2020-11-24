/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * A Media Services account.
 *
 * @extends models['TrackedResource']
 */
class SubscriptionMediaService extends models['TrackedResource'] {
  /**
   * Create a SubscriptionMediaService.
   * @member {uuid} [mediaServiceId] The Media Services account ID.
   * @member {array} [storageAccounts] The storage accounts for this resource.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SubscriptionMediaService
   *
   * @returns {object} metadata of SubscriptionMediaService
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SubscriptionMediaService',
      type: {
        name: 'Composite',
        className: 'SubscriptionMediaService',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          mediaServiceId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.mediaServiceId',
            type: {
              name: 'String'
            }
          },
          storageAccounts: {
            required: false,
            serializedName: 'properties.storageAccounts',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StorageAccountElementType',
                  type: {
                    name: 'Composite',
                    className: 'StorageAccount'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = SubscriptionMediaService;
