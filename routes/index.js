var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

// mock registration page
router.get('/register', function (req, res, next) {
  res.render('register');
});

router.post('/createUser', function (req, res, next) {
  console.log(req.body);

  // redirect to other page
  res.redirect("index");
});
module.exports = router;