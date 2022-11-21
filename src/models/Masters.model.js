const { DataTypes } = require("sequelize");
const{ sequelize } = require("../database/database.js");

exports.Gender = sequelize.define("gender", {
  idGender: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  genderDescription: {
    type: DataTypes.STRING,
  }
});
