import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Gender = sequelize.define("gender", {
  idGender: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  genderDescription: {
    type: DataTypes.STRING,
  }
});
