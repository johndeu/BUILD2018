/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * The Live Event.
 *
 * @extends models['TrackedResource']
 */
class LiveEvent extends models['TrackedResource'] {
  /**
   * Create a LiveEvent.
   * @member {string} [description] The Live Event description.
   * @member {object} [input] The Live Event input.
   * @member {string} [input.streamingProtocol] The streaming protocol for the
   * Live Event. Possible values include: 'FragmentedMP4', 'RTMP', 'RTPMPEG2TS'
   * @member {string} [input.keyFrameIntervalDuration] ISO 8601 timespan
   * duration of the key frame interval duration.
   * @member {string} [input.accessToken] The access token.
   * @member {array} [input.endpoints] The input endpoints for the Live Event.
   * @member {object} [preview] The Live Event preview.
   * @member {array} [preview.endpoints] The endpoints for preview.
   * @member {object} [preview.accessControl] The access control for LiveEvent
   * preview.
   * @member {object} [preview.accessControl.ip] The IP access control
   * properties.
   * @member {array} [preview.accessControl.ip.allow] The IP allow list.
   * @member {string} [preview.previewLocator] The preview locator Guid.
   * @member {string} [preview.streamingPolicyName] The name of streaming
   * policy used for LiveEvent preview
   * @member {object} [encoding] The Live Event encoding.
   * @member {string} [encoding.encodingType] The encoding type for Live Event.
   * Possible values include: 'None', 'Basic'
   * @member {string} [encoding.presetName] The encoding preset name.
   * @member {string} [provisioningState] The provisioning state of the Live
   * Event.
   * @member {string} [resourceState] The resource state of the Live Event.
   * Possible values include: 'Stopped', 'Starting', 'Running', 'Stopping',
   * 'Deleting'
   * @member {object} [crossSiteAccessPolicies] The Live Event access policies.
   * @member {string} [crossSiteAccessPolicies.clientAccessPolicy] The content
   * of clientaccesspolicy.xml used by Silverlight.
   * @member {string} [crossSiteAccessPolicies.crossDomainPolicy] The content
   * of crossdomain.xml used by Silverlight.
   * @member {boolean} [vanityUrl] The Live Event vanity URL flag.
   * @member {array} [streamOptions] The stream options.
   * @member {date} [created] The exact time the Live Event was created.
   * @member {date} [lastModified] The exact time the Live Event was last
   * modified.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of LiveEvent
   *
   * @returns {object} metadata of LiveEvent
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LiveEvent',
      type: {
        name: 'Composite',
        className: 'LiveEvent',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          input: {
            required: false,
            serializedName: 'properties.input',
            type: {
              name: 'Composite',
              className: 'LiveEventInput'
            }
          },
          preview: {
            required: false,
            serializedName: 'properties.preview',
            type: {
              name: 'Composite',
              className: 'LiveEventPreview'
            }
          },
          encoding: {
            required: false,
            serializedName: 'properties.encoding',
            type: {
              name: 'Composite',
              className: 'LiveEventEncoding'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          resourceState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.resourceState',
            type: {
              name: 'Enum',
              allowedValues: [ 'Stopped', 'Starting', 'Running', 'Stopping', 'Deleting' ]
            }
          },
          crossSiteAccessPolicies: {
            required: false,
            serializedName: 'properties.crossSiteAccessPolicies',
            type: {
              name: 'Composite',
              className: 'CrossSiteAccessPolicies'
            }
          },
          vanityUrl: {
            required: false,
            serializedName: 'properties.vanityUrl',
            type: {
              name: 'Boolean'
            }
          },
          streamOptions: {
            required: false,
            serializedName: 'properties.streamOptions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StreamOptionsFlagElementType',
                  type: {
                    name: 'Enum',
                    allowedValues: [ 'Default', 'LowLatency' ]
                  }
              }
            }
          },
          created: {
            required: false,
            readOnly: true,
            serializedName: 'properties.created',
            type: {
              name: 'DateTime'
            }
          },
          lastModified: {
            required: false,
            readOnly: true,
            serializedName: 'properties.lastModified',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = LiveEvent;
