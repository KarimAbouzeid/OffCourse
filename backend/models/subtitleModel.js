const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subtitleSchema = new Schema({
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  videoURL: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Subtitle", subtitleSchema);
