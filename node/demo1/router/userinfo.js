const express = require("express");
const Router = express.Router();
const db = require("../module/db");

Router.post("/signin", (req, res) => {
  const body = req.body;
  const email = body.email;
  const pass = body.password;
  db.Signup.findOne({ email: email, password: pass })
    .then((result) => {
      //res.send({ result });
      if (!result) {
        res.status(500).json({
          message: "User not found",
        });
      }
      if (result.email && result.password) {
        res.status(500).json({ result, message: "User found" });
      }
    })
    .catch((err) => {
      res.send("err..");
    });
});

Router.post("/", (req, res) => {
  //   res.send("ssssssssss");
  const body = req.body;
  const id = body.id;
  //console.log("yygggy", id);
  db.Signup.findById({ _id: id })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log("err");
    });
});

Router.post("/useredit", (req, res) => {
  const myquery = { email: "a@gmail.com" };
  const newvalues = { $set: { name: "test" } };

  db.Signup.updateOne(myquery, newvalues, function (err, res) {
    if (err) throw err;
    db.Signup.findOne({ email: "a@gmail.com" }).then((result) =>
      console.log(result)
    );
    // console.log("1 document updated", res);
  });
});

module.exports = Router;
