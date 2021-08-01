const mongose = require("../config/db");

const users = new mongose.Schema({
  _id: mongose.Types.ObjectId,

  username: {
    type: String,
    required: true,
  },

  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },
  numberPhon: {
    type: String,
    required: true,
    // min: 10,
  },
  role: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  dateInscription: {
    type: Date,
    required: true,
  },
  passwrodEncrypt: {
    type: String,
    required: true,
  },
});

module.exports = mongose.model("users", users);
