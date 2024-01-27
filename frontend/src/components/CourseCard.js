import React from "react";
import courseImage from "../images/Course.jpg";
import "../css/card.css";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img
        className="course-image"
        src={courseImage}
        alt="Place holder image for course"
      />
      <div className="course-info">
        <h1 className="course-title">{course.title}</h1>
        <p className="course-instructor">{course.instructor}</p>
        <div class="course-price-rating">
          <span>
            <span className="course-rating">{course.rating} </span>
            {course.rating < 1 && course.rating >= 0 && "☆ ☆ ☆ ☆ ☆"}{" "}
            {course.rating < 2 && course.rating >= 1 && "★ ☆ ☆ ☆ ☆"}
            {course.rating < 3 && course.rating >= 2 && "★ ★ ☆ ☆ ☆"}
            {course.rating < 4 && course.rating >= 3 && "★ ★ ★ ★ ☆"}
            {course.rating < 5 && course.rating >= 4 && "★ ★ ★ ★ ☆"}
            {course.rating >= 5 && "★ ★ ★ ★ ★"}
            <span className="numberOfReviews">
              ({course.usersThatRated.length})
            </span>
          </span>
          <span className="course-price">${course.price}</span>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
