const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
    token: String,
  },
  { timestamps: true },
);

const model = mongoose.model("user", schema);

module.exports = model;
