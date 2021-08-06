const express = require("express");
const Router = express.Router();
const db = require("../module/db");

Router.post("/", (req, res) => {
  const signup = new db.Signup(req.body);
  signup
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((Error) => {
      res.send("not saved");
    });
});

Router.get("/", (req, res) => {
  db.Signup.find()
    .then((result) => {
      res.json(result);
    })
    .catch((Error) => {
      res.send("error...");
    });
});

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

Router.post("/log", (req, res) => {
  const body = req.body;
  name = body.name;
  phone = body.phone;
  res.send(name);
});

Router.delete("/", (req, res) => {
  db.Signup.remove({}, (err, result) => {
    if (err) throw err;
    res.send("Collection is deleted! " + result);
  });
});

module.exports = Router;
