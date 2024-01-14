var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/",async function (req, res, next) {
  const admin = req.session.admin;
  if (admin) {
    console.log(admin);
    res.render("author", {title:"author"});
  } else {
    console.log("No librarian in session");
    res.redirect("/");
  }
});

module.exports = router;
