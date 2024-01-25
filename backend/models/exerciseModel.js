const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  subtitleID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  questions: {
    type: [String],
    required: true,
  },
  choices: {
    type: [[String]],
    required: true,
  },
  correctAnswers: {
    type: [String],
    required: true,
  },
});
module.exports = mongoose.model("Exercise", exerciseSchema);
