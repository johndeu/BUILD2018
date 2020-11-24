/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * @summary LiveEventListResult
 * The LiveEvent list result.
 */
class LiveEventListResult extends Array {
  /**
   * Create a LiveEventListResult.
   * @member {number} [odatacount] The number of result.
   * @member {string} [odatanextLink] Th link to the next set of results. Not
   * empty if value contains incomplete list of Live Outputs.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of LiveEventListResult
   *
   * @returns {object} metadata of LiveEventListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LiveEventListResult',
      type: {
        name: 'Composite',
        className: 'LiveEventListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LiveEventElementType',
                  type: {
                    name: 'Composite',
                    className: 'LiveEvent'
                  }
              }
            }
          },
          odatacount: {
            required: false,
            serializedName: '@odata\\.count',
            type: {
              name: 'Number'
            }
          },
          odatanextLink: {
            required: false,
            serializedName: '@odata\\.nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = LiveEventListResult;
