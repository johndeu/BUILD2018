/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Operation details.
 *
 */
class OperationDisplay {
  /**
   * Create a OperationDisplay.
   * @member {string} [provider] The service provider.
   * @member {string} [resource] Resource on which the operation is performed.
   * @member {string} [operation] The operation type.
   * @member {string} [description] The operation description.
   */
  constructor() {
  }

  /**
   * Defines the metadata of OperationDisplay
   *
   * @returns {object} metadata of OperationDisplay
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OperationDisplay',
      type: {
        name: 'Composite',
        className: 'OperationDisplay',
        modelProperties: {
          provider: {
            required: false,
            serializedName: 'provider',
            type: {
              name: 'String'
            }
          },
          resource: {
            required: false,
            serializedName: 'resource',
            type: {
              name: 'String'
            }
          },
          operation: {
            required: false,
            serializedName: 'operation',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OperationDisplay;
