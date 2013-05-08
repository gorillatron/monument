var Backbone  = require( 'backbone' ),
    SC        = require( '../lib/SoundCloud' ),
    PodCast   = require( '../models/PodCast' ),
    create    = require( '../helpers/create' )


var PodCasts = Backbone.Collection.extend({

  model: PodCast,

  initialize: function() {
    this.createSoundCloudConnection()
  },

  createSoundCloudConnection: function() {
    SC.initialize({
      client_id: "84f2b368d96bdc044dafced637dbce4b",
      redirect_uri: "http://local.com:3000/#scauthredirect"
    })
  },

  fetch: function( opts ) {
    SC.get('/groups/25498/tracks', _.bind(function( tracks ) {

      this.add( _.map(tracks, create(PodCast)) )
      this.trigger( 'sync' )

    }, this))
  }

})

module.exports = PodCasts