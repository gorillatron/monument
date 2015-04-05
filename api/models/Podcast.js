/**
* Podcast.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

import soundcloudConfig from '../../config/soundcloud';

var soundcloudTrackIds = {}

export default {

  schema: true,

  types: {

    trackBelongsToSiteOwnersSoundcloudUser: function(track) {
      return track.user_id === soundcloudConfig.userId
    },

    uniqueTrack: function (track) {
      return !soundcloudTrackIds[track.id]
    }

  },

  attributes: {

    soundcloudTrack: {
      type: 'json',
      required: true,
      uniqueTrack: true,
      trackBelongsToSiteOwnersSoundcloudUser: true
    }

  },

  beforeValidate: function(values, next) {
    Podcast.find((err, podcasts) => {
      if(err) {
        return next(err)
      }

      soundcloudTrackIds = podcasts.reduce((soundcloudTrackIds, podcast) => {
        soundcloudTrackIds[podcast.soundcloudTrack.id] = true
        return soundcloudTrackIds
      }, {})

      return next()
    })
  }

};
