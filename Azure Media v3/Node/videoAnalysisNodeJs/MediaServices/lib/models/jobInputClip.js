/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Represents Job Inputs that can have a start or end time specified to take a
 * subset of the specified media.
 *
 * @extends models['JobInput']
 */
class JobInputClip extends models['JobInput'] {
  /**
   * Create a JobInputClip.
   * @member {array} [files] List of files.  Required for JobInputAzureBlob. It
   * optionally can be used for JobInputAsset to tell the service to only use
   * the files specified from the Asset.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of JobInputClip
   *
   * @returns {object} metadata of JobInputClip
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.JobInputClip',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'JobInput',
        className: 'JobInputClip',
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
          }
        }
      }
    };
  }
}

module.exports = JobInputClip;
