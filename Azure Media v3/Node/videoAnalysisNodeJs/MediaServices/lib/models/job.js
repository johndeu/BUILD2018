/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * A Job resource type.
 *
 * @extends models['ProxyResource']
 */
class Job extends models['ProxyResource'] {
  /**
   * Create a Job.
   * @member {date} [created] The date and time when the Job was created.
   * @member {string} [state] The current state of the job. Possible values
   * include: 'Canceled', 'Canceling', 'Error', 'Finished', 'Processing',
   * 'Queued', 'Scheduled'
   * @member {string} [description] The customer supplied description of the
   * Job.
   * @member {object} input The inputs for the Job.
   * @member {string} [input.label] Customer provided label of the JobInput.
   * @member {string} [input.odatatype] Polymorphic Discriminator
   * @member {date} [lastModified] The date and time when the Job was last
   * updated.
   * @member {array} outputs The outputs for the Job.
   * @member {string} [priority] Priority with which the job should be
   * processed.  Higher priority jobs are processed before lower priority jobs
   * if there is resource contention. If not set, the default is normal.
   * Possible values include: 'Low', 'Normal', 'High'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Job
   *
   * @returns {object} metadata of Job
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Job',
      type: {
        name: 'Composite',
        className: 'Job',
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
          state: {
            required: false,
            readOnly: true,
            serializedName: 'properties.state',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          input: {
            required: true,
            serializedName: 'properties.input',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '@odata.type',
                clientName: 'odatatype'
              },
              uberParent: 'JobInput',
              className: 'JobInput'
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
                  serializedName: 'JobOutputElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '@odata.type',
                      clientName: 'odatatype'
                    },
                    uberParent: 'JobOutput',
                    className: 'JobOutput'
                  }
              }
            }
          },
          priority: {
            required: false,
            serializedName: 'properties.priority',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Job;
