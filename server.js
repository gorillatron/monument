var koa         = require( 'koa' )
var serve       = require( 'koa-static' )
var Promise     = require( 'bluebird' )
var fs          = Promise.promisifyAll( require('fs') )
var browserify  = require( 'browserify' )
var typescript  = require( 'browserify-typescript' )
var less        = require( 'less' )


function compileSrc() {
  return new Promise(function( resolve, reject) {
    var bundle = browserify()
    bundle.add( './client/src/main.ts' )
    bundle.transform( typescript )
    bundle.bundle(function( err, programm ) {
      if( err )
        return reject( err )
      resolve( programm )
    })
  })
}

function compileLess() {
  return new Promise(function( resolve, reject ) {
    fs.readFile( './client/less/main.less', 'utf8', function( err, lessSrc ) {
      less.render( lessSrc, function( err, css ) {
        if( err )
          return reject( err )
        resolve( css )
      })
    })
  })
}

const app = koa()

app.use( serve('./static') )

app.use(function *(){
  var html = yield fs.readFileAsync( './client/templates/index.html', 'utf8' )
  var html = html.replace( "@PROGRAM@", yield compileSrc() )
  var html = html.replace( "@CSS@", yield compileLess() )
  this.body = html
})


app.listen( process.env.PORT || 3000 )
