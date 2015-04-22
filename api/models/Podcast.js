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
 *
 * NB: this is a hack, but a workaround for waterline ORM not having asynchronous type checks.
*/
var soundcloudTrackIndex = {

  create: async function( cb ) {
    var podcasts = await Podcast.find()

    var index = podcasts.reduce((index, podcast) => {
      index[podcast.soundcloudTrack.id] = true
      return index
    }, {})

    return {
      has: (id) => index[id] ? true : false
    }
  }
}

export default {

  schema: true,

  types: {

    trackBelongsToSiteOwnersSoundcloudUser: function(track) {
      return track.user_id === soundcloudConfig.userId
    }

  },

  attributes: {

    soundcloudTrack: {
      type: 'json',
      required: true,
      trackBelongsToSiteOwnersSoundcloudUser: true
    }

  },

  createIfNotExists: async function(podcast) {
    if(Array.isArray(podcast)) {
      return this.createManyIfNotExists(podcast)
    }
    else {
      return this.createOneIfNotExists(podcast)
    }
  },

  createManyIfNotExists: async function(podcasts) {
    let index = await soundcloudTrackIndex.create()
    let podcastsToCreate = podcasts.filter((podcast) => !index.has(podcast.soundcloudTrack.id))

    return Podcast.create(podcastsToCreate)
  },

  createOneIfNotExists: async function(podcast) {
    let index = await soundcloudTrackIndex.create()
    let exists = podcast && podcast.soundcloudTrack && index.has(podcast.soundcloudTrack.id)

    return exists ? Promise.resolve()
                  : Podcast.create(podcast)
  }

};
