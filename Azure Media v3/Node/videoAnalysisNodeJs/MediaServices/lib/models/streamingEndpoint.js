/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * The StreamingEndpoint.
 *
 * @extends models['TrackedResource']
 */
class StreamingEndpoint extends models['TrackedResource'] {
  /**
   * Create a StreamingEndpoint.
   * @member {string} [description] The StreamingEndpoint description.
   * @member {number} [scaleUnits] The number of scale units.
   * @member {string} [availabilitySetName] AvailabilitySet name
   * @member {object} [accessControl] The access control definition of the
   * StreamingEndpoint.
   * @member {object} [accessControl.akamai] The access control of Akamai
   * @member {array}
   * [accessControl.akamai.akamaiSignatureHeaderAuthenticationKeyList]
   * authentication key list
   * @member {object} [accessControl.ip] The IP access control of the
   * StreamingEndpoint.
   * @member {array} [accessControl.ip.allow] The IP allow list.
   * @member {number} [maxCacheAge] Max cache age
   * @member {array} [customHostNames] The custom host names of the
   * StreamingEndpoint
   * @member {string} [hostName] The StreamingEndpoint host name.
   * @member {boolean} [cdnEnabled] The CDN enabled flag.
   * @member {string} [cdnProvider] The CDN provider name.
   * @member {string} [cdnProfile] The CDN profile name.
   * @member {string} [provisioningState] The provisioning state of the
   * StreamingEndpoint.
   * @member {string} [resourceState] The resource state of the
   * StreamingEndpoint. Possible values include: 'Stopped', 'Starting',
   * 'Running', 'Stopping', 'Deleting', 'Scaling'
   * @member {object} [crossSiteAccessPolicies] The StreamingEndpoint access
   * policies.
   * @member {string} [crossSiteAccessPolicies.clientAccessPolicy] The content
   * of clientaccesspolicy.xml used by Silverlight.
   * @member {string} [crossSiteAccessPolicies.crossDomainPolicy] The content
   * of crossdomain.xml used by Silverlight.
   * @member {date} [freeTrialEndTime] The free trial expiration time.
   * @member {date} [created] The exact time the StreamingEndpoint was created.
   * @member {date} [lastModified] The exact time the StreamingEndpoint was
   * last modified.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StreamingEndpoint
   *
   * @returns {object} metadata of StreamingEndpoint
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StreamingEndpoint',
      type: {
        name: 'Composite',
        className: 'StreamingEndpoint',
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
          scaleUnits: {
            required: false,
            serializedName: 'properties.scaleUnits',
            type: {
              name: 'Number'
            }
          },
          availabilitySetName: {
            required: false,
            serializedName: 'properties.availabilitySetName',
            type: {
              name: 'String'
            }
          },
          accessControl: {
            required: false,
            serializedName: 'properties.accessControl',
            type: {
              name: 'Composite',
              className: 'StreamingEndpointAccessControl'
            }
          },
          maxCacheAge: {
            required: false,
            serializedName: 'properties.maxCacheAge',
            type: {
              name: 'Number'
            }
          },
          customHostNames: {
            required: false,
            serializedName: 'properties.customHostNames',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          hostName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.hostName',
            type: {
              name: 'String'
            }
          },
          cdnEnabled: {
            required: false,
            serializedName: 'properties.cdnEnabled',
            type: {
              name: 'Boolean'
            }
          },
          cdnProvider: {
            required: false,
            serializedName: 'properties.cdnProvider',
            type: {
              name: 'String'
            }
          },
          cdnProfile: {
            required: false,
            serializedName: 'properties.cdnProfile',
            type: {
              name: 'String'
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
              allowedValues: [ 'Stopped', 'Starting', 'Running', 'Stopping', 'Deleting', 'Scaling' ]
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
          freeTrialEndTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.freeTrialEndTime',
            type: {
              name: 'DateTime'
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

module.exports = StreamingEndpoint;
