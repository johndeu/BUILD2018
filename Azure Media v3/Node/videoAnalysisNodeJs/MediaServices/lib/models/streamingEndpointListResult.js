/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * @summary StreamingEndpointListResult
 * The StreamingEndpoint list result.
 */
class StreamingEndpointListResult extends Array {
  /**
   * Create a StreamingEndpointListResult.
   * @member {number} [odatacount] The number of result.
   * @member {string} [odatanextLink] Th link to the next set of results. Not
   * empty if value contains incomplete list of StreamingEndpoints.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StreamingEndpointListResult
   *
   * @returns {object} metadata of StreamingEndpointListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StreamingEndpointListResult',
      type: {
        name: 'Composite',
        className: 'StreamingEndpointListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StreamingEndpointElementType',
                  type: {
                    name: 'Composite',
                    className: 'StreamingEndpoint'
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

module.exports = StreamingEndpointListResult;
