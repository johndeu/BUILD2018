/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Describes the basic properties for an output video layer.
 *
 */
class Layer {
  /**
   * Create a Layer.
   * @member {string} [width] Describes the width of the output video for this
   * layer. The value can be absolute (in pixels) or relative (in percentage).
   * For example 50% means the output video has half as many pixels in width as
   * the input.
   * @member {string} [height] Describes the height of the output video for
   * this layer. The value can be absolute (in pixels) or relative (in
   * percentage). For example 50% means the output video has half as many
   * pixels in height as the input.
   * @member {string} [label] Describes the alphanumeric label for this layer,
   * which can be used in multiplexing different video and audio layers, or in
   * naming the output file.
   * @member {string} odatatype Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of Layer
   *
   * @returns {object} metadata of Layer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Layer',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Layer',
        className: 'Layer',
        modelProperties: {
          width: {
            required: false,
            serializedName: 'width',
            type: {
              name: 'String'
            }
          },
          height: {
            required: false,
            serializedName: 'height',
            type: {
              name: 'String'
            }
          },
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

module.exports = Layer;
