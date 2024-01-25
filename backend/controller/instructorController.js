const Instructor = require("../models/instructorModel");
const User = require("../models/userModel");
const RatingInstructor = require("../models/ratingInstructorModel");
const Course = require("../models/courseModel");
const RatingCourse = require("../models/ratingCourseModel");

const changeEmailMiniBiography = async (req, res) => {
  const { email, minibiography, username } = req.body;

  try {
    let instructor = await Instructor.findOne({ username: username });
    if (!instructor) {
      return res.status(400).json({ message: "Instructor not found!" });
    }
    if (email) {
      const instructorWithThisEmail = await Instructor.findOne({
        email: email,
      });
      if (
        !instructorWithThisEmail ||
        instructorWithThisEmail.username == instructor.username
      ) {
        instructor = await Instructor.findOneAndUpdate(
          { username: username },
          { email: email }
        );
      } else {
        return res
          .status(400)
          .json({ message: "Instructor with this email already exists" });
      }
    }
    if (minibiography) {
      instructor = await Instructor.findOneAndUpdate(
        { username: username },
        { minibiography: minibiography }
      );
    }
    res.status(200).json({ instructor: instructor });
  } catch (error) {
    res.status(400).json({ message: "Error updating the email!" });
  }
};

const viewInstructorRating = async (req, res) => {
  const id = req.params["id"];
  try {
    const ratingInstructor = await RatingInstructor.findOne({
      instructorID: id,
    });
    if (!ratingInstructor) {
      return res.status(404).json({ message: "Instructor not found!" });
    }
    const instructorRatingReview = {
      rating: ratingInstructor.rating,
      reviews: ratingInstructor.usersThatReviewed,
    };
    res.status(200).json(instructorRatingReview);
  } catch (error) {
    res.status(400).json({ message: "Error viewing my rating!" });
  }
};

const viewCourseRating = async (req, res) => {
  const id = req.params["id"];
  try {
    const instructor = await Instructor.findOne({ _id: id });
    if (!instructor) {
      return res.status(404).json({ message: "Instructor not found!" });
    }
    const instructorUsername = instructor.username;

    // an array of all instructor courses
    const instructorCourses = await Course.find({
      instructor: instructorUsername,
    });

    let coursesRatingsandReviews = [];
    for (let i = 0; i < instructorCourses.length; i++) {
      let ratingCourse = await RatingCourse.findOne({
        courseID: instructorCourses[i].id,
      });

      let courseRatingReview = {
        course: instructorCourses[i].title,
        rating: ratingCourse.rating,
        reviews: ratingCourse.usersThatReviewed,
      };
      coursesRatingsandReviews = [
        courseRatingReview,
        ...coursesRatingsandReviews,
      ];
    }

    res.status(200).json(coursesRatingsandReviews);
  } catch (error) {
    res.status(400).json({ message: "Error viewing my courses' rating!" });
  }
};

const changeMyPassword = async (req, res) => {
  const { username, password } = req.body;
  try {
    const instructor = await Instructor.findOneAndUpdate(
      { username: username },
      { password: password }
    );
    if (!instructor) {
      return res.status(400).json({ message: "Instructor not found!" });
    }
    const user = await User.findOneAndUpdate(
      { username: username },
      { password: password }
    );
    res.status(200).json({ instructor: instructor });
  } catch (error) {
    res.status(400).json({ message: "Error changing password!" });
  }
};

module.exports = {
  changeEmailMiniBiography,
  viewInstructorRating,
  viewCourseRating,
  changeMyPassword,
};
