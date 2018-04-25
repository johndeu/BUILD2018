/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * The Audio Analyzer preset applies a pre-defined set of AI-based analysis
 * operations, including speech transcription, on the input.
 *
 * @extends models['Preset']
 */
class AudioAnalyzerPreset extends models['Preset'] {
  /**
   * Create a AudioAnalyzerPreset.
   * @member {string} [audioLanguage] Specifies the language for the audio
   * payload in the input. Typically in the format of "language
   * code-country/region" (e.g: "en-US").
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AudioAnalyzerPreset
   *
   * @returns {object} metadata of AudioAnalyzerPreset
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.AudioAnalyzerPreset',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Preset',
        className: 'AudioAnalyzerPreset',
        modelProperties: {
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          audioLanguage: {
            required: false,
            serializedName: 'audioLanguage',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AudioAnalyzerPreset;
