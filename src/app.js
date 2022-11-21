const express = require("express");

const app = express();
const api = require ("./routes/index.Routes.js");


app.set("port", process.env.PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/api", api);

module.exports = app;