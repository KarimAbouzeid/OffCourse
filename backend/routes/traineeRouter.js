const express = require("express");
const router = express.Router();
const {
  rateInstructor,
  rateCourse,
  changeMyPassword,
  submitExercise,
  viewGrade,
  viewIncorrectAnswers,
} = require("../controller/traineeController");

// Trainee rates an instructor
router.post("/rateInstructor", rateInstructor);

// Trainee rates a course
router.post("/rateCourse", rateCourse);

// Trainee changes password
router.post("/changeMyPassword", changeMyPassword);

// Submit exercise
router.post("/submit", submitExercise);

// View Exercise Grade
router.get("/viewGrade/:traineeUsername/:exerciseID", viewGrade);

// View Incorrect Answers
router.get(
  "/viewIncorrectAnswers/:traineeUsername/:exerciseID",
  viewIncorrectAnswers
);
module.exports = router;
