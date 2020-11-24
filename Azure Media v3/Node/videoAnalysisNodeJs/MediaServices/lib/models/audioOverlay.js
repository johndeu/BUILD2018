/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Describes the properties of an audio overlay.
 *
 * @extends models['Overlay']
 */
class AudioOverlay extends models['Overlay'] {
  /**
   * Create a AudioOverlay.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AudioOverlay
   *
   * @returns {object} metadata of AudioOverlay
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.AudioOverlay',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Overlay',
        className: 'AudioOverlay',
        modelProperties: {
          inputLabel: {
            required: false,
            serializedName: 'inputLabel',
            type: {
              name: 'String'
            }
          },
          inputLoop: {
            required: false,
            serializedName: 'inputLoop',
            type: {
              name: 'Boolean'
            }
          },
          start: {
            required: false,
            serializedName: 'start',
            type: {
              name: 'TimeSpan'
            }
          },
          end: {
            required: false,
            serializedName: 'end',
            type: {
              name: 'TimeSpan'
            }
          },
          fadeInDuration: {
            required: false,
            serializedName: 'fadeInDuration',
            type: {
              name: 'TimeSpan'
            }
          },
          fadeOutDuration: {
            required: false,
            serializedName: 'fadeOutDuration',
            type: {
              name: 'TimeSpan'
            }
          },
          audioGainLevel: {
            required: false,
            serializedName: 'audioGainLevel',
            type: {
              name: 'Number'
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

module.exports = AudioOverlay;
