var express     = require( 'express' ),
    routes      = require( './routes' ),
    http        = require( 'http' ),
    path        = require( 'path' ),
    browserify  = require( 'browserify-middleware' ),
    Podcast     = require( './models/Podcast' )


var app = express()

module.exports = app


/*
 * Configuration
*/
app.configure(function() {
  app.set( 'views', __dirname + '/views' )
  app.set( 'view engine', 'hjs' )
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
    return (user === "monument.podcast@gmail.com" && pass == "supp0rt19887") ||
           (user === "rolf.anders" && pass == "diamant")
  }))
})


function getAllPodcasts( req, res, next ) {
  Podcast.getAll(function( err, podcasts ) {
    req.podcasts = podcasts
    return next()
  })
}

/*
 * Routes
*/
app.get( '/', getAllPodcasts, routes.index )
app.get( '/js/main.js', browserify(path.join(__dirname, '/public/js/main.js')) )


http.createServer( app ).listen( process.env.PORT )
console.log( 'monument now listening on port %d', process.env.PORT );