/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Class to specify one track property condition
 *
 */
class TrackPropertyCondition {
  /**
   * Create a TrackPropertyCondition.
   * @member {string} property Track property type. Possible values include:
   * 'Unknown', 'FourCC'
   * @member {string} operation Track property condition operation. Possible
   * values include: 'Unknown', 'Equal'
   * @member {string} [value] Track proprty value
   */
  constructor() {
  }

  /**
   * Defines the metadata of TrackPropertyCondition
   *
   * @returns {object} metadata of TrackPropertyCondition
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TrackPropertyCondition',
      type: {
        name: 'Composite',
        className: 'TrackPropertyCondition',
        modelProperties: {
          property: {
            required: true,
            serializedName: 'property',
            type: {
              name: 'String'
            }
          },
          operation: {
            required: true,
            serializedName: 'operation',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TrackPropertyCondition;
