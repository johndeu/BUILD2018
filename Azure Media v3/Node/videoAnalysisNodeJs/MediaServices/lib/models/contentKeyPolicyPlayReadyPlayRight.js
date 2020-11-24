/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Configures the Play Right in the PlayReady license.
 *
 */
class ContentKeyPolicyPlayReadyPlayRight {
  /**
   * Create a ContentKeyPolicyPlayReadyPlayRight.
   * @member {moment.duration} [firstPlayExpiration] The amount of time that
   * the license is valid after the license is first used to play content.
   * @member {number} [scmsRestriction] Configures the Serial Copy Management
   * System (SCMS) in the license. Must be between 0 and 3 inclusive.
   * @member {number} [agcAndColorStripeRestriction] Configures Automatic Gain
   * Control (AGC) and Color Stripe in the license. Must be between 0 and 3
   * inclusive.
   * @member {object} [explicitAnalogTelevisionOutputRestriction] Configures
   * the Explicit Analog Television Output Restriction in the license.
   * Configuration data must be between 0 and 3 inclusive.
   * @member {boolean} [explicitAnalogTelevisionOutputRestriction.bestEffort]
   * Indicates whether this restriction is enforced on a Best Effort basis.
   * @member {number}
   * [explicitAnalogTelevisionOutputRestriction.configurationData] Configures
   * the restriction control bits. Must be between 0 and 3 inclusive.
   * @member {boolean} digitalVideoOnlyContentRestriction Enables the Image
   * Constraint For Analog Component Video Restriction in the license.
   * @member {boolean} imageConstraintForAnalogComponentVideoRestriction
   * Enables the Image Constraint For Analog Component Video Restriction in the
   * license.
   * @member {boolean} imageConstraintForAnalogComputerMonitorRestriction
   * Enables the Image Constraint For Analog Component Video Restriction in the
   * license.
   * @member {string} allowPassingVideoContentToUnknownOutput Configures
   * Unknown output handling settings of the license. Possible values include:
   * 'Unknown', 'NotAllowed', 'Allowed', 'AllowedWithVideoConstriction'
   * @member {number} [uncompressedDigitalVideoOpl] Specifies the output
   * protection level for uncompressed digital video.
   * @member {number} [compressedDigitalVideoOpl] Specifies the output
   * protection level for compressed digital video.
   * @member {number} [analogVideoOpl] Specifies the output protection level
   * for compressed digital audio.
   * @member {number} [compressedDigitalAudioOpl] Specifies the output
   * protection level for compressed digital audio.
   * @member {number} [uncompressedDigitalAudioOpl] Specifies the output
   * protection level for uncompressed digital audio.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ContentKeyPolicyPlayReadyPlayRight
   *
   * @returns {object} metadata of ContentKeyPolicyPlayReadyPlayRight
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContentKeyPolicyPlayReadyPlayRight',
      type: {
        name: 'Composite',
        className: 'ContentKeyPolicyPlayReadyPlayRight',
        modelProperties: {
          firstPlayExpiration: {
            required: false,
            serializedName: 'firstPlayExpiration',
            type: {
              name: 'TimeSpan'
            }
          },
          scmsRestriction: {
            required: false,
            serializedName: 'scmsRestriction',
            type: {
              name: 'Number'
            }
          },
          agcAndColorStripeRestriction: {
            required: false,
            serializedName: 'agcAndColorStripeRestriction',
            type: {
              name: 'Number'
            }
          },
          explicitAnalogTelevisionOutputRestriction: {
            required: false,
            serializedName: 'explicitAnalogTelevisionOutputRestriction',
            type: {
              name: 'Composite',
              className: 'ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction'
            }
          },
          digitalVideoOnlyContentRestriction: {
            required: true,
            serializedName: 'digitalVideoOnlyContentRestriction',
            type: {
              name: 'Boolean'
            }
          },
          imageConstraintForAnalogComponentVideoRestriction: {
            required: true,
            serializedName: 'imageConstraintForAnalogComponentVideoRestriction',
            type: {
              name: 'Boolean'
            }
          },
          imageConstraintForAnalogComputerMonitorRestriction: {
            required: true,
            serializedName: 'imageConstraintForAnalogComputerMonitorRestriction',
            type: {
              name: 'Boolean'
            }
          },
          allowPassingVideoContentToUnknownOutput: {
            required: true,
            serializedName: 'allowPassingVideoContentToUnknownOutput',
            type: {
              name: 'String'
            }
          },
          uncompressedDigitalVideoOpl: {
            required: false,
            serializedName: 'uncompressedDigitalVideoOpl',
            type: {
              name: 'Number'
            }
          },
          compressedDigitalVideoOpl: {
            required: false,
            serializedName: 'compressedDigitalVideoOpl',
            type: {
              name: 'Number'
            }
          },
          analogVideoOpl: {
            required: false,
            serializedName: 'analogVideoOpl',
            type: {
              name: 'Number'
            }
          },
          compressedDigitalAudioOpl: {
            required: false,
            serializedName: 'compressedDigitalAudioOpl',
            type: {
              name: 'Number'
            }
          },
          uncompressedDigitalAudioOpl: {
            required: false,
            serializedName: 'uncompressedDigitalAudioOpl',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ContentKeyPolicyPlayReadyPlayRight;
