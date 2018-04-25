/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Akamai access control
 *
 */
class AkamaiAccessControl {
  /**
   * Create a AkamaiAccessControl.
   * @member {array} [akamaiSignatureHeaderAuthenticationKeyList]
   * authentication key list
   */
  constructor() {
  }

  /**
   * Defines the metadata of AkamaiAccessControl
   *
   * @returns {object} metadata of AkamaiAccessControl
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AkamaiAccessControl',
      type: {
        name: 'Composite',
        className: 'AkamaiAccessControl',
        modelProperties: {
          akamaiSignatureHeaderAuthenticationKeyList: {
            required: false,
            serializedName: 'akamaiSignatureHeaderAuthenticationKeyList',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AkamaiSignatureHeaderAuthenticationKeyElementType',
                  type: {
                    name: 'Composite',
                    className: 'AkamaiSignatureHeaderAuthenticationKey'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = AkamaiAccessControl;
