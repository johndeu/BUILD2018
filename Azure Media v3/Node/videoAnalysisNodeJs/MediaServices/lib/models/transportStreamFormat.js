/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Describes the properties for generating an ISO/IEC 13818-1, MPEG-2 Transport
 * Stream output.
 *
 * @extends models['MultiBitrateFormat']
 */
class TransportStreamFormat extends models['MultiBitrateFormat'] {
  /**
   * Create a TransportStreamFormat.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of TransportStreamFormat
   *
   * @returns {object} metadata of TransportStreamFormat
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.TransportStreamFormat',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Format',
        className: 'TransportStreamFormat',
        modelProperties: {
          filenamePattern: {
            required: false,
            serializedName: 'filenamePattern',
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
          outputFiles: {
            required: false,
            serializedName: 'outputFiles',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'OutputFileElementType',
                  type: {
                    name: 'Composite',
                    className: 'OutputFile'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TransportStreamFormat;
