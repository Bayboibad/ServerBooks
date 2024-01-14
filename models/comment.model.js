const mongoose = require('mongoose');
const db = require('./db');

const commentSchema = new mongoose.Schema({
    user:{
        type: db.mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    comic:{
        type: db.mongoose.Schema.Types.ObjectId, ref: 'Comic'
    },
    content: String,
    commentDate: Date,
});
const Comment = mongoose.model('Comment', commentSchema,'Comment');
module.exports = Comment;
