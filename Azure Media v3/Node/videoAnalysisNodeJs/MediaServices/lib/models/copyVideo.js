/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * A special codec flag, which tells the encoder to simply copy the input video
 * bitstream.
 *
 * @extends models['Codec']
 */
class CopyVideo extends models['Codec'] {
  /**
   * Create a CopyVideo.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of CopyVideo
   *
   * @returns {object} metadata of CopyVideo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.CopyVideo',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Codec',
        className: 'CopyVideo',
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
          }
        }
      }
    };
  }
}

module.exports = CopyVideo;
