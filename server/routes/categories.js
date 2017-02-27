var express = require('express');
var router = express.Router();

var Category = require('../models/category-model');
var Recipe = require('../models/recipe-model');
var rank_average_operation = require('../rank_average_operation')


//retrieve all categories
router.get('/', function(req, res, next) {
  Category.find(function(err, categories) {
    res.send(JSON.stringify(categories));
    next();
  });
});

//retrieve all recipes of a specified category
router.get('/:idcategory/recipes',function (req,res,next) {
  Category.findOne({ _id: req.params.idcategory }, function(err, category) {
    Recipe.find( {category: category.name } , 'id name chef rank_sum rank_count imageurl' ,function (err, recipes) {
      rank_average_operation(recipes);
      res.send(JSON.stringify(recipes));
      next();
    });
  });
});

module.exports = router;
