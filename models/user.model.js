const mongoose = require('mongoose');
const db = require('./db');
const userSchema = new mongoose.Schema({
    fullName: String,
    username: String,
    email: String,
    password: String,
    phoneNumber : String,
    address : String,
    image : String
});
const User = mongoose.model('User', userSchema,'User');
module.exports = User;
