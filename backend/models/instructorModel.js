const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instructorModel = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  minibiography: {
    type: String,
    default: "",
  },

  email: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Instructor", instructorModel);
