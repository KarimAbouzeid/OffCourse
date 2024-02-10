import { useEffect, useState } from "react";
import "./App.css";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Course from "./pages/Course";

import axios from "axios";

function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    let url = "http://localhost:4000/api/courses/";
    axios
      .get(url)
      .then((res) => setCourses(res.data.courses))
      .catch((error) => console.log(error));
  }, []);

  console.log(courses[0]);
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Explore /> */}

      <Course course={courses[0]} />
    </div>
  );
}

export default App;
