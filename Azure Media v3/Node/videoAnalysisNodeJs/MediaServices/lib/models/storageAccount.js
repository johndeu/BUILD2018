/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * The storage account details.
 *
 */
class StorageAccount {
  /**
   * Create a StorageAccount.
   * @member {string} [id] The ID of the storage account resource. Media
   * Services relies on tables and queues as well as blobs, so the primary
   * storage account must be a Standard Storage account (either
   * Microsoft.ClassicStorage or Microsoft.Storage). Blob only storage accounts
   * can be added as secondary storage accounts.
   * @member {string} type The type of the storage account. Possible values
   * include: 'Primary', 'Secondary'
   */
  constructor() {
  }

  /**
   * Defines the metadata of StorageAccount
   *
   * @returns {object} metadata of StorageAccount
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StorageAccount',
      type: {
        name: 'Composite',
        className: 'StorageAccount',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = StorageAccount;
