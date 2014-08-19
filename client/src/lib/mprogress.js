var _         = require( 'underscore' )
var Promise   = require( 'bluebird' )
var nprogress = require( 'nprogress' )



var mprogress = {
  loads: []
}

module.exports = mprogress


mprogress.start = function( options ) {
  mprogress.log('start')
  var options = _.extend({
    hooks: [],
    nprogress: { }
  }, options)

  nprogress.start( options.nprogress )

  _.forEach(options.hooks, function( hook ) {
    if( hook === XMLHttpRequest ) {
        mprogress.setupXMLHttpRequestHook()
    }
  })

}


mprogress.set = function() {
  nprogress.set.apply( nprogress, arguments )
}


mprogress.inc = function() {
  nprogress.inc.apply( nprogress, arguments )
}


mprogress.registerLoad = function( options ) {
  mprogress.log('registerLoad')

  function _resolve( resolve, reject ) {
    mprogress.log('resolve')
    nprogress.inc()
    resolve()
  }

  var load = (new Promise( _resolve ))
  var response = Promise.defer( load )
  mprogress.loads.push( load )
  console.log(mprogress.loads)

  function _done() {
    var args = Array.prototype.slice.call( arguments )
    mprogress.log('registerLoad => _done.call()')
    if( args[0] === XMLHttpRequestProgressEvent) {

    }
    setTimeout(function() {
      Promise.resolve( response ).then(function() {

      })
    }, mprogress.loads.length * 200 )
  }

  return _done
}


mprogress.setupXMLHttpRequestHook = function() {
  mprogress.log('setupXMLHttpRequestHook');
  (function(open) {

    XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {
      mprogress.log('XMLHttpRequest.prototype.open')
      this.addEventListener("readystatechange", mprogress.registerLoad({ type: XMLHttpRequest }), false);
      open.call(this, method, url, async, user, pass);
    }

  })( XMLHttpRequest.prototype.open )
}


mprogress.done = function() {
  console.log(mprogress.loads)
  Promise.all( mprogress.loads )
    .then(function() {
      mprogress.log('post.done')
      nprogress.done()
    })
}

mprogress.log = function( message ) {
  console.log( 'mprogress:', message )
}
