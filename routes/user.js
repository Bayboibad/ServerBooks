var express = require('express');
var router = express.Router();
const User = require('../models/user.model');

var userCtrl = require("../controllers/user.controller");

router.get('/list', userCtrl.listUser);
router.post('/addUser', userCtrl.addUser);
router.post('/updateUser', userCtrl.updateUser);
router.delete('/deleteUser/:_id', userCtrl.deleteUser);
router.get('/deleteUserOnWeb', userCtrl.deleteUserOnWeb);

router.get('/',async function(req, res, next) {
  const admin = req.session.admin;
  const dataUser = await User.find()
  if(admin){
    console.log(admin)
    res.render('user', {dataUser:dataUser});
  }else{
    console.log('No librarian in session');
    res.redirect('/'); 
  }
});
module.exports = router;
