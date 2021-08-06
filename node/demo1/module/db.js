const mongoose = require("mongoose");
//var mongoose = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/test2";

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
const schema = mongoose.Schema({
  name: { type: "string" },
  phone: { type: "string" },
  email: { type: "string" },
  password: { type: "string" },
});
exports.Signup = mongoose.model("Signup", schema);
