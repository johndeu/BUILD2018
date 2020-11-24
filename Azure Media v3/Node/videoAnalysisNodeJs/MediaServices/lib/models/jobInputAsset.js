/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Represents an Asset for input into a Job.
 *
 * @extends models['JobInputClip']
 */
class JobInputAsset extends models['JobInputClip'] {
  /**
   * Create a JobInputAsset.
   * @member {string} assetName The name of input Asset.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of JobInputAsset
   *
   * @returns {object} metadata of JobInputAsset
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.JobInputAsset',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'JobInput',
        className: 'JobInputAsset',
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
          assetName: {
            required: true,
            serializedName: 'assetName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = JobInputAsset;
