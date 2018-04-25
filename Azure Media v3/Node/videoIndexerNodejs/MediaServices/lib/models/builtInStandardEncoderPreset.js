/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Describes a built-in preset for encoding the input video with the Standard
 * Encoder.
 *
 * @extends models['Preset']
 */
class BuiltInStandardEncoderPreset extends models['Preset'] {
  /**
   * Create a BuiltInStandardEncoderPreset.
   * @member {string} presetName Describes the built-in prese to be used for
   * encoding videos. Possible values include: 'AdaptiveStreaming',
   * 'AACGoodQualityAudio', 'H264MultipleBitrate1080p',
   * 'H264MultipleBitrate720p', 'H264MultipleBitrateSD'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of BuiltInStandardEncoderPreset
   *
   * @returns {object} metadata of BuiltInStandardEncoderPreset
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.BuiltInStandardEncoderPreset',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Preset',
        className: 'BuiltInStandardEncoderPreset',
        modelProperties: {
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          presetName: {
            required: true,
            serializedName: 'presetName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BuiltInStandardEncoderPreset;
