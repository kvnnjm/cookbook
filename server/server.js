var express = require('express');

var categories = require('./routes/categories');
var db = require('./db');

app = express();
var distDir = __dirname + "/../dist/";
console.log(distDir);
app.use(express.static(distDir));

app.use('/api/categories', categories);

app.listen(3000, function () {
  console.log('Server running on 3000')
})

module.exports = app;
