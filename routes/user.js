var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',async function(req, res, next) {
  const admin = req.session.admin; // Lấy thông tin người dùng từ session
  if(admin){
    console.log(admin)
    res.render('user', {title:'user'});
  }else{
    console.log('No librarian in session');
    res.redirect('/');
  }
});
module.exports = router;
