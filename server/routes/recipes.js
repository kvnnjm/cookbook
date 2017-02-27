var express = require('express');

var router = express.Router();
var Recipe = require('../models/recipe-model');
var rank_average_operation = require('../rank_average_operation')

// var comments = require('./routes/comments');
// var ranks = require('./routes/ranks');

// router.use('/:id/comments', comments);
// router.use('/:id/ranks', ranks);

router.get('/', function(req, res, next) {
  //list all recipes
  Recipe.find(function(err, recipes) {
    rank_average_operation(recipes);
    res.send(JSON.stringify(recipes));
    next();
  });
});

router.get('/:idrecipe', function(req, res, next) {
  //retrieve specific recipe by id
  Recipe.findOne({ _id : req.params.idrecipe }, function(err, recipe) {
    rank_average_operation([recipe]);
    res.send(JSON.stringify(recipe));
    next();
  });
});

router.get('/name/:name', function(req, res, next) {
  //retrieve specific recipe by name, for searching
  console.log(req.params.name);
  Recipe.find({ name : { $regex: req.params.name , $options: 'i'}},'id name chef rank_sum rank_count imageurl', function(err, recipes) {
    rank_average_operation(recipes);
    res.send(JSON.stringify(recipes));
    next();
  });
});

router.put('/:idrecipe', function(req, res, next) {
  //update specific recipe
  Recipe.findOne({ _id: req.params.idrecipe }, function(err, recipe) {
    Object.keys(req.body).forEach(function(key,index) {
      recipe[key] = req.body[key];
    });
    recipe.save()
    res.send();
    next();
  });
});

router.post('/', function(req, res, next){
  //post a new recipe
  var recipe = new Recipe(req.body);
  recipe.save(function (err, recipe) {
    if (err) return console.error(err);
  });
  res.send();
  next();

});

router.delete('/:idrecipe', function(req, res, next) {
  //retrieve specific recipe
  Recipe.findOne({ _id: req.params.idrecipe }, function(err, recipe) {
    recipe.remove(function (err, recipe) {
      if (err) return console.error(err);
    });
    res.send();
    next();
  });
});

module.exports = router;
