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
} = require("../controller/courseController");

// Get All Courses
router.get("/", getAllCourses);

// Create a Course
router.post("/", createCourse);

// Search Courses
router.post("/search", searchAllCourses);

// Filter All Courses By Price
router.post("/filter", filterAllCoursesByPrice);

// Filter All Courses By Rating and/or Subject
router.post("/filterRating", filterAllCoursesBySubjectRating);

// Get Instructor Courses
router.get("/:id", getInstructorCourses);

// Search Instructor Courses
router.post("/search/:id", searchInstructorCourses);

// Filter Instructor Courses By Price and/or Subject
router.post("/filterSubjectPrice/:id", filterInstructorCoursesBySubjectPrice);

module.exports = router;
