/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Base class for the output of a Job.
 *
 */
class JobOutput {
  /**
   * Create a JobOutput.
   * @member {object} [error] If the JobOutput is in the error state, it
   * contains the details of the error.
   * @member {string} [error.code] Code describing the error. Possible values
   * include: 'ServiceError', 'ServiceTransientError', 'DownloadNotAccessible',
   * 'DownloadTransientError', 'UploadNotAccessible', 'UploadTransientError',
   * 'ConfigurationUnsupported', 'ContentMalformed', 'ContentUnsupported'
   * @member {string} [error.message] A human-readable language-dependent
   * representation of the error.
   * @member {string} [error.category] Category to help caller categorize the
   * error. Possible values include: 'Service', 'Download', 'Upload',
   * 'Configuration', 'Content'
   * @member {string} [error.retry] Indication that the job may be retried. If
   * retry is unsuccessful, please contact support. Possible values include:
   * 'DoNotRetry', 'MayRetry'
   * @member {array} [error.details] An array of details about specific errors
   * that led to this reported error.
   * @member {string} [state] State of the JobOutput. Possible values include:
   * 'Canceled', 'Canceling', 'Error', 'Finished', 'Processing', 'Queued',
   * 'Scheduled'
   * @member {number} [progress] If the JobOutput is in the processing state,
   * it contains the percentage of the job completed from 0 to 100 percent.
   * @member {string} odatatype Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of JobOutput
   *
   * @returns {object} metadata of JobOutput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobOutput',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'JobOutput',
        className: 'JobOutput',
        modelProperties: {
          error: {
            required: false,
            readOnly: true,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'JobError'
            }
          },
          state: {
            required: false,
            readOnly: true,
            serializedName: 'state',
            type: {
              name: 'String'
            }
          },
          progress: {
            required: false,
            readOnly: true,
            serializedName: 'progress',
            type: {
              name: 'Number'
            }
          },
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = JobOutput;
