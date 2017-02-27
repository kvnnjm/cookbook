var express = require('express');

var router = express.Router();
var Recipe = require('../models/recipe-model');

router.get('/', function(req, res, next) {
  //list all comments
  //Unused
  Recipe.findOne({ _id : req.params.idrecipe },'comments', function(err, recipe) {
    res.send(JSON.stringify(recipe));
    next();
  });
});

router.post('/', function(req, res, next){
  //post a new comment

  Recipe.findOne({ _id : req.params.idrecipe },'comments', function(err, recipe) {
    res.send(JSON.stringify(recipe));
    next();
  });

  var recipe = new Recipe(req.body);
  recipe.save(function (err, recipe) {
    if (err) return console.error(err);
  });
  res.send();
  next();

});

module.exports = router;
