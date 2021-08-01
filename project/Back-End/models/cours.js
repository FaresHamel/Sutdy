const mongoose = require("../config/db");


const courses = new mongoose.Schema({
  description: {
    required: true,
    type: String,
  },
  filename: {
    required: true,
    type: String,
  },
  module: {
    required: true,
    type: String,
  },
  createdAt: {
    default: Date.now(),
    type: Date,
  },
});

module.exports = mongoose.model("courses", courses);
