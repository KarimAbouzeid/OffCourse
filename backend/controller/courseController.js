const Course = require("../models/courseModel");
const Instructor = require("../models/instructorModel");
const Subtitle = require("../models/subtitleModel");
const RatingCourse = require("../models/ratingCourseModel");
const Exercise = require("../models/exerciseModel");

const getAllCourses = async (req, res) => {
  try {
    let courses = await Course.find();

    const coursesWithRatingsPromise = courses.map(async (course) => {
      const ratingCourse = await RatingCourse.findOne({ courseID: course._id });

      // console.log({ ...course._doc, ...ratingCourse._doc });
      return { ...course._doc, ...ratingCourse._doc };
    });

    const coursesWithRatings = await Promise.all(coursesWithRatingsPromise);
    console.log(coursesWithRatings);

    res.status(200).json({ courses: coursesWithRatings });
  } catch (error) {
    res.status(400).json({ message: "Error fetching the courses" });
  }
};

const createCourse = async (req, res) => {
  try {
    const { title, subtitles, price, summary, instructor, subject } = req.body;

    const coursesExists = await Course.find({ title: title });

    if (coursesExists.length > 0) {
      return res.status(200).json({ message: "Course already exists" });
    }

    const instructorExists = await Instructor.findOne({ username: instructor });

    if (!instructorExists) {
      return res.status(400).json({ message: "Instructor doesn't exist" });
    }
    const course = await Course.create({
      title: title,
      price: price,
      summary: summary,
      subject: subject,
      instructor: instructor,
      rating: 0,
    });

    const ratingCourse = await RatingCourse.create({
      rating: 0,
      courseID: course._id,
    });

    const createSubtitles = subtitles.map(async (subtitle) => {
      const newSubtitle = await Subtitle.create({
        title: subtitle,
        courseID: course._id,
      });
    });

    const createdSubtitles = await Promise.all(createSubtitles);
    res.status(200).json({ course: course, subtitles: createdSubtitles });
  } catch (error) {
    res.status(400).json({ message: "Error creating the course" });
  }
};

const getInstructorCourses = async (req, res) => {
  const id = req.params["id"];
  try {
    const instructor = await Instructor.findOne({ _id: id });
    if (!instructor) {
      return res.status(400).json({ message: "The instructor doesn't exist" });
    }
    const courses = await Course.find({ instructor: instructor.username });
    res.status(200).json({ courses: courses });
  } catch (error) {
    res.status(400).json({ message: "Error fetching the courses" });
  }
};

const searchAllCourses = async (req, res) => {
  const { search } = req.body;
  try {
    const courses = await Course.find({});
    const result = courses.filter((course) => searchCourse(course, search));
    res.status(200).json({ courses: result });
  } catch (error) {
    res.status(400).json({ message: "Error fetching the courses" });
  }
};

const filterAllCoursesByPrice = async (req, res) => {
  const { price } = req.params;
  try {
    const courses = await Course.find({});
    const result = courses.filter((course) => {
      return course.price <= price;
    });
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(400).json({ message: "Error filtering the courses" });
  }
};

const filterAllCoursesBySubjectRating = async (req, res) => {
  const { subject, rating } = req.params;
  try {
    const courses = await Course.find({});
    const coursesWithRatingsPromise = courses.map(async (course) => {
      const ratingCourse = await RatingCourse.findOne({ courseID: course._id });

      // console.log({ ...course._doc, ...ratingCourse._doc });
      return { ...course._doc, ...ratingCourse._doc };
    });

    const coursesWithRatings = await Promise.all(coursesWithRatingsPromise);

    const result = coursesWithRatings.filter((course) => {
      return (
        (subject && course.subject.includes(subject)) ||
        (rating >= 0 && course.rating >= rating)
      );
    });

    res.status(200).json({ courses: result });
  } catch (error) {
    res.status(400).json({ message: "Error filtering the courses" });
  }
};

const filterInstructorCoursesBySubjectPrice = async (req, res) => {
  const { subject, price } = req.body;
  const id = req.params["id"];

  try {
    const instructor = await Instructor.findOne({ _id: id });
    const courses = await Course.find({ instructor: instructor.username });
    const result = courses.filter((course) => {
      return (
        (subject && course.subject.includes(subject)) ||
        (price >= 0 && course.price <= price)
      );
    });
    res.status(200).json({ courses: result });
  } catch (error) {
    res.status(400).json({ message: "Error filtering the courses" });
  }
};

const searchInstructorCourses = async (req, res) => {
  const { search } = req.body;
  const id = req.params["id"];
  try {
    const instructor = await Instructor.findOne({ _id: id });
    if (!instructor) {
      return res.status(400).json({ message: "No such instructor exists" });
    }
    const courses = await Course.find({ instructor: instructor.username });
    const result = courses.filter((course) => searchCourse(course, search));
    res.status(200).json({ courses: result });
  } catch (error) {
    res.status(400).json({ message: "Error fetching the courses" });
  }
};

// upload Youtube link to preview the course
const uploadCoursePreview = async (req, res) => {
  const { courseID, link } = req.body;

  try {
    const course = await Course.findOneAndUpdate(
      { _id: courseID },
      { coursePreview: link }
    );
    res.status(200).json({ course: course });
  } catch (error) {
    res.status(400).json({ message: "Couldn't upload course preview" });
  }
};

// upload Youtube link to preview the "subtitle"
const uploadSubtitleVideo = async (req, res) => {
  const { subtitleID, link, description } = req.body;
  try {
    const subtitle = await Subtitle.findOneAndUpdate(
      { _id: subtitleID },
      { videoURL: link, descriptionOfVideo: description }
    );
    res.status(200).json({ subtitle: subtitle });
  } catch (error) {
    res
      .status(400)
      .json("Error uploading the video and description for the subtitle!");
  }
};

// create Exercise (htkon s3ba fel frontend)
const createExercise = async (req, res) => {
  const { subtitleID, questions, choices, correctAnswers } = req.body;

  try {
    const exercise = await Exercise.create({
      subtitleID: subtitleID,
      questions: questions,
      choices: choices,
      correctAnswers: correctAnswers,
    });
    res.status(200).json({ exercise: exercise });
  } catch (error) {
    res.status(400).json({ message: "Can't create exercise" });
  }
};

// DONOT CHANGE ITS PLACE, HELPER FUNCTION
const searchCourse = (course, search) => {
  console.log(search);
  return (
    course.title.includes(search) ||
    course.subject.includes(search) ||
    course.instructor.includes(search)
  );
};
module.exports = {
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
};
