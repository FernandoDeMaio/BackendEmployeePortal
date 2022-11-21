const employeeAdapter = require  ("../adapters/employee.Adapter.js");


exports.getAllEmployeeController = (req, res) => {
    console.log("getAllEmployeeController");

    employeeAdapter.getAllEmployeeAdapter(
        (value, status)=>{
            res.status(status).send(value);
        }, 
        (err, status)=>{
            res.status(status).send(err);
        })
}

exports.createEmployeeController = (req, res) => {
    
    employeeAdapter.createEmployeeAdapter(
        req.body,
    (value, status)=>{
        res.status(status).send(value);
    }, 
    (err, status)=>{
        res.status(status).send(err);
    })
}

