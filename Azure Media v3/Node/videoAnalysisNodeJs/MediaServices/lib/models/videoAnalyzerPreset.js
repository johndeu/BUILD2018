/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * A video analyzer preset that analyzes both audio and video.
 *
 * @extends models['AudioAnalyzerPreset']
 */
class VideoAnalyzerPreset extends models['AudioAnalyzerPreset'] {
  /**
   * Create a VideoAnalyzerPreset.
   * @member {boolean} [audioInsightsOnly] Gets or sets whether to get insights
   * for audio only.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VideoAnalyzerPreset
   *
   * @returns {object} metadata of VideoAnalyzerPreset
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.VideoAnalyzerPreset',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Preset',
        className: 'VideoAnalyzerPreset',
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
          },
          audioInsightsOnly: {
            required: false,
            serializedName: 'audioInsightsOnly',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = VideoAnalyzerPreset;
