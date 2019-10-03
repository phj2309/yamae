var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

// User Require
var database = require('./DB/connection.js');
var app = express();
// CORS 설정 cross 문제 해결 ajax

// ejs init
app.set('views', path.join( __dirname + '/www'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/static')));

// DB 연결
database.init();

  
//app.use('/store', require('./Router/Store/index'));
//app.use('/user', require('./Router/User/index'));

app.use('/', require('./Router/Home'));
app.use('/plan', require('./Router/Plan'));
app.use('/user', require('./Router/User'));
app.use('/map', require('./Router/Map'));

// css, js, img 정적파일
app.use('/static', express.static('static'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });

  // error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
  // ------- creates Server -------
  module.exports = app;
  
  var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
  });
  