const express = require("express");
const cors = require("cors");

if (!process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const routes = require("./routes");
const mongodb = require("./configs/mongoose");
const { log } = require("./utils");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3000, () => log("Server is running"));
