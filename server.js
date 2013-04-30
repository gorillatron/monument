var app  = require( './app' ),
    http = require( 'http' )

var server, modulename, pid, port

server = require( 'http' ).createServer( app )

modulename = process.mainModule.filename
pid = process.pid
port = process.env.PORT || 3002


server.listen( port )
console.log( 'server %s [pid: %d port: %d] listening', modulename, pid, port )