/**
* Podcast.js
*
* @description :: Model for Podcast, contains a Soundcloud.API Track.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

import soundcloudConfig from '../../config/soundcloud';


/**
 * Index for soundcloud track ids.
 * Used to check that the track id is unique in the database.
 * The index is populated each time the beforeValidate hook of Podcast is run.
*/
var soundcloudTrackIndex = {

  index: {},

  populate:function( cb ) {
    Podcast.find((err, podcasts) => {
      if(err) {
        return cb(err)
      }

      this.index = podcasts.reduce((index, podcast) => {
        index[podcast.soundcloudTrack.id] = true
        return index
      }, {})

      return cb()
    })
  },

  has: function(id) {
    return this.index[id] === true
  }
}


export default {

  schema: true,

  types: {

    trackBelongsToSiteOwnersSoundcloudUser: function(track) {
      return track.user_id === soundcloudConfig.userId
    },

    uniqueTrack: function (track) {
      return !soundcloudTrackIndex.has(track.id)
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
    soundcloudTrackIndex.populate(next)
  }

};
