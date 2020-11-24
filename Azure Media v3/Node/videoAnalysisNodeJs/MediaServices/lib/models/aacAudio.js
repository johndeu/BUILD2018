/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Describes Advanced Audio Codec or AAC audio encoding settings.
 *
 * @extends models['Audio']
 */
class AacAudio extends models['Audio'] {
  /**
   * Create a AacAudio.
   * @member {string} [profile] Gets or sets the encoding profile to be used
   * when encoding audio with AAC. Possible values include: 'AacLc', 'HeAacV1',
   * 'HeAacV2'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AacAudio
   *
   * @returns {object} metadata of AacAudio
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.AacAudio',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Codec',
        className: 'AacAudio',
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
          },
          profile: {
            required: false,
            serializedName: 'profile',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AacAudio;
