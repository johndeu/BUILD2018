/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Specifies a configuration for PlayReady licenses.
 *
 * @extends models['ContentKeyPolicyConfiguration']
 */
class ContentKeyPolicyPlayReadyConfiguration extends models['ContentKeyPolicyConfiguration'] {
  /**
   * Create a ContentKeyPolicyPlayReadyConfiguration.
   * @member {array} licenses The PlayReady licenses.
   * @member {string} [responseCustomData] The custom response data.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ContentKeyPolicyPlayReadyConfiguration
   *
   * @returns {object} metadata of ContentKeyPolicyPlayReadyConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'ContentKeyPolicyConfiguration',
        className: 'ContentKeyPolicyPlayReadyConfiguration',
        modelProperties: {
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          licenses: {
            required: true,
            serializedName: 'licenses',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ContentKeyPolicyPlayReadyLicenseElementType',
                  type: {
                    name: 'Composite',
                    className: 'ContentKeyPolicyPlayReadyLicense'
                  }
              }
            }
          },
          responseCustomData: {
            required: false,
            serializedName: 'responseCustomData',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ContentKeyPolicyPlayReadyConfiguration;
