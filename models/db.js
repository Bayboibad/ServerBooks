const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://cuongezs280667:cuongbom123@cluster0.l5rl33f.mongodb.net/BookReadManager')
// mongoose.connect('mongodb://127.0.0.1:27017/ComicReadManager')
        .catch((err)=>{
            console.log("Database connection error");
            console.log(err);
        });
module.exports = {mongoose};