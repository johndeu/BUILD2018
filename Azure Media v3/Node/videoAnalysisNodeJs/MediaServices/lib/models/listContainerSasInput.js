/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * The parameters to the list SAS requet.
 *
 */
class ListContainerSasInput {
  /**
   * Create a ListContainerSasInput.
   * @member {string} [permissions] The permissions to set on the SAS URL.
   * Possible values include: 'Read', 'ReadWrite', 'ReadWriteDelete'
   * @member {date} [expiryTime] The SAS URL expiry time.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListContainerSasInput
   *
   * @returns {object} metadata of ListContainerSasInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListContainerSasInput',
      type: {
        name: 'Composite',
        className: 'ListContainerSasInput',
        modelProperties: {
          permissions: {
            required: false,
            serializedName: 'permissions',
            type: {
              name: 'String'
            }
          },
          expiryTime: {
            required: false,
            serializedName: 'expiryTime',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = ListContainerSasInput;
