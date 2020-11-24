/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * An operation.
 *
 */
class Operation {
  /**
   * Create a Operation.
   * @member {string} name The operation name.
   * @member {object} [display] The operation display name.
   * @member {string} [display.provider] The service provider.
   * @member {string} [display.resource] Resource on which the operation is
   * performed.
   * @member {string} [display.operation] The operation type.
   * @member {string} [display.description] The operation description.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Operation
   *
   * @returns {object} metadata of Operation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Operation',
      type: {
        name: 'Composite',
        className: 'Operation',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          display: {
            required: false,
            serializedName: 'display',
            type: {
              name: 'Composite',
              className: 'OperationDisplay'
            }
          }
        }
      }
    };
  }
}

module.exports = Operation;
