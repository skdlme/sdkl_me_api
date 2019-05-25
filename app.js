var express = require('express');
var path = require('path');

var apis = require('./api');

var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use(apis);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.sendStatus(404)
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

module.exports = app;
