var http = require( 'http' )

var api = module.exports = Object.seal({

  getTracks: function() {
    return new Promise(function( resolve, reject ) {
      http.get('http://api.soundcloud.com/users/monument-podcast/tracks?client_id=84f2b368d96bdc044dafced637dbce4b&format=json&_status_code_map[302]=200', function( res ) {
        var buffer = ''
        res.on( 'data', function( data ) {
          buffer += data
        })
        res.on( 'end', function(){
          resolve( JSON.parse(buffer) )
        })
      })
    })
  }

})
