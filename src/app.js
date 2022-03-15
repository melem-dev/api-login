const express = require("express");
const { log } = require("./utils");

const app = express();

app.listen(3000, () => log("Server is running"));
