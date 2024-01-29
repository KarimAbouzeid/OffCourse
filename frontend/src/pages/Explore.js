import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import NavbarGuest from "../components/NavbarGuest";
import "../css/explore.css";
import CourseCard from "../components/CourseCard";
import LongCourseCard from "../components/LongCourseCard";
import "../css/longcard.css";

function Explore() {
  const [courses, setCourses] = useState([]);
  const [rating, setRating] = useState(0);
  const [subject, setSubject] = useState("");
  const [allSubjects, setAllSubjects] = useState([]);
  const [sort, setSort] = useState(0);

  useEffect(() => {
    let url = `http://localhost:4000/api/courses/filterRating/${rating}`;
    if (subject) url += `/${subject}`;
    axios
      .get(url)
      .then((res) => {
        setCourses(res.data.courses);
      })
      .catch((err) => console.log(err));
  }, [subject, rating]);

  useEffect(() => {
    let sortedCourses = [...courses];
    switch (sort) {
      case 0:
        sortedCourses.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;
      case 1:
        sortedCourses.sort((a, b) => b.rating - a.rating);
        break;
      case 2:
        sortedCourses.sort((a, b) => a.price - b.price);
        break;
      case 3:
        sortedCourses.sort((a, b) => b.price - a.price);
        break;
    }
    setCourses(sortedCourses);
  }, [sort, courses]);

  useEffect(() => {
    let url = `http://localhost:4000/api/courses/getAllSubjects`;
    axios
      .get(url)
      .then((res) => setAllSubjects([...res.data.subjectsCount]))
      .then((res) => console.log(res.data.subjectsCount))
      .catch((err) => console.log(err));
  }, []);

  const handleSort = (value) => {
    setSort(value);
  };

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubjectChange = (value) => setSubject(value);

  return (
    <div>
      <NavbarGuest />
      <div className="explore-container">
        <div className="container-sidebar">
          <Sidebar
            allSubjects={allSubjects}
            subject={subject}
            handleSubjectChange={handleSubjectChange}
            handleSort={handleSort}
            handleRating={handleRating}
          />
        </div>
        <div>
          {courses.map((course, index) => (
            <div key={index} className="longcard-container">
              <LongCourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
