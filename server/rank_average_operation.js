module.exports = function (recipes) {
  recipes.forEach(function (recipe) {
    recipe.rank_average = (recipe.rank_count) ? recipe.rank_sum / recipe.rank_count : 0;
    recipe.rank_sum = recipe.rank_count = undefined;
  });

}
