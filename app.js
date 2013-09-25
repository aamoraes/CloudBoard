'use strict';

var express = require('express'),
    http    = require('http'),
    path    = require('path'),
    dust = require('consolidate').dust,
    MongoStore = require('connect-mongo')(express),
    routes = require('./lib/routes.js'),
    server;


var app = express();

app.engine('dust', dust);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'dust');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({
  secret: 'shhitsasecret',
  store: new MongoStore({
    'url': process.env.CLOUDBOARD_DB_URL,
    'clear_interval': 3600
  })
}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

routes(app);

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

server = http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});