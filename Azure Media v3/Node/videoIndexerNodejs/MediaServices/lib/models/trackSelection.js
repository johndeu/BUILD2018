/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Class to select a track
 *
 */
class TrackSelection {
  /**
   * Create a TrackSelection.
   * @member {array} [trackSelections] TrackSelections is a track property
   * condition list which can specify track(s)
   */
  constructor() {
  }

  /**
   * Defines the metadata of TrackSelection
   *
   * @returns {object} metadata of TrackSelection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TrackSelection',
      type: {
        name: 'Composite',
        className: 'TrackSelection',
        modelProperties: {
          trackSelections: {
            required: false,
            serializedName: 'trackSelections',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TrackPropertyConditionElementType',
                  type: {
                    name: 'Composite',
                    className: 'TrackPropertyCondition'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TrackSelection;
