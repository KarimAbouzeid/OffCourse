const Course = require("../models/courseModel");
const Instructor = require("../models/instructorModel");

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json({ courses: courses });
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
      subtitles: subtitles,
      price: price,
      summary: summary,
      subject: subject,
      instructor: instructor,
      rating: 0,
    });
    res.status(200).json({ course: course });
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
  const { price } = req.body;
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
  const { subject, rating } = req.body;
  try {
    const courses = await Course.find({});
    const result = courses.filter((course) => {
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
};
