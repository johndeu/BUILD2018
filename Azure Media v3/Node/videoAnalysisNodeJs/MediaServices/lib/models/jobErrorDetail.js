/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Details of JobOutput errors.
 *
 */
class JobErrorDetail {
  /**
   * Create a JobErrorDetail.
   * @member {string} [code] Code describing the error detail.
   * @member {string} [message] A human-readable representation of the error.
   */
  constructor() {
  }

  /**
   * Defines the metadata of JobErrorDetail
   *
   * @returns {object} metadata of JobErrorDetail
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobErrorDetail',
      type: {
        name: 'Composite',
        className: 'JobErrorDetail',
        modelProperties: {
          code: {
            required: false,
            readOnly: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            readOnly: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = JobErrorDetail;
