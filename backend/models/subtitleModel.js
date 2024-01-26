const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subtitleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  videoURL: {
    type: String,
    required: false,
  },
  descriptionOfVideo: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Subtitle", subtitleSchema);
