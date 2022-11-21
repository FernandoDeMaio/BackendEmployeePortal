const employeeRepository = require("../repository/employee.Repository.js");

exports.getAllEmployeeAdapter = (success, error) => {
  console.log("getAllEmployeeController");
};

exports.createEmployeeAdapter = (body, success, error) => {
  console.log("createEmployeeAdapter");

  employeeRepository.createEmployeeRepository(body)
    .then((value) => {
      success(value, 200);
    })
    .catch((err) => {
        console.log(err)
      error(err, 400);
    });
};
