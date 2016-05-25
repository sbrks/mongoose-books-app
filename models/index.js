var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

//import and export Book model (from book.js) into index.js
module.exports.Book = require("./book.js");
