const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  titre: {
    type: String,
    require: true,
  },
  resume: {
    type: String,
    require: true,
  },
  difficulte: {
    type: String,
    require: true,
  },
  niveau: {
    type: String,
    require: true,
  },
  matier: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
},{ timestamps: true });

module.exports = mongoose.model("course", courseSchema);
