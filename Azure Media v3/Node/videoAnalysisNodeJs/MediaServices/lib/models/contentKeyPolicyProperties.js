/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * The properties of the Content Key Policy.
 *
 */
class ContentKeyPolicyProperties {
  /**
   * Create a ContentKeyPolicyProperties.
   * @member {uuid} [policyId] The legacy Policy ID.
   * @member {date} [created] The creation date of the Policy
   * @member {date} [lastModified] The last modified date of the Policy
   * @member {string} [description] A description for the Policy.
   * @member {array} options The Key Policy options.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ContentKeyPolicyProperties
   *
   * @returns {object} metadata of ContentKeyPolicyProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContentKeyPolicyProperties',
      type: {
        name: 'Composite',
        className: 'ContentKeyPolicyProperties',
        modelProperties: {
          policyId: {
            required: false,
            readOnly: true,
            serializedName: 'policyId',
            type: {
              name: 'String'
            }
          },
          created: {
            required: false,
            readOnly: true,
            serializedName: 'created',
            type: {
              name: 'DateTime'
            }
          },
          lastModified: {
            required: false,
            readOnly: true,
            serializedName: 'lastModified',
            type: {
              name: 'DateTime'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          options: {
            required: true,
            serializedName: 'options',
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

module.exports = ContentKeyPolicyProperties;
