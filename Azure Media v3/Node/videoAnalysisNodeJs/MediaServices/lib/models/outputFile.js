/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Represents an output file produced.
 *
 */
class OutputFile {
  /**
   * Create a OutputFile.
   * @member {array} [trackLabels] Describes the list of track labels that
   * would be muxed together to produce the file.
   */
  constructor() {
  }

  /**
   * Defines the metadata of OutputFile
   *
   * @returns {object} metadata of OutputFile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OutputFile',
      type: {
        name: 'Composite',
        className: 'OutputFile',
        modelProperties: {
          trackLabels: {
            required: false,
            serializedName: 'trackLabels',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = OutputFile;
