const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingCourseSchema = new Schema({
  rating: {
    type: Number,
    default: 0,
  },
  courseID: {
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

module.exports = mongoose.model("RatingCourse", ratingCourseSchema);
