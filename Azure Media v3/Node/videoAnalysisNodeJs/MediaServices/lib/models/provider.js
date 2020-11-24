/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * A resource provider.
 *
 */
class Provider {
  /**
   * Create a Provider.
   * @member {string} providerName The provider name.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Provider
   *
   * @returns {object} metadata of Provider
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Provider',
      type: {
        name: 'Composite',
        className: 'Provider',
        modelProperties: {
          providerName: {
            required: true,
            serializedName: 'providerName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Provider;
