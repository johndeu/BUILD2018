/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * The Live Event preview.
 *
 */
class LiveEventPreview {
  /**
   * Create a LiveEventPreview.
   * @member {array} [endpoints] The endpoints for preview.
   * @member {object} [accessControl] The access control for LiveEvent preview.
   * @member {object} [accessControl.ip] The IP access control properties.
   * @member {array} [accessControl.ip.allow] The IP allow list.
   * @member {string} [previewLocator] The preview locator Guid.
   * @member {string} [streamingPolicyName] The name of streaming policy used
   * for LiveEvent preview
   */
  constructor() {
  }

  /**
   * Defines the metadata of LiveEventPreview
   *
   * @returns {object} metadata of LiveEventPreview
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LiveEventPreview',
      type: {
        name: 'Composite',
        className: 'LiveEventPreview',
        modelProperties: {
          endpoints: {
            required: false,
            serializedName: 'endpoints',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LiveEventEndpointElementType',
                  type: {
                    name: 'Composite',
                    className: 'LiveEventEndpoint'
                  }
              }
            }
          },
          accessControl: {
            required: false,
            serializedName: 'accessControl',
            type: {
              name: 'Composite',
              className: 'LiveEventPreviewAccessControl'
            }
          },
          previewLocator: {
            required: false,
            serializedName: 'previewLocator',
            type: {
              name: 'String'
            }
          },
          streamingPolicyName: {
            required: false,
            serializedName: 'streamingPolicyName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = LiveEventPreview;
