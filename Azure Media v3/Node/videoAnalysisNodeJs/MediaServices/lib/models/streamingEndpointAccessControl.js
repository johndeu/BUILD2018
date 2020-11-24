/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * StreamingEndpoint access control definition.
 *
 */
class StreamingEndpointAccessControl {
  /**
   * Create a StreamingEndpointAccessControl.
   * @member {object} [akamai] The access control of Akamai
   * @member {array} [akamai.akamaiSignatureHeaderAuthenticationKeyList]
   * authentication key list
   * @member {object} [ip] The IP access control of the StreamingEndpoint.
   * @member {array} [ip.allow] The IP allow list.
   */
  constructor() {
  }

  /**
   * Defines the metadata of StreamingEndpointAccessControl
   *
   * @returns {object} metadata of StreamingEndpointAccessControl
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StreamingEndpointAccessControl',
      type: {
        name: 'Composite',
        className: 'StreamingEndpointAccessControl',
        modelProperties: {
          akamai: {
            required: false,
            serializedName: 'akamai',
            type: {
              name: 'Composite',
              className: 'AkamaiAccessControl'
            }
          },
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

module.exports = StreamingEndpointAccessControl;
