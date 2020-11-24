/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * The IP access control for Live Event preview.
 *
 */
class LiveEventPreviewAccessControl {
  /**
   * Create a LiveEventPreviewAccessControl.
   * @member {object} [ip] The IP access control properties.
   * @member {array} [ip.allow] The IP allow list.
   */
  constructor() {
  }

  /**
   * Defines the metadata of LiveEventPreviewAccessControl
   *
   * @returns {object} metadata of LiveEventPreviewAccessControl
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LiveEventPreviewAccessControl',
      type: {
        name: 'Composite',
        className: 'LiveEventPreviewAccessControl',
        modelProperties: {
          ip: {
            required: false,
            serializedName: 'ip',
            type: {
              name: 'Composite',
              className: 'IPAccessControl'
            }
          }
        }
      }
    };
  }
}

module.exports = LiveEventPreviewAccessControl;
