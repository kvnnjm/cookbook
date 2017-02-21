var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
  id : Number,
  name: String,
  category: String,
  chef: String,
  ingredients: Array,
  description: String,
  comments: Array,
  rank_sum: Number,
  rank_count: Number},
{
  collection: 'recipes'
});

var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
