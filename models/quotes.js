module.exports = function (sequelize, DataTypes) {
    var quotes = sequelize.define("quotes", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        allQuotes: {
            type: DataTypes.TEXT
        }
    });
    return quotes;
}