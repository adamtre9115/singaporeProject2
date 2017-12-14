// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the Quotess
  app.get("/api/quotes", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Quotes.findAll({}).then(function(dbQuotes) {
      // We have access to the Quotess as an argument inside of the callback function
      res.json(dbQuotes);
    });
  });

  // POST route for saving a new Quotes
  app.post("/api/quotes", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Quotes.create({
      text: req.body.text,
      //complete: req.body.complete
    }).then(function(dbQuotes) {
      // We have access to the new Quotes as an argument inside of the callback function
      res.json(dbQuotes);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.json(err);
    });
  });

  // DELETE route for deleting Quotess. We can get the id of the Quotes to be deleted from
  // req.params.id
  app.delete("/api/quotes/:id", function(req, res) {
    // We just have to specify which Quotes we want to destroy with "where"
    db.Quotes.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbQuotes) {
      res.json(dbQuotes);
    });

  });

  // PUT route for updating Quotes. We can get the updated Quotes data from req.body
  app.put("/api/quotes", function(req, res) {

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Quotes.update({
      text: req.body.text,
      //complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbQuotes) {
      res.json(dbQuotes);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.json(err);
    });
  });
};
