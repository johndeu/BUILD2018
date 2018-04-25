/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Base class for content key ID location. A derived class must be used to
 * represent the location.
 *
 */
class ContentKeyPolicyPlayReadyContentKeyLocation {
  /**
   * Create a ContentKeyPolicyPlayReadyContentKeyLocation.
   * @member {string} odatatype Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of ContentKeyPolicyPlayReadyContentKeyLocation
   *
   * @returns {object} metadata of ContentKeyPolicyPlayReadyContentKeyLocation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContentKeyPolicyPlayReadyContentKeyLocation',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'ContentKeyPolicyPlayReadyContentKeyLocation',
        className: 'ContentKeyPolicyPlayReadyContentKeyLocation',
        modelProperties: {
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

module.exports = ContentKeyPolicyPlayReadyContentKeyLocation;
