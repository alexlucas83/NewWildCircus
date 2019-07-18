var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var placeRouter = require('./routes/places');
var cartRouter = require('./routes/carts');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/Api/v1/place', placeRouter);
app.use('/Api/v1/cart', cartRouter);
module.exports = app;
