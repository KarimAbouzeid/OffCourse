import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";

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
      <h2>Recommended for you:</h2>
      {courses.slice(0, 5).map((course, index) => (
        <div key={index}>
          <CourseCard course={course} />
          {/* // <p>{course.title}</p>
          // <p>{course.subject}</p>
          // <p>{course.price}</p> */}
        </div>
      ))}
    </div>
  );
}

export default PopularCourses;
