/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * The client access policy.
 *
 */
class CrossSiteAccessPolicies {
  /**
   * Create a CrossSiteAccessPolicies.
   * @member {string} [clientAccessPolicy] The content of
   * clientaccesspolicy.xml used by Silverlight.
   * @member {string} [crossDomainPolicy] The content of crossdomain.xml used
   * by Silverlight.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CrossSiteAccessPolicies
   *
   * @returns {object} metadata of CrossSiteAccessPolicies
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CrossSiteAccessPolicies',
      type: {
        name: 'Composite',
        className: 'CrossSiteAccessPolicies',
        modelProperties: {
          clientAccessPolicy: {
            required: false,
            serializedName: 'clientAccessPolicy',
            type: {
              name: 'String'
            }
          },
          crossDomainPolicy: {
            required: false,
            serializedName: 'crossDomainPolicy',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CrossSiteAccessPolicies;
