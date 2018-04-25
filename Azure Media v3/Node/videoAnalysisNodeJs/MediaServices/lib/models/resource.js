/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * The core properties of ARM resources.
 *
 * @extends models['BaseResource']
 */
class Resource extends models['BaseResource'] {
  /**
   * Create a Resource.
   * @member {string} [id] Fully qualified resource ID for the resource.
   * @member {string} [name] The name of the resource.
   * @member {string} [type] The type of the resource.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Resource
   *
   * @returns {object} metadata of Resource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Resource',
      type: {
        name: 'Composite',
        className: 'Resource',
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
          }
        }
      }
    };
  }
}

module.exports = Resource;
