/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Information about an error.
 *
 */
class ODataError {
  /**
   * Create a ODataError.
   * @member {string} [code] A language-independent error name.
   * @member {string} [message] The error message.
   * @member {string} [target] The target of the error (for example, the name
   * of the property in error).
   * @member {array} [details] The error details.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ODataError
   *
   * @returns {object} metadata of ODataError
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ODataError',
      type: {
        name: 'Composite',
        className: 'ODataError',
        modelProperties: {
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          target: {
            required: false,
            serializedName: 'target',
            type: {
              name: 'String'
            }
          },
          details: {
            required: false,
            serializedName: 'details',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ODataErrorElementType',
                  type: {
                    name: 'Composite',
                    className: 'ODataError'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ODataError;
