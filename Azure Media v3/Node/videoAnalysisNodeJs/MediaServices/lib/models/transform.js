/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * A Media Transform that can be applied to an input by creating Jobs.
 *
 * @extends models['ProxyResource']
 */
class Transform extends models['ProxyResource'] {
  /**
   * Create a Transform.
   * @member {date} [created] The date and time when the Transform was created.
   * @member {string} [description] Customer supplied description of the
   * transform.
   * @member {date} [lastModified] The date and time when the Transform was
   * last updated.
   * @member {array} outputs The outputs for the Transform.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Transform
   *
   * @returns {object} metadata of Transform
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Transform',
      type: {
        name: 'Composite',
        className: 'Transform',
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
          created: {
            required: false,
            readOnly: true,
            serializedName: 'properties.created',
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
          lastModified: {
            required: false,
            readOnly: true,
            serializedName: 'properties.lastModified',
            type: {
              name: 'DateTime'
            }
          },
          outputs: {
            required: true,
            serializedName: 'properties.outputs',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TransformOutputElementType',
                  type: {
                    name: 'Composite',
                    className: 'TransformOutput'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Transform;
