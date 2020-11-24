/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Class for content key in Streaming Locator
 *
 */
class StreamingLocatorContentKey {
  /**
   * Create a StreamingLocatorContentKey.
   * @member {string} [label] Label of Content Key
   * @member {string} type Encryption type of Content Key. Possible values
   * include: 'CommonEncryptionCenc', 'CommonEncryptionCbcs',
   * 'EnvelopeEncryption'
   * @member {uuid} id ID of Content Key
   * @member {string} [value] Value of  of Content Key
   * @member {string} [policyName] ContentKeyPolicy used by Content Key
   * @member {array} [tracks] Tracks which use this Content Key
   */
  constructor() {
  }

  /**
   * Defines the metadata of StreamingLocatorContentKey
   *
   * @returns {object} metadata of StreamingLocatorContentKey
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StreamingLocatorContentKey',
      type: {
        name: 'Composite',
        className: 'StreamingLocatorContentKey',
        modelProperties: {
          label: {
            required: false,
            serializedName: 'label',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'String'
            }
          },
          policyName: {
            required: false,
            serializedName: 'policyName',
            type: {
              name: 'String'
            }
          },
          tracks: {
            required: false,
            serializedName: 'tracks',
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
          }
        }
      }
    };
  }
}

module.exports = StreamingLocatorContentKey;
