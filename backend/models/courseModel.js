const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseModel = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitles: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    summary: {
      type: String,
    },
  },
  { timestamps: true }
);
