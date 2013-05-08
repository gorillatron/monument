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
  app.set( 'view engine', 'hjs' )
  app.use( express.favicon(path.join(__dirname, 'public/favicon.ico')) )
  app.use( express.bodyParser() )
  app.use( express.methodOverride() )
  app.use( app.router )
  app.use( express.static(path.join(__dirname, 'public')) )
  app.use( browserify({ 
    entry: __dirname + '/public/js/main.js',
    mount: '/main.js',
    watch: true
  }))
})

app.configure('development', function() {
  app.use( express.logger('dev') )
  app.use( express.errorHandler() )
  app.use( express.basicAuth(function( user, pass ) {
    return user === "monument.podcast@gmail.com" && pass == "supp0rt19887"
  }))
})


/*
 * Routes
*/
app.get( '/', routes.index )

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