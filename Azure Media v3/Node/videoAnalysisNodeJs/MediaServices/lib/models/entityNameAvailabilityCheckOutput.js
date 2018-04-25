/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * The response from the check name availability request.
 *
 */
class EntityNameAvailabilityCheckOutput {
  /**
   * Create a EntityNameAvailabilityCheckOutput.
   * @member {boolean} nameAvailable Specifies if the name is available.
   * @member {string} [reason] Specifies the reason if the name is not
   * available.
   * @member {string} [message] Specifies the detailed reason if the name is
   * not available.
   */
  constructor() {
  }

  /**
   * Defines the metadata of EntityNameAvailabilityCheckOutput
   *
   * @returns {object} metadata of EntityNameAvailabilityCheckOutput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EntityNameAvailabilityCheckOutput',
      type: {
        name: 'Composite',
        className: 'EntityNameAvailabilityCheckOutput',
        modelProperties: {
          nameAvailable: {
            required: true,
            serializedName: 'nameAvailable',
            type: {
              name: 'Boolean'
            }
          },
          reason: {
            required: false,
            serializedName: 'reason',
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
          }
        }
      }
    };
  }
}

module.exports = EntityNameAvailabilityCheckOutput;
