import React from "react";
import "../css/coursePage.css";
import NavbarGuest from "../components/NavbarGuest";

function Course({ course }) {
  return (
    <div>
      <NavbarGuest />
      <div className="coursePage-container">
        <div>
          <h1 className="course-titleMain">{course.title}</h1>
          <h3 className="course-SummaryMain">{course.summary}</h3>
          <div>
            <span className="course-rating">
              <span
                style={{ color: "#ffa534", fontWeight: 300, fontSize: "19px" }}
              >
                {course.rating}{" "}
              </span>
              <span style={{ color: "#ffa534" }}>
                {course.rating < 1 && course.rating >= 0 && "☆ ☆ ☆ ☆ ☆"}{" "}
                {course.rating < 2 && course.rating >= 1 && "★ ☆ ☆ ☆ ☆"}
                {course.rating < 3 && course.rating >= 2 && "★ ★ ☆ ☆ ☆"}
                {course.rating < 4 && course.rating >= 3 && "★ ★ ★ ★ ☆"}
                {course.rating < 5 && course.rating >= 4 && "★ ★ ★ ★ ☆"}
                {course.rating >= 5 && "★ ★ ★ ★ ★"}{" "}
              </span>
              <span
                style={{
                  color: "#CBC3E3",
                  fontSize: "15px",
                  fontWeight: "300",
                  textDecoration: "underline",
                }}
              >
                ({course.usersThatRated.length} ratings)
              </span>
            </span>
          </div>
          <p>
            Created by{" "}
            <span style={{ color: "#BAB2D2" }}>{course.instructor} </span>{" "}
          </p>
          <p style={{ color: "transparent", textShadow: "0 0 0 white" }}>
            🌐 English
          </p>
        </div>
        <div className="previewCourse-container">
          <p style={{ color: "black" }}>HERE WILL BE THE COURSE ITSELF</p>
        </div>
      </div>
    </div>
  );
}

export default Course;
