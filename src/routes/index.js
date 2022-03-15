const { Router } = require("express");
const app = Router();

const Public = require("./public");
app.use(Public);

const Private = require("./private");
app.use("/admin", Private);

module.exports = app;
