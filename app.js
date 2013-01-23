var express     = require( 'express' ),
    routes      = require( './routes' ),
    http        = require( 'http' ),
    path        = require( 'path' ),
    browserify  = require( 'browserify' )


var app = express()

var server = require( 'http' ).createServer( app )


app.configure(function() {
  app.set( 'port', process.env.PORT || 3002 )
  app.set( 'views', __dirname + '/views' )
  app.set( 'view engine', 'jade' )
  app.use( express.favicon() )
  app.use( express.logger('dev') )
  app.use( express.bodyParser() )
  app.use( express.methodOverride() )
  app.use( app.router )
  app.use( express.static(path.join(__dirname, 'public')) )
  app.use( browserify({ 
    entry: __dirname + '/public/js/main.js',
    mount: "/main.js",
    require: {
      'jquery': 'jquery-browserify',
      'Backbone': 'backbone-browserify'
    },
    watch: true,
    debug: true
  }))
})

app.configure('development', function(){
  app.use( express.errorHandler() )
})

app.get( '/', routes.index )


server.listen( app.get("port") )
console.log( "app listening on port " + app.get("port") )