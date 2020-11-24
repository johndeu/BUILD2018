/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * The input to the check name availability request.
 *
 */
class CheckNameAvailabilityInput {
  /**
   * Create a CheckNameAvailabilityInput.
   * @member {string} [name] The account name.
   * @member {string} [type] The account type. For a Media Services account,
   * this should be 'MediaServices'.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CheckNameAvailabilityInput
   *
   * @returns {object} metadata of CheckNameAvailabilityInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CheckNameAvailabilityInput',
      type: {
        name: 'Composite',
        className: 'CheckNameAvailabilityInput',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CheckNameAvailabilityInput;
