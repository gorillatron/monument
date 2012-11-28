
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , db = mongoose.createConnection("mongodb://nodejitsu_gorillatron:uic27c40n8end7jtlsig3qc9ia@ds039257.mongolab.com:39257/nodejitsu_gorillatron_nodejitsudb1423928816");


var app = express();

var server = require('http').createServer(app)


app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

app.post('/requestinformation', routes.requestinformation)


server.listen(app.get("port"))
console.log("app listening on port " + app.get("port"))