// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
// var db = require("../models");

// // Routes
// // =============================================================
// module.exports = function (app) {

//     // GET route for getting all of the users
//     // app.get("/api/users", function (req, res) {
//     //     // findAll returns all entries for a table when used with no options
//     //     db.users.findAll({}).then(function (quote_db) {
//     //         // We have access to the users as an argument inside of the callback function
//     //         res.json(quote_db);
//     //     });
//     // });

//     // POST route for saving a new quote
//     app.post("/createUser", function (req, res) {
//         // create takes an argument of an object describing the item we want to
//         // insert into our table. In this case we just we pass in an object with a text
//         // and complete property (req.body)
//         db.users.create({
//                 userName: req.body.userName,
//                 complete: req.body.complete
//             }).then(function (quote_db) {
//                 // We have access to the new quote as an argument inside of the callback function
//                 res.json(quote_db);
//             })
//             .catch(function (err) {
//                 // Whenever a validation or flag fails, an error is thrown
//                 // We can "catch" the error to prevent it from being "thrown", which could crash our node app
//                 res.json(err);
//             });

//     });

// };