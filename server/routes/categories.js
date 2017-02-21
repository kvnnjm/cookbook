var express = require('express');
var router = express.Router();

var Category = require('../models/category-model');
var Recipe = require('../models/recipe-model');

//retrieve all categories
router.get('/', function(req, res, next) {
  Category.find(function(err, categories) {
    res.send(JSON.stringify(categories));
    next();
  });
});

//retrieve all recipes of a specified category
router.get('/:idcategory/recipes',function (req,res,next) {
  Category.findOne({ id: req.params.idcategory }, function(err, category) {
    Recipe.find( {category: category.name } , function (err, recipes) {
      res.send(JSON.stringify(recipes));
      next();
    });
  });
});

module.exports = router;
