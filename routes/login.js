var express = require('express');
var router = express.Router();
const Admin = require('../models/admin.model.js')
const session = require('express-session'); 
const MongoStore = require('connect-mongo');
router.use(session({
    secret: 'cuongbom2102',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb+srv://cuongezs280667:cuongbom123@cluster0.l5rl33f.mongodb.net/BookReadManager' })
}));
/* GET users listing. */
router.get('/',async function(req, res, next) {
    const data = await Admin.find().lean();
    const jsonData = JSON.parse(JSON.stringify(data)); 
    res.render('login', { title: 'PolyLib', data: jsonData });
});

router.post('/login', async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const admin = await Admin.findOne({ username, password });

    if (admin) {
        req.session.admin = admin;

        res.redirect('/index');
    } else {
        res.render('login', { title: 'PolyLib', data: jsonData, error: 'Thông tin đăng nhập không đúng' });
    }
});
module.exports = router;
