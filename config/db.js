const mongoose = require("mongoose");
const monog_url = process.env.MONGO_URI;

mongoose
  .connect(monog_url)
  .then(() => {
    console.log("mongodb connect!");
  })
  .catch((err) => {
    console.log("mongo err :" + err);
  });
