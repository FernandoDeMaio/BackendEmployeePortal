"use strict";
const express = require("express");
const router = express.Router();

const employee = require("./employee.Routes.js");



router.use("/index", (_, res) => { res.send(`NodeJS`) });
router.use("/employee", employee)

module.exports = router;
