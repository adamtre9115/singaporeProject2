module.exports = function(sequelize, DataTypes) {
  var Quotes = sequelize.define("quotes", {
    text: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a quote from being entered if it doesn't
      // have a text value
      allowNull: false,
      // len is a validation that checks that our quote is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },
    complete: {
      type: DataTypes.BOOLEAN,
      // defaultValue is a flag that defaults a new todos complete value to false if
      // it isn't supplied one
      defaultValue: false
    }
  });
  return Quotes;
};
