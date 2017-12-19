var express = require('express');
var router = express.Router();
var db = require("../models");
var jwt = require('jsonwebtoken');

const SECRET = "supersecretkey";

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/createUser', function (req, res) {
  db.users.findOne({
    where: {
      userName: req.body.username
    }
  }).then((user) => {

    if (!user) {
      return res.status(401).json({
        message: 'User not found'
      });
    }

    if (user.password !== req.body.password) {
      return res.status(401).json({
        message: 'Incorrect password'
      });
    }

    var token = jwt.sign({
      id: user.id
    }, SECRET);

    res.cookie('auth', token, {
      expires: new Date(Date.now() + (86400 * 14 * 1000)),
      maxAge: (86400 * 14 * 1000),
      httpOnly: true,
      secure: false
    });

    res.status(200).json(user);

  })

});

router.get('/logout', function (req, res) {

  res.cookie('auth', '', {
    expires: new Date(0),
    maxAge: 0,
    httpOnly: true,
    secure: false
  });

  res.redirect('/'); // Send back to home page

});


router.get('/profile', authCheck, function (req, res) {

  db.users.findById(req.decoded.id).then((user) => {

    res.status(200).json({
      message: 'YOU ARE AUTHENTICATED AS',
      user: user
    });


  });

});

function authCheck(req, res, next) {

  var token = req.cookies.auth;

  jwt.verify(token, SECRET, function (err, decoded) {

    if (err) {
      return res.status(401).json({
        message: 'Unauthorized'
      });
    }

    req.decoded = decoded;
    next();

  });


}



module.exports = router;