var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create Book Schema
var BookSchema = new Schema ({
  title: String,
  author: String,
  image: String,
  release_date: String
});

//create the Book model from the schema
var Book = mongoose.model('Book', BookSchema);

//export Book from this module
module.exports = Book;