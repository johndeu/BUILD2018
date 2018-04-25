/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Describes the de-interlacing settings.
 *
 */
class Deinterlace {
  /**
   * Create a Deinterlace.
   * @member {string} [parity] Describes the field parity for de-interlacing,
   * defaults to Auto. Possible values include: 'Auto', 'TopFieldFirst',
   * 'BottomFieldFirst'
   * @member {string} [mode] Describes the deinterlacing mode, defaults to
   * AutoPixelAdaptive. Possible values include: 'Off', 'AutoPixelAdaptive'
   */
  constructor() {
  }

  /**
   * Defines the metadata of Deinterlace
   *
   * @returns {object} metadata of Deinterlace
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Deinterlace',
      type: {
        name: 'Composite',
        className: 'Deinterlace',
        modelProperties: {
          parity: {
            required: false,
            serializedName: 'parity',
            type: {
              name: 'String'
            }
          },
          mode: {
            required: false,
            serializedName: 'mode',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Deinterlace;
