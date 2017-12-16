var express = require('express');
var router = express.Router();
var db = require('../models/index');
// var client = require('../controller/appController');
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
      userName: req.body.userName,
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

router.post('/twilio', function (req, res, next) {
  var randQuote = require("../controller/appController.js")
  var accountSid = 'ACd5de8965aeec23e5c026e0c1a9e2cb1d'; // Your Account SID from www.twilio.com/console
  var authToken = '0ca4c9f851a87c2f55b30f4515309f03'; // Your Auth Token from www.twilio.com/console
  console.log(randQuote);
  var twilio = require('twilio');
  var client = new twilio(accountSid, authToken);
  // client.messages.create({
  //     body: req.body.message,
  //     to: '+1' + req.body.phoneNum, // Text this number
  //     from: '+17045869305', // From a valid Twilio number
  //   })
  //   .then((message) => console.log(message.sid), console.log("yessir"));
  res.redirect("main");
});

module.exports = router;