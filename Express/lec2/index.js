const express = require("express");
const App = express();

App.get("/", (req, res) => {

  res.send("hello this is home Page "+req.query.name);
});
App.get("/about", (req, res) => {
  res.send("hello this is about Page");
});
App.get("/help", (req, res) => {
  res.send("hello this is help Page");
});

App.listen(3000)