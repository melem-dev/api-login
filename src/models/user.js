const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const schema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    password: String,
    email: { type: String, unique: true },
    token: String,
  },
  { timestamps: true },
);

schema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = bcrypt.hashSync(this.password, 8);
  next();
});

schema.pre("findByIdAndUpdate", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = bcrypt.hashSync(this.password, 8);
  next();
});

const model = mongoose.model("user", schema);

module.exports = model;
