/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * The IP address range in the CIDR scheme.
 *
 */
class IPRange {
  /**
   * Create a IPRange.
   * @member {string} [name] The friendly name for the IP address range.
   * @member {string} [address] The IP address.
   * @member {number} [subnetPrefixLength] The subnet mask prefix length (see
   * CIDR notation).
   */
  constructor() {
  }

  /**
   * Defines the metadata of IPRange
   *
   * @returns {object} metadata of IPRange
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IPRange',
      type: {
        name: 'Composite',
        className: 'IPRange',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          address: {
            required: false,
            serializedName: 'address',
            type: {
              name: 'String'
            }
          },
          subnetPrefixLength: {
            required: false,
            serializedName: 'subnetPrefixLength',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = IPRange;
