const { Router } = require("express");
const app = Router();

const Public = require("./public");
app.use(Public);

const Private = require("./private");
const WAuth = require("../middlewares/auth");
app.use("/admin", WAuth, Private);

module.exports = app;
