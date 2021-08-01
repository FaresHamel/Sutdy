const mongoose = require("../config/db");

const modules = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  cridit: {
    type: Number,
    required: true,
  },
  filename: {
    required: true,
    type: String,
  },
  coeficient: {
    type: Number,
    required: true,
  },
  cours: {
    type: Number,
  },
  Td: {
    type: Number
  },
  Tp: {
    type: Number,
  },
});

module.exports = mongoose.model("modules", modules);
