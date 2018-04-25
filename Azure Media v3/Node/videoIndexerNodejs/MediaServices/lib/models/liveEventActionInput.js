/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * The LiveEvent action input parameter definition.
 *
 */
class LiveEventActionInput {
  /**
   * Create a LiveEventActionInput.
   * @member {boolean} [removeOutputsOnStop] The flag indicates if remove
   * LiveOutputs on Stop.
   */
  constructor() {
  }

  /**
   * Defines the metadata of LiveEventActionInput
   *
   * @returns {object} metadata of LiveEventActionInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LiveEventActionInput',
      type: {
        name: 'Composite',
        className: 'LiveEventActionInput',
        modelProperties: {
          removeOutputsOnStop: {
            required: false,
            serializedName: 'removeOutputsOnStop',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = LiveEventActionInput;
