/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Defines the common properties for all audio codecs.
 *
 * @extends models['Codec']
 */
class Audio extends models['Codec'] {
  /**
   * Create a Audio.
   * @member {number} [channels] Gets or sets number of channels in the Audio.
   * @member {number} [samplingRate] Gets or sets the sampling rate to use for
   * encoding.
   * @member {number} [bitrate] Gets or sets the bitrate of the encoded audio.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Audio
   *
   * @returns {object} metadata of Audio
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.Audio',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Codec',
        className: 'Audio',
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
          channels: {
            required: false,
            serializedName: 'channels',
            type: {
              name: 'Number'
            }
          },
          samplingRate: {
            required: false,
            serializedName: 'samplingRate',
            type: {
              name: 'Number'
            }
          },
          bitrate: {
            required: false,
            serializedName: 'bitrate',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = Audio;
