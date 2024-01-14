const mongoose = require('mongoose');
const db = require('./db');
const authorSchema = new mongoose.Schema({
    fullName: String,
    birthday : Date,
    nationality : String,
    image : String,
    biography : String,
});

const Author = mongoose.model('Author', authorSchema,'Author');

module.exports = Author;
