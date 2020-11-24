/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * A Content Key Policy resource.
 *
 * @extends models['ProxyResource']
 */
class ContentKeyPolicy extends models['ProxyResource'] {
  /**
   * Create a ContentKeyPolicy.
   * @member {uuid} [policyId] The legacy Policy ID.
   * @member {date} [created] The creation date of the Policy
   * @member {date} [lastModified] The last modified date of the Policy
   * @member {string} [description] A description for the Policy.
   * @member {array} options The Key Policy options.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ContentKeyPolicy
   *
   * @returns {object} metadata of ContentKeyPolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContentKeyPolicy',
      type: {
        name: 'Composite',
        className: 'ContentKeyPolicy',
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
          policyId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.policyId',
            type: {
              name: 'String'
            }
          },
          created: {
            required: false,
            readOnly: true,
            serializedName: 'properties.created',
            type: {
              name: 'DateTime'
            }
          },
          lastModified: {
            required: false,
            readOnly: true,
            serializedName: 'properties.lastModified',
            type: {
              name: 'DateTime'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          options: {
            required: true,
            serializedName: 'properties.options',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ContentKeyPolicyOptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'ContentKeyPolicyOption'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ContentKeyPolicy;
