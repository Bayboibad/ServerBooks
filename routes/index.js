var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const admin = req.session.admin;
  if(admin){
    
    res.render('index', { title: 'Express' });

  }else{
    console.log('No librarian in session');
    res.redirect('/');
  }
});

router.get('/logout', function(req, res, next) {
  req.session.destroy(function(err) {
    if (err) {
      console.error(err);
    }
    res.redirect('/');
  });
});

module.exports = router;
