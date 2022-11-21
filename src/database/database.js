import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "EmployeeCentralDB",
  "postgres",
  "admin",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
