'use strict';

var path = require('path');
const Sequelize = require("sequelize");
const bycrypt = require("bcrypt-nodejs");
const connection = require("../config/config.json");
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
var db = {};

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}


db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.quotes = require("./quotes.js")(sequelize, Sequelize);
db.users = require("./user.js")(sequelize, Sequelize);


// relations
// db.quotes.belongsTo(db.users, {
//     foreignKey: "userName",
//     // sourceKey: "user_id"
// });
db.users.hasMany(db.quotes, {
    as: "allQuotes",
    foreignKey: "userId"
});



module.exports = db;