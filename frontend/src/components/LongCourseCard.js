import React from "react";
import courseImage from "../images/Course.jpg";
import "../css/longcard.css";

function LongCourseCard({ course }) {
  return (
    <div className="longcard-container">
      <img
        src={courseImage}
        alt="Place holder image for course"
        className="longcard-image"
      />
      <div className="course-content">
        <h1 className="course-title">{course.title}</h1>
        <p className="course-summary truncate">{course.summary}</p>
        <p class="author-name">Given by: {course.instructor}</p>
        <div>
          <span className="course-rating ">
            <span class="course-rating-number">{course.rating} </span>
            <span style={{ color: "#ffa534" }}>
              {course.rating < 1 && course.rating >= 0 && "☆ ☆ ☆ ☆ ☆"}{" "}
              {course.rating < 2 && course.rating >= 1 && "★ ☆ ☆ ☆ ☆"}
              {course.rating < 3 && course.rating >= 2 && "★ ★ ☆ ☆ ☆"}
              {course.rating < 4 && course.rating >= 3 && "★ ★ ★ ★ ☆"}
              {course.rating < 5 && course.rating >= 4 && "★ ★ ★ ★ ☆"}
              {course.rating >= 5 && "★ ★ ★ ★ ★"}{" "}
            </span>
            <span
              style={{ color: "gray", fontSize: "15px", fontWeight: "300" }}
            >
              ({course.usersThatRated.length})
            </span>
          </span>
        </div>
      </div>
      <div>
        <span class="course-price">${course.price}</span>
      </div>
    </div>
  );
}

export default LongCourseCard;
