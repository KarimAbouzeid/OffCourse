const IndividualTrainee = require("../models/individualTraineeModel");
const CorporateTrainee = require("../models/corporateTraineeModel");
const Instructor = require("../models/instructorModel");
const Course = require("../models/courseModel");
const RatingCourse = require("../models/ratingCourseModel");
const RatingInstructor = require("../models/ratingInstructorModel");
const User = require("../models/userModel");

const rateInstructor = async (req, res) => {
  const { username, instructorID, rating } = req.body;
  try {
    const individualTrainee = await IndividualTrainee.findOne({
      username: username,
    });
    const corporateTrainee = await CorporateTrainee.findOne({
      username: username,
    });
    if (!individualTrainee && !corporateTrainee) {
      return res.status(400).json({ message: "Trainee doesn't exist!" });
    }
    const instructor = await Instructor.findOne({
      _id: instructorID,
    });
    if (!instructor) {
      return res.status(400).json({ message: "Instructor doesn't exist!" });
    }
    const ratingInstructor = await RatingInstructor.findOne({
      instructorID: instructorID,
    });

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: "Rating range is not correct!" });
    }

    let usersThatRated = ratingInstructor.usersThatRated;

    const userRating = usersThatRated.filter((rating) => {
      return rating.user == username;
    });

    if (userRating.length > 0) {
      const userRatingIndex = usersThatRated.findIndex(
        (rating) => rating.user == username
      );
      usersThatRated[userRatingIndex].rating = rating;
    } else {
      const userRating = { user: username, rating: rating };
      usersThatRated = [userRating, ...usersThatRated];
      console.log(usersThatRated);
    }
    let newTotalRating = 0;
    for (let i = 0; i < usersThatRated.length; i++) {
      newTotalRating += usersThatRated[i].rating;
    }
    const newRating = (newTotalRating / usersThatRated.length).toFixed(2);
    console.log(newRating);
    const updatedRating = await RatingInstructor.findOneAndUpdate(
      { instructorID: instructorID },
      { rating: newRating, usersThatRated: usersThatRated }
    );
    res.status(200).json({ previous_rating: updatedRating });
  } catch (error) {
    res.status(400).json({ message: "Error rating the instructor" });
  }
};

const rateCourse = async (req, res) => {
  const { username, courseID, rating } = req.body;
  try {
    const individualTrainee = await IndividualTrainee.findOne({
      username: username,
    });
    const corporateTrainee = await CorporateTrainee.findOne({
      username: username,
    });
    if (!individualTrainee && !corporateTrainee) {
      return res.status(400).json({ message: "Trainee doesn't exist!" });
    }
    const course = await Course.findOne({
      _id: courseID,
    });
    if (!course) {
      return res.status(400).json({ message: "Course doesn't exist!" });
    }
    const ratingCourse = await RatingCourse.findOne({
      courseID: courseID,
    });
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: "Rating range is not correct!" });
    }

    let usersThatRated = ratingCourse.usersThatRated;

    const userRating = usersThatRated.filter((rating) => {
      return rating.user == username;
    });

    if (userRating.length > 0) {
      const userRatingIndex = usersThatRated.findIndex(
        (rating) => rating.user == username
      );
      usersThatRated[userRatingIndex].rating = rating;
    } else {
      const userRating = { user: username, rating: rating };
      usersThatRated = [userRating, ...usersThatRated];
    }
    let newTotalRating = 0;
    for (let i = 0; i < usersThatRated.length; i++) {
      newTotalRating += usersThatRated[i].rating;
    }
    const newRating = (newTotalRating / usersThatRated.length).toFixed(2);
    console.log(newRating);
    const updatedRating = await RatingCourse.findOneAndUpdate(
      { courseID: courseID },
      { rating: newRating, usersThatRated: usersThatRated }
    );
    res.status(200).json({ previous_rating: updatedRating });
  } catch (error) {
    res.status(400).json({ message: "Error rating the course" });
  }
};

const changeMyPassword = async (req, res) => {
  const { username, password } = req.body;
  try {
    const corporateTrainee = await CorporateTrainee.findOneAndUpdate(
      { username: username },
      { password: password }
    );
    if (!corporateTrainee) {
      const individualTrainee = await IndividualTrainee.findOneAndUpdate(
        { username: username },
        { password: password }
      );
      if (!individualTrainee) {
        return res.status(400).json({ message: "Trainee not found!" });
      }
    }
    const user = await User.findOneAndUpdate(
      { username: username },
      { password: password }
    );
    res.status(200).json({ trainee: user });
  } catch (error) {
    res.status(400).json({ message: "Error changing password!" });
  }
};

module.exports = {
  rateInstructor,
  rateCourse,
  changeMyPassword,
};
