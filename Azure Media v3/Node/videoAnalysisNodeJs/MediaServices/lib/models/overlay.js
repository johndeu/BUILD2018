/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Base type for all overlays - image, audio or video.
 *
 */
class Overlay {
  /**
   * Create a Overlay.
   * @member {string} [inputLabel] Gets or sets the label of the Input which is
   * to be used as an Overlay. The Input must specify exactly one file.
   * @member {boolean} [inputLoop] Gets or sets a value indicating whether the
   * overlay media is looped to match the duration of the input video. The
   * default is true. For example, you may have a 5 second animation that needs
   * to be overlaid onto an hour-long video - you would set inputLoop to true
   * in this case.
   * @member {moment.duration} [start] Gets or sets the start position, with
   * reference to the input video, at which the overlay starts. The value
   * should be in ISO 8601 format. The default is zero, which means the overlay
   * starts from the beginning of the input video.
   * @member {moment.duration} [end] Gets or sets the position in the input
   * video at which the overlay ends. The value should be in ISO 8601 format.
   * The default behavior is that overlay will be applied until the end of the
   * input video if InputLoop is true. Else, if inputLoop is false, then
   * overlay will last as long as the duration of the overlay media.
   * @member {moment.duration} [fadeInDuration] Gets or sets the duration over
   * which the overlay fades in onto the input video. The value should be in
   * ISO 8601 format. The default is to have no fade in
   * @member {moment.duration} [fadeOutDuration] Gets or sets the duration over
   * which the overlay fades out of the input video. The value should be in ISO
   * 8601 format. The default is to have no fade out."
   * @member {number} [audioGainLevel] Gets or sets the gain level of audio in
   * the overlay. The value should be in the range [0, ..., 1.0]. Defaults to a
   * value of 1.0.
   * @member {string} odatatype Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of Overlay
   *
   * @returns {object} metadata of Overlay
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Overlay',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Overlay',
        className: 'Overlay',
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

module.exports = Overlay;
