var express = require('express');
var router = express.Router();
var db = require('../models/index');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('pages/index', {
    title: 'Express'
  });
});

// mock registration page
router.get('/register', function (req, res, next) {
  res.render('register');
});

// This = Page #1 in design - Three choice boxes only
router.get('/main', function (req, res, next) {
  res.render('pages/main');
});
// Route to blank page for Personal page to Dynamically loaded by the Dale
router.get('/personal', function (req, res, next) {
  res.render('pages/personal');
});

//not sure if this is important
router.post('/createUser', function (req, res, next) {
  console.log(req.body);
  db.users.create({
      userName: req.body.email,
      password: req.body.password
    }).then(function (quote_db) {
      // We have access to the new quote as an argument inside of the callback function
      res.json(quote_db);
    })
    .catch(function (err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.json(err);
    });
  // redirect to other page
  res.redirect("main");
});

module.exports = router;