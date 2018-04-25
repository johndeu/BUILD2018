/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Base class for inputs to a Job.
 *
 */
class JobInput {
  /**
   * Create a JobInput.
   * @member {string} [label] Customer provided label of the JobInput.
   * @member {string} odatatype Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of JobInput
   *
   * @returns {object} metadata of JobInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobInput',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'JobInput',
        className: 'JobInput',
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
          }
        }
      }
    };
  }
}

module.exports = JobInput;
