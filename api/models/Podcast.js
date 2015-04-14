/**
* Podcast.js
*
* @description :: Model for Podcast, contains a Soundcloud.API Track.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

import Promise from 'bluebird';
import soundcloudConfig from '../../config/soundcloud';


/**
 * Index for soundcloud track ids.
 * Used to check that the track id is unique in the database.
 * The index is populated each time the beforeValidate hook of Podcast is run.
*/
var soundcloudTrackIndex = {

  index: {},

  populate: async function( cb ) {
    var podcasts = await Podcast.find()
    this.index = podcasts.reduce((index, podcast) => {
      index[podcast.soundcloudTrack.id] = true
      return index
    }, {})
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

  beforeValidate: async function(values, next) {
    await soundcloudTrackIndex.populate()
    next()
  },

  createIfNotExists: async function(podcast) {
    var data

    await soundcloudTrackIndex.populate()
    
    if(Array.isArray(podcast)) {
      data = podcast.filter((podcast) => !soundcloudTrackIndex.has(podcast.soundcloudTrack.id))
      data = data.length ? data : null
    }
    else {
      data = podcast && podcast.soundcloudTrack && !soundcloudTrackIndex.has(podcast.soundcloudTrack.id) ? podcast : null
    }

    if(data) {
      return Podcast.create(data)
    }

    return Promise.resolve()
  }

};
