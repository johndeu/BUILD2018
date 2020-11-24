/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * The Asset Storage encryption key.
 *
 */
class AssetStorageEncryptionKey {
  /**
   * Create a AssetStorageEncryptionKey.
   * @member {string} [storageEncryptionKey] The Asset storage encryption key.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AssetStorageEncryptionKey
   *
   * @returns {object} metadata of AssetStorageEncryptionKey
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AssetStorageEncryptionKey',
      type: {
        name: 'Composite',
        className: 'AssetStorageEncryptionKey',
        modelProperties: {
          storageEncryptionKey: {
            required: false,
            serializedName: 'storageEncryptionKey',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AssetStorageEncryptionKey;
