var React             = require( 'react' )
var MonumentComponent = require( './components/MonumentComponent.jsx' )
var SoundCloud        = require( './lib/SoundCloud' )

SoundCloud.initialize({
  client_id: "84f2b368d96bdc044dafced637dbce4b",
  redirect_uri: "http://local.com:3000/#scauthredirect"
})

var monumentComponent = new MonumentComponent( document.getElementById('app') )

SoundCloud.get('/users/monument-podcast/tracks', function( tracks ) {
  monumentComponent.setProps({ tracks: tracks })
})
