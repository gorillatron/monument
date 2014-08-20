var Promise               = require( 'bluebird' )
var React                 = require( 'react' )
var Monument              = require( './components/Monument.jsx' )
var SoundCloud            = require( './lib/SoundCloud' )
var mprogress             = require( './lib/mprogress' )


mprogress.start()


SoundCloud.initialize({
  client_id: "84f2b368d96bdc044dafced637dbce4b",
  redirect_uri: "http://local.com:3000/#scauthredirect"
})


var monumentComponent = React.renderComponent( new Monument(), document.getElementById('app') )

mprogress.inc()

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

SoundCloud.get('/users/monument-podcast/tracks', function( tracks ) {

  var i = tracks.length
  var bits = tracks.map(function(track) {
    track.title = track.title.replace('Monument', '')
    return { type:'PODCAST', data: track }
  })

  mprogress.inc()

  bits.splice(getRandomInt(1,7),0, {
    type:'SOCIAL',
    data: { type: 'facebook', url: 'https://www.facebook.com/MonuMnt' }
  })
  
  bits.splice(getRandomInt(1,7),0, {
    type:'SOCIAL',
    data: { type: 'soundcloud', url: 'https://soundcloud.com/monument-podcast' }
  })

  bits.splice(getRandomInt(1,7),0, {
    type:'IMAGE',
    data: { url: "/pictures/klistremerke_2_crop.png" }
  })

  setTimeout(function(){
    monumentComponent.setProps({
      bits: bits
    })

    mprogress.inc()

    setTimeout(function() {
      mprogress.done()
    }, 500)

  }, 800)

})
