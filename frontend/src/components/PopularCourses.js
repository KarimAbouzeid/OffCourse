import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";
import "../css/herobanner.css";

function PopularCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/courses/")
      .then((res) => setCourses(res.data.courses))
      .then(console.log(courses))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2 style={{ textAlign: "left", fontSize: "30px" }}>
        Recommended for you:
      </h2>
      <div className="popularCourses-container">
        {courses.slice(0, 5).map((course, index) => (
          <div key={index}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCourses;
