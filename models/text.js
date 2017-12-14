var accountSid = 'ACd5de8965aeec23e5c026e0c1a9e2cb1d'; // Your Account SID from www.twilio.com/console
var authToken = 'authToken'; // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
        body: "What's up Tresean!!!",
        to: '+19195237948', // Text this number
        from: '+17045869305' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));

module.exports = client;
