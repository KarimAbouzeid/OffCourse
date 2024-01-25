const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingInstructorSchema = new Schema({
  rating: {
    type: Number,
    default: 0,
  },
  instructorID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  usersThatRated: [
    {
      user: { type: String },
      rating: { type: Number },
    },
  ],
  usersThatReviewed: [
    {
      user: { type: String },
      review: { type: String },
    },
  ],
});

module.exports = mongoose.model("RatingInstructor", ratingInstructorSchema);
