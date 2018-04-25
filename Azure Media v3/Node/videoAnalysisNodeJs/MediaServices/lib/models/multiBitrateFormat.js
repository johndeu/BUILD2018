/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Describes the properties for producing a collection of GOP aligned multi
 * bitrate files.
 *
 * @extends models['Format']
 */
class MultiBitrateFormat extends models['Format'] {
  /**
   * Create a MultiBitrateFormat.
   * @member {array} [outputFiles] Describes a list of output files to produce.
   * Each entry in the list is a set of labels to be muxed together .
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of MultiBitrateFormat
   *
   * @returns {object} metadata of MultiBitrateFormat
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.MultiBitrateFormat',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Format',
        className: 'MultiBitrateFormat',
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

module.exports = MultiBitrateFormat;
