/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * The IP access control.
 *
 */
class IPAccessControl {
  /**
   * Create a IPAccessControl.
   * @member {array} [allow] The IP allow list.
   */
  constructor() {
  }

  /**
   * Defines the metadata of IPAccessControl
   *
   * @returns {object} metadata of IPAccessControl
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IPAccessControl',
      type: {
        name: 'Composite',
        className: 'IPAccessControl',
        modelProperties: {
          allow: {
            required: false,
            serializedName: 'allow',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'IPRangeElementType',
                  type: {
                    name: 'Composite',
                    className: 'IPRange'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = IPAccessControl;
