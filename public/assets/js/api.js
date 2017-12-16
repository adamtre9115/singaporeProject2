// // require request npm package
// const request = require("request");

// // pull random quote from quotes api
// var randomQuote = request("https://random-quote-generator.herokuapp.com/api/quotes/random", (error, response, body) => {

//     if (!error && response.statusCode === 200) {

//         var body = JSON.parse(body);
//         console.log(body.quote + " ~ " + body.author);
//     } else {
//         console.log("We have an error with the quotes!");
//     }
// })