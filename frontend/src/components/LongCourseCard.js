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
      <div class="course-content">
        <h1 class="course-title">{course.title}</h1>
        <p class="instructor-name">{course.instructor}</p>
        <div class="course-rating-price">
          <span>
            <span class="rating">{course.rating} </span>
            {course.rating < 1 && course.rating >= 0 && "☆ ☆ ☆ ☆ ☆"}{" "}
            {course.rating < 2 && course.rating >= 1 && "★ ☆ ☆ ☆ ☆"}
            {course.rating < 3 && course.rating >= 2 && "★ ★ ☆ ☆ ☆"}
            {course.rating < 4 && course.rating >= 3 && "★ ★ ★ ★ ☆"}
            {course.rating < 5 && course.rating >= 4 && "★ ★ ★ ★ ☆"}
            {course.rating >= 5 && "★ ★ ★ ★ ★"}
            <span>({course.usersThatRated.length})</span>
          </span>
          <span class="price">${course.price}</span>
        </div>
      </div>
    </div>
  );
}

export default LongCourseCard;
