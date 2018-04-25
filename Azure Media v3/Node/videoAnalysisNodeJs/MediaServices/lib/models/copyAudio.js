/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * A special codec flag, which tells the encoder to simply copy the input audio
 * bitstream.
 *
 * @extends models['Codec']
 */
class CopyAudio extends models['Codec'] {
  /**
   * Create a CopyAudio.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of CopyAudio
   *
   * @returns {object} metadata of CopyAudio
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.CopyAudio',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Codec',
        className: 'CopyAudio',
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

module.exports = CopyAudio;
