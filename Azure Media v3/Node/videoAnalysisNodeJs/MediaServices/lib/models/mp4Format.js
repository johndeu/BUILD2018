/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Describes the properties for an output ISO MP4 file.
 *
 * @extends models['MultiBitrateFormat']
 */
class Mp4Format extends models['MultiBitrateFormat'] {
  /**
   * Create a Mp4Format.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Mp4Format
   *
   * @returns {object} metadata of Mp4Format
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.Mp4Format',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Format',
        className: 'Mp4Format',
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

module.exports = Mp4Format;
