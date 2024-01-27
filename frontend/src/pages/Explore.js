import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import NavbarGuest from "../components/NavbarGuest";

function Explore() {
  const [courses, setCourses] = useState([]);
  const [rating, setRating] = useState(0);
  const [subject, setSubject] = useState("");
  const [allSubjects, setAllSubjects] = useState([]);

  useEffect(() => {
    let url = `http://localhost:4000/api/courses/filterRating/${rating}`;
    if (subject) url += `/${subject}`;

    axios
      .get(url)
      .then((res) => {
        setCourses(res.data.courses);
        handleAllSubjects(courses);
      })
      .catch((err) => console.log(err));
  }, [subject, rating]);

  const handleAllSubjects = (courses) => {
    const uniqueSubjects = new Set(allSubjects);

    courses.forEach((course) => uniqueSubjects.add(course.subject));
    setAllSubjects([...uniqueSubjects]);
  };

  const handleSubjectChange = (event) => setSubject(event.target.value);

  return (
    <div>
      <NavbarGuest />

      <Sidebar
        allSubjects={allSubjects}
        subject={subject}
        handleSubjectChange={handleSubjectChange}
      />
      {/* <p> {courses.map((course) => course.subject)} </p> */}
    </div>
  );
}

export default Explore;
