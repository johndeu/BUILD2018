/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * The PlayReady license
 *
 */
class ContentKeyPolicyPlayReadyLicense {
  /**
   * Create a ContentKeyPolicyPlayReadyLicense.
   * @member {boolean} allowTestDevices A flag indicating whether test devices
   * can use the license.
   * @member {date} [beginDate] The begin date of license
   * @member {date} [expirationDate] The expiration date of license.
   * @member {moment.duration} [relativeBeginDate] The relative begin date of
   * license.
   * @member {moment.duration} [relativeExpirationDate] The relative expiration
   * date of license.
   * @member {moment.duration} [gracePeriod] The grace period of license.
   * @member {object} [playRight] The license PlayRight
   * @member {moment.duration} [playRight.firstPlayExpiration] The amount of
   * time that the license is valid after the license is first used to play
   * content.
   * @member {number} [playRight.scmsRestriction] Configures the Serial Copy
   * Management System (SCMS) in the license. Must be between 0 and 3
   * inclusive.
   * @member {number} [playRight.agcAndColorStripeRestriction] Configures
   * Automatic Gain Control (AGC) and Color Stripe in the license. Must be
   * between 0 and 3 inclusive.
   * @member {object} [playRight.explicitAnalogTelevisionOutputRestriction]
   * Configures the Explicit Analog Television Output Restriction in the
   * license. Configuration data must be between 0 and 3 inclusive.
   * @member {boolean}
   * [playRight.explicitAnalogTelevisionOutputRestriction.bestEffort] Indicates
   * whether this restriction is enforced on a Best Effort basis.
   * @member {number}
   * [playRight.explicitAnalogTelevisionOutputRestriction.configurationData]
   * Configures the restriction control bits. Must be between 0 and 3
   * inclusive.
   * @member {boolean} [playRight.digitalVideoOnlyContentRestriction] Enables
   * the Image Constraint For Analog Component Video Restriction in the
   * license.
   * @member {boolean}
   * [playRight.imageConstraintForAnalogComponentVideoRestriction] Enables the
   * Image Constraint For Analog Component Video Restriction in the license.
   * @member {boolean}
   * [playRight.imageConstraintForAnalogComputerMonitorRestriction] Enables the
   * Image Constraint For Analog Component Video Restriction in the license.
   * @member {string} [playRight.allowPassingVideoContentToUnknownOutput]
   * Configures Unknown output handling settings of the license. Possible
   * values include: 'Unknown', 'NotAllowed', 'Allowed',
   * 'AllowedWithVideoConstriction'
   * @member {number} [playRight.uncompressedDigitalVideoOpl] Specifies the
   * output protection level for uncompressed digital video.
   * @member {number} [playRight.compressedDigitalVideoOpl] Specifies the
   * output protection level for compressed digital video.
   * @member {number} [playRight.analogVideoOpl] Specifies the output
   * protection level for compressed digital audio.
   * @member {number} [playRight.compressedDigitalAudioOpl] Specifies the
   * output protection level for compressed digital audio.
   * @member {number} [playRight.uncompressedDigitalAudioOpl] Specifies the
   * output protection level for uncompressed digital audio.
   * @member {string} licenseType The license type. Possible values include:
   * 'Unknown', 'NonPersistent', 'Persistent'
   * @member {object} contentKeyLocation The content key location.
   * @member {string} [contentKeyLocation.odatatype] Polymorphic Discriminator
   * @member {string} contentType The PlayReady content type. Possible values
   * include: 'Unknown', 'Unspecified', 'UltraVioletDownload',
   * 'UltraVioletStreaming'
   */
  constructor() {
  }

  /**
   * Defines the metadata of ContentKeyPolicyPlayReadyLicense
   *
   * @returns {object} metadata of ContentKeyPolicyPlayReadyLicense
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContentKeyPolicyPlayReadyLicense',
      type: {
        name: 'Composite',
        className: 'ContentKeyPolicyPlayReadyLicense',
        modelProperties: {
          allowTestDevices: {
            required: true,
            serializedName: 'allowTestDevices',
            type: {
              name: 'Boolean'
            }
          },
          beginDate: {
            required: false,
            serializedName: 'beginDate',
            type: {
              name: 'DateTime'
            }
          },
          expirationDate: {
            required: false,
            serializedName: 'expirationDate',
            type: {
              name: 'DateTime'
            }
          },
          relativeBeginDate: {
            required: false,
            serializedName: 'relativeBeginDate',
            type: {
              name: 'TimeSpan'
            }
          },
          relativeExpirationDate: {
            required: false,
            serializedName: 'relativeExpirationDate',
            type: {
              name: 'TimeSpan'
            }
          },
          gracePeriod: {
            required: false,
            serializedName: 'gracePeriod',
            type: {
              name: 'TimeSpan'
            }
          },
          playRight: {
            required: false,
            serializedName: 'playRight',
            type: {
              name: 'Composite',
              className: 'ContentKeyPolicyPlayReadyPlayRight'
            }
          },
          licenseType: {
            required: true,
            serializedName: 'licenseType',
            type: {
              name: 'String'
            }
          },
          contentKeyLocation: {
            required: true,
            serializedName: 'contentKeyLocation',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '@odata.type',
                clientName: 'odatatype'
              },
              uberParent: 'ContentKeyPolicyPlayReadyContentKeyLocation',
              className: 'ContentKeyPolicyPlayReadyContentKeyLocation'
            }
          },
          contentType: {
            required: true,
            serializedName: 'contentType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ContentKeyPolicyPlayReadyLicense;
