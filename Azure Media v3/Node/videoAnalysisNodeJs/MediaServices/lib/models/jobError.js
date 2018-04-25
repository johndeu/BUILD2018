/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Details of JobOutput errors.
 *
 */
class JobError {
  /**
   * Create a JobError.
   * @member {string} [code] Code describing the error. Possible values
   * include: 'ServiceError', 'ServiceTransientError', 'DownloadNotAccessible',
   * 'DownloadTransientError', 'UploadNotAccessible', 'UploadTransientError',
   * 'ConfigurationUnsupported', 'ContentMalformed', 'ContentUnsupported'
   * @member {string} [message] A human-readable language-dependent
   * representation of the error.
   * @member {string} [category] Category to help caller categorize the error.
   * Possible values include: 'Service', 'Download', 'Upload', 'Configuration',
   * 'Content'
   * @member {string} [retry] Indication that the job may be retried. If retry
   * is unsuccessful, please contact support. Possible values include:
   * 'DoNotRetry', 'MayRetry'
   * @member {array} [details] An array of details about specific errors that
   * led to this reported error.
   */
  constructor() {
  }

  /**
   * Defines the metadata of JobError
   *
   * @returns {object} metadata of JobError
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobError',
      type: {
        name: 'Composite',
        className: 'JobError',
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
          },
          category: {
            required: false,
            readOnly: true,
            serializedName: 'category',
            type: {
              name: 'String'
            }
          },
          retry: {
            required: false,
            readOnly: true,
            serializedName: 'retry',
            type: {
              name: 'String'
            }
          },
          details: {
            required: false,
            readOnly: true,
            serializedName: 'details',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JobErrorDetailElementType',
                  type: {
                    name: 'Composite',
                    className: 'JobErrorDetail'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = JobError;
