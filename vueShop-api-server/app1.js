const express = require("express");

var app = express();

app.use("/", function (req, res, next) {
  console.log("进入中间件");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, mytoken");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Authorization");
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");

  next();
});

app.use("/a", (req, res) => {
  res.status(200).send("aaabbb");
});

app.listen(1010);
