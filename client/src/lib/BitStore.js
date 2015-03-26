var _            = require( 'underscore' )
var EventEmitter = require( 'events' ).EventEmitter
var inherits     = require( 'util' ).inherits
var Promise      = require( 'bluebird' )
var soundcloud   = require( './SoundCloud' )
var getRandomInt = require( './getRandomInt')


function BitStore() {
  EventEmitter.apply( this, arguments )
  this.bits = []
}

inherits( BitStore, EventEmitter )

BitStore.prototype.fetch = function() {
  this.emit('syncing')
  return this.fetchPodcasts().then(_.bind(function( bits ) {
    return this.insertSocialIcons().then(_.bind(function( bits ) {
      this.emit('synced')
      return this
    }, this))
  },this))
}

BitStore.prototype.fetchPodcasts = function () {
  return new Promise(_.bind(function( resolve, reject ){
    soundcloud.getTracks().then(_.bind(function( tracks ) {

      var i = tracks.length
      var bits = tracks.map(function(track) {
        track.title = track.title
          .replace('Monument', '')
          .toLowerCase()
        return { type:'PODCAST', data: {track: track} }
      })

      this.bits = this.bits.concat( bits )

      resolve( this )
    }, this))
  }, this))
}

BitStore.prototype.insertSocialIcons = function() {
  this.bits.splice(getRandomInt(1,4),0, {
    type:'SOCIAL',
    data: { type: 'facebook', url: 'https://www.facebook.com/MonuMnt' }
  })
  this.bits.splice(getRandomInt(1,6),0, {
    type:'SOCIAL',
    data: { type: 'soundcloud', url: 'https://soundcloud.com/monument-podcast' }
  })
  this.bits.splice(getRandomInt(1,7),0, {
    type:'IMAGE',
    data: { url: "/pictures/klistremerke_2_crop.png", utterance: '7' }
  })
  return Promise.resolve( this.bits )
}


module.exports = BitStore
