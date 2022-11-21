import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Gender } from "./Masters.model.js";

export const Person = sequelize.define("persons", {
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
  maternalLastName: {
    type: DataTypes.STRING,
  },
  dateOfBirth: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.STRING,
  }
});

Person.belongsTo(Gender,
    {
        foreignKey: {
            name: 'idGender',
            allowNull: false
        }
})