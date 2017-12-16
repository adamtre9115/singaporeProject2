// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the quotess
  app.get("/api/quotes", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.quotes.findAll({}).then(function (quotes_db) {
      // We have access to the quotess as an argument inside of the callback function
      res.json(quotes_db);
    });
  });

  // POST route for saving a new Quotes
  app.post("/api/quotes", function (req, res) {
    console.log(req.body);
    db.quotes.create({
        text: req.body.text,
        complete: req.body.complete
      })
      .then(function (quotes_db) {
        res.json(quotes_db);
      });
  });

  // DELETE route for deleting quotess. We can get the id of the quotes to be deleted from
  // req.params.id
  app.delete("/api/quotes/:id", function (req, res) {
    // We just have to specify which quotes we want to destroy with "where"
    db.quotes.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (quotes_db) {
      res.json(quotes_db);
    });

  });

  // PUT route for updating quotes. We can get the updated quotes data from req.body
  app.put("/api/quotes", function (req, res) {

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.quotes.update({
        text: req.body.text,
        complete: req.body.complete
      }, {
        where: {
          id: req.body.id
        }
      }).then(function (quotes_db) {
        res.json(quotes_db);
      })
      .catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });
};