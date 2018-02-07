var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var engine = require('ejs-mate');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('express-flash');
var MongoStore = require('connect-mongo/es5')(session);
var passport = require('passport');

var app = express();

//middleware
app.use(morgan('dev'));

app.listen(3000, function(err) {
  if (err) throw err;
  console.log('Server is running!');
});

app.get('/', function(req, res) {
  var welcome = 'Welcome!';
  res.json(welcome);
});
