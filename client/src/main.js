var React             = require( 'react' )
var Monument          = require( './components/Monument.jsx' )
var SoundCloud        = require( './lib/SoundCloud' )

SoundCloud.initialize({
  client_id: "84f2b368d96bdc044dafced637dbce4b",
  redirect_uri: "http://local.com:3000/#scauthredirect"
})

var monumentComponent = React.renderComponent( new Monument(), document.getElementById('app') )

SoundCloud.get('/users/monument-podcast/tracks', function( tracks ) {
  monumentComponent.setProps({ tracks: tracks })
})
