/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Supports list of inputs to a Job.
 *
 * @extends models['JobInput']
 */
class JobInputs extends models['JobInput'] {
  /**
   * Create a JobInputs.
   * @member {array} [inputs] List of Job inputs.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of JobInputs
   *
   * @returns {object} metadata of JobInputs
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.JobInputs',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'JobInput',
        className: 'JobInputs',
        modelProperties: {
          label: {
            required: false,
            serializedName: 'label',
            type: {
              name: 'String'
            }
          },
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          inputs: {
            required: false,
            serializedName: 'inputs',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JobInputElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '@odata.type',
                      clientName: 'odatatype'
                    },
                    uberParent: 'JobInput',
                    className: 'JobInput'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = JobInputs;
