import React, { useState } from "react";
import "../css/sidebar.css";
import RadioButtonsGroup from "./RatingsRadioButton";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import BasicSelect from "./BasicSelect";

function Sidebar({
  allSubjects,
  subject,
  handleSubjectChange,
  handleSort,
  handleRating,
}) {
  const [option, setOption] = useState();
  const [subjectsCaret, setSubjectsCaret] = useState(false);
  const [ratingsCaret, setRatingsCaret] = useState(false);
  const handleOption = (event) => {
    setOption(event.target.value);
    handleSubjectChange(event.target.value);
  };
  const removeFilters = () => {
    setOption("");
    handleSubjectChange("");
  };
  const handleSubjectsCaret = () => {
    setSubjectsCaret((prev) => !prev);
  };

  const handleRatingsCaret = () => {
    setRatingsCaret((prev) => !prev);
  };

  return (
    <div>
      <div className="filter-container">
        <h1 className="filter-title">Filter </h1>
        <BasicSelect handleSort={handleSort} />
      </div>
      <hr></hr>
      <div className="caret-container">
        <h2>Ratings</h2>
        {ratingsCaret && (
          <button className="caret" onClick={handleRatingsCaret}>
            {" "}
            ⌃
          </button>
        )}
        {!ratingsCaret && (
          <button className="caret" onClick={handleRatingsCaret}>
            ⌄
          </button>
        )}
      </div>
      {ratingsCaret && <RadioButtonsGroup handleRating={handleRating} />}
      <hr></hr>
      <div className="caret-container">
        <h2> Subject</h2>
        {subjectsCaret && (
          <button className="caret" onClick={handleSubjectsCaret}>
            {" "}
            ⌃
          </button>
        )}
        {!subjectsCaret && (
          <button className="caret" onClick={handleSubjectsCaret}>
            ⌄
          </button>
        )}
      </div>

      {subjectsCaret && (
        <RadioGroup
          aria-label="subject"
          value={subject} // State to track the selected subject
          onChange={(event) => handleSubjectChange(event.target.value)} // Function to update the selected subject
        >
          {allSubjects.map((subject, index) => (
            <div key={index}>
              <FormControlLabel
                key={subject.subject} // Unique key for each radio button
                value={subject.subject}
                control={<Radio />}
                label={subject.subject}
                onChange={handleOption}
              />
            </div>
          ))}
        </RadioGroup>
      )}
      <hr></hr>
      <div className="removefilters-container">
        <button onClick={removeFilters} className="removefilters-button">
          Remove filters
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
