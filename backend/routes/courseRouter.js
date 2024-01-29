const express = require("express");
const router = express.Router();
const {
  getAllCourses,
  createCourse,
  getInstructorCourses,
  searchAllCourses,
  searchInstructorCourses,
  filterAllCoursesByPrice,
  filterAllCoursesBySubjectRating,
  filterInstructorCoursesBySubjectPrice,
  uploadCoursePreview,
  uploadSubtitleVideo,
  createExercise,
  getAllSubjects,
} = require("../controller/courseController");

// Get All Courses
router.get("/", getAllCourses);

// Create a Course
router.post("/", createCourse);

// Search Courses
router.post("/search", searchAllCourses);

// Filter All Courses By Price
router.post("/filter/:price", filterAllCoursesByPrice);

// Filter All Courses By Rating and/or Subject
router.get("/filterRating/:rating?/:subject?", filterAllCoursesBySubjectRating);

// Search Instructor Courses
router.post("/search/:id", searchInstructorCourses);

// Filter Instructor Courses By Price and/or Subject
router.post("/filterSubjectPrice/:id", filterInstructorCoursesBySubjectPrice);

// Upload Course Preview
router.post("/uploadCoursePreview", uploadCoursePreview);

// Upload Subtitle Video and Description
router.post("/uploadSubtitleVideo", uploadSubtitleVideo);

// Create Exercise and MCQ as well as setting the answers
router.post("/createExercise", createExercise);

// Get All subjects and there count
router.get("/getAllSubjects", getAllSubjects);

// Get Instructor Courses
router.get("/:id", getInstructorCourses);

module.exports = router;
