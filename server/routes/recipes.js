var express = require('express');

var router = express.Router();
var Category = require('../models/category-model');

var comments = require('./routes/comments');
var ranks = require('./routes/ranks');


app.use('/:id/comments', comments);
app.use('/:id/ranks', ranks);


router.get('/', function(req, res, next) {
  //list all recipes
});

router.post('/', function(req, res, next){
  //post a new recipe
});
