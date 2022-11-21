const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database.js");
const { Gender }= require("./Masters.model.js");

 const Person = sequelize.define("persons", {
  idPerson: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
  },
  secondName: {
    type: DataTypes.STRING,
  },
  surname: {
    type: DataTypes.STRING,
  },
  dateOfBirth: {
    type: DataTypes.DATE,
  },
  age: {
    type: DataTypes.STRING,
  }
});

Person.belongsTo(Gender,
    {
        foreignKey: {
            name: 'idGender',
            allowNull: true
        }
})

module.exports = Person