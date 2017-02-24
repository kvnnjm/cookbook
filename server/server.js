var express = require('express');
var bodyParser = require('body-parser')

var categories = require('./routes/categories');
var recipes = require('./routes/recipes')
var db = require('./db');

app = express();
var distDir = __dirname + "/../dist/";

app.use(bodyParser.json());
app.use(express.static(distDir));

app.use('/api/category', categories);
app.use('/api/recipe', recipes);


app.listen(3000, function () {
  console.log('Server running on 3000')
})

module.exports = app;
