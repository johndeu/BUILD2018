/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * The resource model definition for a ARM tracked resource.
 *
 * @extends models['Resource']
 */
class TrackedResource extends models['Resource'] {
  /**
   * Create a TrackedResource.
   * @member {object} [tags] Resource tags.
   * @member {string} [location] The Azure Region of the resource.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of TrackedResource
   *
   * @returns {object} metadata of TrackedResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TrackedResource',
      type: {
        name: 'Composite',
        className: 'TrackedResource',
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
          }
        }
      }
    };
  }
}

module.exports = TrackedResource;
