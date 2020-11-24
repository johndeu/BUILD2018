/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Describes an Output from the Transform
 *
 */
class TransformOutput {
  /**
   * Create a TransformOutput.
   * @member {string} [onError] Describes what to do if the output fails with
   * the rest of the other outputs. The default is stop the rest of the
   * outputs. Possible values include: 'StopProcessingJob', 'ContinueJob'
   * @member {string} [relativePriority] Sets the relative priority of the
   * TransformOutputs within a Transform. This gives a hint to the system that
   * one TransformOutput is higher priority than another in the same Transform.
   * The default is normal. Possible values include: 'Low', 'Normal', 'High'
   * @member {object} preset Preset that describes the Media Processor
   * operation that will be used to generate the output.
   * @member {string} [preset.odatatype] Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of TransformOutput
   *
   * @returns {object} metadata of TransformOutput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TransformOutput',
      type: {
        name: 'Composite',
        className: 'TransformOutput',
        modelProperties: {
          onError: {
            required: false,
            serializedName: 'onError',
            type: {
              name: 'String'
            }
          },
          relativePriority: {
            required: false,
            serializedName: 'relativePriority',
            type: {
              name: 'String'
            }
          },
          preset: {
            required: true,
            serializedName: 'preset',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '@odata.type',
                clientName: 'odatatype'
              },
              uberParent: 'Preset',
              className: 'Preset'
            }
          }
        }
      }
    };
  }
}

module.exports = TransformOutput;
