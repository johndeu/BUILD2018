/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Describes all the properties for encoding a video with the H264 codec.
 *
 * @extends models['Video']
 */
class H264Video extends models['Video'] {
  /**
   * Create a H264Video.
   * @member {boolean} [sceneChangeDetection] Determines whether or not the
   * encoder should insert key frames at scene changes. If not specified, the
   * default is false.
   * @member {string} [complexity] Tells the encoder how to choose its
   * low-level settings. The default is Balanced. Possible values include:
   * 'Speed', 'Balanced', 'Quality'
   * @member {array} [layers] Describes a collection of output H264 layers to
   * be produced by the encoder.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of H264Video
   *
   * @returns {object} metadata of H264Video
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.H264Video',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Codec',
        className: 'H264Video',
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
          keyFrameInterval: {
            required: false,
            serializedName: 'keyFrameInterval',
            type: {
              name: 'TimeSpan'
            }
          },
          stretchMode: {
            required: false,
            serializedName: 'stretchMode',
            type: {
              name: 'String'
            }
          },
          sceneChangeDetection: {
            required: false,
            serializedName: 'sceneChangeDetection',
            type: {
              name: 'Boolean'
            }
          },
          complexity: {
            required: false,
            serializedName: 'complexity',
            type: {
              name: 'String'
            }
          },
          layers: {
            required: false,
            serializedName: 'layers',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'H264LayerElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '@odata.type',
                      clientName: 'odatatype'
                    },
                    uberParent: 'Layer',
                    className: 'H264Layer'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = H264Video;
