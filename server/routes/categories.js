var express = require('express');

var router = express.Router();
//var recipes = require('./routes/recipes');

var Category = require('../models/category-model');

router.get('/', function(req, res, next) {
  Category.find()
  .select({ name: 1 })
  .exec(
    function(err, categories) {
      res.send(JSON.stringify(categories));
    next();
  });
});

// router.get('/:idcategory',function (req,res,next) {
//   Category.find(function(err, categories) {
//     res.send(JSON.stringify(categories));
//     next();
//   });
// });

module.exports = router;
