var path        = require( 'path' )
var koa         = require( 'koa' )
var router      = require( 'koa-router' )
var serve       = require( 'koa-static' )
var Promise     = require( 'bluebird' )
var fs          = Promise.promisifyAll( require('fs') )
var browserify  = require( 'browserify' )
var reactify    = require( 'reactify' )
var less        = require( 'less' )


function compileSrc( path ) {
  return new Promise(function( resolve, reject) {
    browserify( path )
      .transform({ extension: 'jsx', harmony: true }, reactify )
      .bundle(function( err, programm ) {
        if( err )
          return reject( err )
        resolve( programm )
      })
  })
}

function compileLess() {
  return new Promise(function( resolve, reject ) {
    fs.readFile( './client/src/less/main.less', 'utf8', function( err, lessSrc ) {
      less.render( lessSrc, function( err, css ) {
        if( err )
          return reject( err )
        resolve( css )
      })
    })
  })
}


const app = koa()

app.use( serve('./client/assets') )
app.use( router(app) )

app.get('/', function *(){
  this.body = yield fs.readFileAsync( path.join(__dirname,'client/index.html'), 'utf8' )
})

app.get('/app.js', function*() {
  this.body = yield compileSrc( path.join(__dirname, 'client/src/main.js' )  )
})

app.get('/styles.css', function*() {
  this.body = yield compileLess()
})


app.listen( process.env.PORT || 80 )
