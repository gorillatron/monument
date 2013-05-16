var express     = require( 'express' ),
    routes      = require( './routes' ),
    http        = require( 'http' ),
    path        = require( 'path' ),
    browserify  = require( 'browserify-middleware' )


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


/*
 * Routes
*/
app.get( '/', routes.index )
app.get( '/js/main.js', browserify(path.join(__dirname, '/public/js/main.js')) )

app.get( '/posts', function( req, res ) {
  res.send([
    {
      id: 1,
      type: "podcast",
      soundcloudtrackid: "2F89868066",
      createtime: new Date(),
      js: "",
      css: "",
      template: ""
    },
    {
      id: 2,
      type: "podcast",
      soundcloudtrackid: "68072005",
      createtime: new Date(),
      js: "",
      css: "",
      template: ""
    }
  ])
})


http.createServer( app ).listen( process.env.PORT )
console.log( 'monument now listening on port %d', process.env.PORT );