/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * @summary LiveOutputListResult
 * The LiveOutput list result.
 */
class LiveOutputListResult extends Array {
  /**
   * Create a LiveOutputListResult.
   * @member {number} [odatacount] The number of result.
   * @member {string} [odatanextLink] Th link to the next set of results. Not
   * empty if value contains incomplete list of Live Outputs.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of LiveOutputListResult
   *
   * @returns {object} metadata of LiveOutputListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LiveOutputListResult',
      type: {
        name: 'Composite',
        className: 'LiveOutputListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LiveOutputElementType',
                  type: {
                    name: 'Composite',
                    className: 'LiveOutput'
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

module.exports = LiveOutputListResult;
