// const Sequelize = require("sequelize");
// const bycrypt = require("bcrypt-nodejs");
// const connection = require("../config/config.json");


module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("addedUsers", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    return User;
};