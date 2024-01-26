const express = require("express");
const router = express.Router();
const {
  changeEmailMiniBiography,
  viewInstructorRating,
  viewCourseRating,
  changeMyPassword,
} = require("../controller/instructorController");

//Edit email and minibiography
router.post("/changeEmailMinibiography", changeEmailMiniBiography);

// Instructor views his own rating
router.get("/viewMyRating/:id", viewInstructorRating);

// Instructor views his own rating
router.get("/viewMyCoursesRating/:id", viewCourseRating);

// Instructor changes password
router.post("/changeMyPassword", changeMyPassword);

// Instructor creates a test

module.exports = router;
