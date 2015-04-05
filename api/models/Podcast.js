/**
* Podcast.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

import soundcloudConfig from '../../config/soundcloud';

export default {

  schema: true,

  _uniqueTrack: false,

  types: {
    belongsToSiteOwnersSoundcloudUser: function() {
      return this.soundcloudData.user_id === soundcloudConfig.userId
    },
    uniqueTrack: function() {
      return this._uniqueTrack
    }
  },

  attributes: {

    soundcloudData: {
      type: 'json',
      uniqueTrack: true,
      belongsToSiteOwnersSoundcloudUser: true
    }

  },

  beforeValidate: function(values, next) {
    var _this = this

    Podcast.find(function(err, podcasts) {
      if(err) {
        return next(err)
      }

      podcasts = podcasts.filter(function(podcast) {
        return podcast.soundcloudData.id === values.soundcloudData.id
      })

      if(podcasts.length == 0) {
        _this._uniqueTrack = true
      }

      return next()
    })
  }

};
