/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Configures the Explicit Analog Television Output Restriction control bits.
 * For further details see the PlayReady Compliance Rules.
 *
 */
class ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction {
  /**
   * Create a ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction.
   * @member {boolean} bestEffort Indicates whether this restriction is
   * enforced on a Best Effort basis.
   * @member {number} configurationData Configures the restriction control
   * bits. Must be between 0 and 3 inclusive.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction
   *
   * @returns {object} metadata of ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction',
      type: {
        name: 'Composite',
        className: 'ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction',
        modelProperties: {
          bestEffort: {
            required: true,
            serializedName: 'bestEffort',
            type: {
              name: 'Boolean'
            }
          },
          configurationData: {
            required: true,
            serializedName: 'configurationData',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction;
