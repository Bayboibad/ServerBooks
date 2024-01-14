var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const admin = req.session.admin;

  if (admin) {
    
    //console.log(admin);
    res.render("comic", {title:"comic"});
  } else {
    console.log("No librarian in session"); // Kiểm tra thông tin người dùng trong console
    res.redirect("/"); // Chưa đăng nhập, chuyển hướng về trang đăng nhập
  }
});

module.exports = router;
