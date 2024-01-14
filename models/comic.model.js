const mongoose = require('mongoose');
const db = require('./db');
const comicSchema = new mongoose.Schema({
    name: String,
    author:{
        type: db.mongoose.Schema.Types.ObjectId, ref: 'Author'
    },
    coverImage : String,
    contentImage : [{type : String}], 
    publicationYear: String,
    description:String 
});

const Comic = mongoose.model('Comic', comicSchema,'Comic');

module.exports = Comic;
