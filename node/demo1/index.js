const express = require("express");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
var cors = require("cors");
app.use(cors());
require("./module/db");

app.get("/cors", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

const login = require("./router/login");
const signup = require("./router/signup");
const userinfo = require("./router/userinfo");

app.use("/login", login);
app.use("/signup", signup);
app.use("/userinfo", userinfo);

app.listen("3005");
