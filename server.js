

var path        = require( 'path' )
var koa         = require( 'koa' )
var router      = require( 'koa-router' )
var serve       = require( 'koa-static' )
var Promise     = require( 'bluebird' )
var fs          = Promise.promisifyAll( require('fs') )
var browserify  = require( 'browserify' )
var reactify    = require( 'reactify' )
var less        = require( 'less' )
var jsx         = require('node-jsx')

jsx.install({extension: '.jsx'})

var ClientApp = require( './client/src/App' )

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

const app = new koa()
const client = new ClientApp()

app.use( serve('./client/assets') )
app.use( router(app) )

app.get('/', function *(){
  var bits = yield client.fetchBits()
  var html = yield fs.readFileAsync( path.join(__dirname,'client/index.html'), 'utf8' )
  var content = client.renderToStringAsync({ bits: bits })
  html = html.replace( '##content##', content )
  html = html.replace( '##bootstrapdata##', JSON.stringify({ bits: bits }) )
  this.body = html
})

function captureStream( stream ) {
  return new Promise(function( resolve ) {
    var buffer = ""
    stream.on('data', function( data ) {
      buffer += data
    })
    stream.on('end', function() {
      resolve( buffer )
    })
  })
}

app.get('/App.js', function*() {
  var browserCode = browserify()
    .require( './client/src/App', {expose: 'App'} )
    .transform({ global: true, extension: 'jsx', harmony: true }, reactify )
  this.body = yield captureStream( browserCode.bundle() )
})

app.get('/styles.css', function*() {
  this.body = yield compileLess()
})


app.listen( process.env.PORT || 80 )
