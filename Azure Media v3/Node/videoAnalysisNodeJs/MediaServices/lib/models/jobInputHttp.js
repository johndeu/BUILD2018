/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Represents http job input.
 *
 * @extends models['JobInputClip']
 */
class JobInputHttp extends models['JobInputClip'] {
  /**
   * Create a JobInputHttp.
   * @member {string} [baseUri] Base uri for http job input. It will be
   * concatenated with provided file names.   If no base uri is given, then the
   * provided file list is assumed to be fully qualified uris.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of JobInputHttp
   *
   * @returns {object} metadata of JobInputHttp
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.JobInputHttp',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'JobInput',
        className: 'JobInputHttp',
        modelProperties: {
          label: {
            required: false,
            serializedName: 'label',
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
          files: {
            required: false,
            serializedName: 'files',
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
          },
          baseUri: {
            required: false,
            serializedName: 'baseUri',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = JobInputHttp;
