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

schema.pre("save", (next) => {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = bcrypt.hashSync(this.password, 8);
  next();
});

schema.pre("findByIdAndUpdate", (next) => {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = bcrypt.hashSync(this.password, 8);
  next();
});

const model = mongoose.model("user", schema);

module.exports = model;
