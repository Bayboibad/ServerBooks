const mongoose = require('mongoose');
const db = require('./db');
const adminSchema = new mongoose.Schema({
    fullName: String,
    username : String,
    password : String,
});

const Admin = mongoose.model('Admin', adminSchema,'Admin');
module.exports = Admin;
