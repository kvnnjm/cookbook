var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
  name: String,
  category: String,
  chef: String,
  ingredients: Array,
  description: String,
  comments: Array,
  rank_sum: Number,
  rank_count: Number,
  rank_average: Number
}, {
  collection: 'recipes',
  versionKey: false
});

var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
