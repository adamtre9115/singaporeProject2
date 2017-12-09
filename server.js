// Dependencies
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var port = process.env.PORT || 3000;

// set bodyParser for further use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// set up listener
app.listen(port, function () {
    console.log("I'm listening on " + port);
})