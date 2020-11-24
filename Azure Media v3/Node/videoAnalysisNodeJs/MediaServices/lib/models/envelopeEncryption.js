/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Represents configuration specific to Dynamic Envelope Encryption.  This form
 * of encryption is also referred to as the AES-128 CBC Encryption System in
 * ISO/IEC 23009-4.
 *
 */
class EnvelopeEncryption {
  /**
   * Create a EnvelopeEncryption.
   * @member {object} [enabledProtocols] Representing supported protocols
   * @member {boolean} [enabledProtocols.download] Enable Download protocol or
   * not
   * @member {boolean} [enabledProtocols.dash] Enable Dash protocol or not
   * @member {boolean} [enabledProtocols.hls] Enable Hls protocol or not
   * @member {boolean} [enabledProtocols.smoothStreaming] Enable
   * SmoothStreaming protocol or not
   * @member {array} [clearTracks] Representing which tracks should not be
   * encrypted
   * @member {object} [contentKeys] Representing default content key for each
   * encryption scheme and separate content keys for specific tracks
   * @member {object} [contentKeys.defaultKey] Default content key for an
   * encryption scheme
   * @member {string} [contentKeys.defaultKey.label] Label can be used to
   * specify Content Key when creating Stremaing Locator
   * @member {string} [contentKeys.defaultKey.policyName] Policy used by
   * Default Key
   * @member {array} [contentKeys.keyToTrackMappings] Representing tracks needs
   * sepearete content key
   * @member {string} [customLicenseAcquisitionUrlTemplate] The template for a
   * customer service to deliver keys to end users.  Not needed if using the
   * built in Key Delivery service.
   */
  constructor() {
  }

  /**
   * Defines the metadata of EnvelopeEncryption
   *
   * @returns {object} metadata of EnvelopeEncryption
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EnvelopeEncryption',
      type: {
        name: 'Composite',
        className: 'EnvelopeEncryption',
        modelProperties: {
          enabledProtocols: {
            required: false,
            serializedName: 'enabledProtocols',
            type: {
              name: 'Composite',
              className: 'EnabledProtocols'
            }
          },
          clearTracks: {
            required: false,
            serializedName: 'clearTracks',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TrackSelectionElementType',
                  type: {
                    name: 'Composite',
                    className: 'TrackSelection'
                  }
              }
            }
          },
          contentKeys: {
            required: false,
            serializedName: 'contentKeys',
            type: {
              name: 'Composite',
              className: 'StreamingPolicyContentKeys'
            }
          },
          customLicenseAcquisitionUrlTemplate: {
            required: false,
            serializedName: 'customLicenseAcquisitionUrlTemplate',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EnvelopeEncryption;
