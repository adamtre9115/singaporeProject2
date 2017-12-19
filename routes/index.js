var express = require('express');
var router = express.Router();
var db = require('../models/index');
var schedule = require("node-schedule");
const request = require("request");
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
  let message = req.body.message;
  let number = req.body.phoneNum;
  let time = req.body.time.split(':'); // capture the time from the client and split it by hour & min
  let hour = time[0]; // hour is equal to the first half of the split array
  let min = time[1]; // min is equal to the second half of the split array

  // schedule the message to be sent at the captured time
  var j = schedule.scheduleJob({
    hour: hour,
    minute: min
  }, function () {
    console.log("It worked!");
    var accountSid = 'ACd5de8965aeec23e5c026e0c1a9e2cb1d'; // Your Account SID from www.twilio.com/console
    var authToken = '0ca4c9f851a87c2f55b30f4515309f03'; // Your Auth Token from www.twilio.com/console
    var twilio = require('twilio');
    var client = new twilio(accountSid, authToken);

    client.messages.create({
        body: message,
        to: '+1' + number, // Text this number
        from: '+17045869305', // From a valid Twilio number
      })
      .then((message) => console.log(message.sid), console.log("yessir"));
    // res.redirect("main");
  });
});




router.post('/twilio/rand', function (req, res, next) {
  let number = req.body.phoneNum
  let time = req.body.time.split(':'); // capture the time from the client and split it by hour & min
  let hour = time[0]; // hour is equal to the first half of the split array
  let min = time[1]; // min is equal to the second half of the split array

  // schedule the message to be sent at the captured time
  var j = schedule.scheduleJob({
    hour: hour,
    minute: min
  }, function () {
    console.log("It worked!");

    // random quote happens asynchronously and is passed into twilio api
    let randomQuote = (cb) => {
      request("https://random-quote-generator.herokuapp.com/api/quotes/random", (error, response, body) => {
        let quote = JSON.parse(body);
        console.log(quote.quote)

        cb(quote.quote)

      });
    }
    randomQuote(function (data) {

      // quote is then passed into twilio api and sent as text
      console.log(data)
      var accountSid = 'ACd5de8965aeec23e5c026e0c1a9e2cb1d'; // Your Account SID from www.twilio.com/console
      var authToken = '0ca4c9f851a87c2f55b30f4515309f03'; // Your Auth Token from www.twilio.com/console
      var twilio = require('twilio');
      var client = new twilio(accountSid, authToken);

      client.messages.create({
        body: data,
        to: '+1' + number, // Text this number
        from: '+17045869305', // From a valid Twilio number
      }).then((data) => {
        console.log(data.sid)
        res.json({
          'hello': data.sid
        });
      })

    })

  })

});

module.exports = router;