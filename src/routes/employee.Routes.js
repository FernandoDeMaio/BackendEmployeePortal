"use strict";
const express = require("express");
var router = express.Router();
const employeeController = require  ("../controllers/employee.Controller.js");


router.get("/getAllEmployee", employeeController.getAllEmployeeController);
router.post("/createEmployee", employeeController.createEmployeeController);
router.get("/getEmployee/:idPerson");
router.put("/updateEmployee/:idPerson");
router.delete("/deleteEmployee/:idPerson");

module.exports = router;
