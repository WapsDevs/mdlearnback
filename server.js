const express = require("express");
require("dotenv").config();
const cors = require("cors");
const port = 5000;
const app = express();
app.use(cors());
require("./config/db");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", require("./routes/course.route"));
app.listen(port, "0.0.0.0", () =>
  console.log("le serveur a demarre aux port " + port)
);
