/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * The API error.
 *
 */
class ApiError {
  /**
   * Create a ApiError.
   * @member {object} [error] ApiError. The error properties.
   * @member {string} [error.code] A language-independent error name.
   * @member {string} [error.message] The error message.
   * @member {string} [error.target] The target of the error (for example, the
   * name of the property in error).
   * @member {array} [error.details] The error details.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApiError
   *
   * @returns {object} metadata of ApiError
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApiError',
      type: {
        name: 'Composite',
        className: 'ApiError',
        modelProperties: {
          error: {
            required: false,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'ODataError'
            }
          }
        }
      }
    };
  }
}

module.exports = ApiError;
