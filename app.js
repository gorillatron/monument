var express     = require( 'express' ),
    routes      = require( './routes' ),
    http        = require( 'http' ),
    path        = require( 'path' ),
    browserify  = require( 'browserify' )


var app = express()

module.exports = app


/*
 * Configuration
*/
app.configure(function() {
  app.set( 'views', __dirname + '/views' )
  app.set( 'view engine', 'jade' )
  app.use( express.favicon(path.join(__dirname, 'public/favicon.ico')) )
  app.use( express.bodyParser() )
  app.use( express.methodOverride() )
  app.use( app.router )
  app.use( express.static(path.join(__dirname, 'public')) )
})

app.configure('development', function() {
  app.use( express.logger('dev') )
  app.use( express.errorHandler() )
  app.use( express.basicAuth(function( user, pass ) {
    return user === "monument.podcast@gmail.com" && passs == "supp0rt19887"
  }))
})


/*
 * Routes
*/
app.get( '/', routes.index )


http.createServer( app ).listen( process.env.PORT )