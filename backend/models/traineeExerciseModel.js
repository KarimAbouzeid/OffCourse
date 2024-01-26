const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const traineeExerciseSchema = new Schema({
  traineeUsername: {
    type: String,
    required: true,
  },
  exerciseID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  traineeAnswers: {
    type: [String],
    required: true,
  },
  traineeGrade: {
    type: Number,
  },
  traineeIncorrectAnswers: {
    question: {
      type: String,
    },
    traineeAnswer: {
      type: String,
    },
    correctAnswer: {
      type: String,
    },
  },
});

module.exports = mongoose.model("TraineeExercise", traineeExerciseSchema);
