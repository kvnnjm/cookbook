var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cookbook');

var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Error with the db connection: ' + err);
});

db.on('open',function () {
  console.log('Connected to db');
})

module.exports = db;
