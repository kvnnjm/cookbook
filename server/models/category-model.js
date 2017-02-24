var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
  name: String
}, {
  collection: 'categories',
  versionKey: false
});

var Category = mongoose.model('Category', categorySchema);

module.exports = Category;
