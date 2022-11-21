const Sequelize = require ("sequelize");

exports.sequelize = new Sequelize(
  "EmployeeCentralDB",
  "postgres",
  "admin",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
