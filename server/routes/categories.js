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
  Category.findOne({ _id: req.params.idcategory }, function(err, category) {
    Recipe.find( {category: category.name } , 'id name chef rank_sum rank_count' ,function (err, recipes) {

      // recipes.forEach(function (recipe) {
      //   if(recipe.rank_count){
      //     recipe.rank_average = recipe.rank_sum / recipe.rank_count;
      //   } else {
      //     recipe.rank_average = 0;
      //   }
      //   recipe.rank_sum = recipe.rank_count = undefined;
      // });

      res.send(JSON.stringify(recipes));
      next();
    });
  });
});

module.exports = router;
