const express = require("express");
const router = express.Router();
const {
  rateInstructor,
  rateCourse,
  changeMyPassword,
} = require("../controller/traineeController");

// Trainee rates an instructor
router.post("/rateInstructor", rateInstructor);

// Trainee rates a course
router.post("/rateCourse", rateCourse);

// Trainee changes password
router.post("/changeMyPassword", changeMyPassword);

module.exports = router;
