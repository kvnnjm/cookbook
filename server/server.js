var express = require('express');

var categories = require('./routes/categories');
var db = require('./db');

app = express();

app.use('/categories', categories);

app.listen(3000, function () {
  console.log('Server running on 3000')
})

module.exports = app;
