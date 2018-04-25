/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Describes the settings for producing JPEG thumbnails.
 *
 * @extends models['ImageFormat']
 */
class JpgFormat extends models['ImageFormat'] {
  /**
   * Create a JpgFormat.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of JpgFormat
   *
   * @returns {object} metadata of JpgFormat
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.JpgFormat',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Format',
        className: 'JpgFormat',
        modelProperties: {
          filenamePattern: {
            required: false,
            serializedName: 'filenamePattern',
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

module.exports = JpgFormat;
