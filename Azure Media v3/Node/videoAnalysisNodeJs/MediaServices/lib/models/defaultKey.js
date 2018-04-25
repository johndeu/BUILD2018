/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Class to specify properties of default content key for each encryption
 * scheme
 *
 */
class DefaultKey {
  /**
   * Create a DefaultKey.
   * @member {string} [label] Label can be used to specify Content Key when
   * creating Stremaing Locator
   * @member {string} [policyName] Policy used by Default Key
   */
  constructor() {
  }

  /**
   * Defines the metadata of DefaultKey
   *
   * @returns {object} metadata of DefaultKey
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DefaultKey',
      type: {
        name: 'Composite',
        className: 'DefaultKey',
        modelProperties: {
          label: {
            required: false,
            serializedName: 'label',
            type: {
              name: 'String'
            }
          },
          policyName: {
            required: false,
            serializedName: 'policyName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DefaultKey;
