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
  const handleOption = (event) => {
    setOption(event.target.value);
    handleSubjectChange(event.target.value);
  };
  const removeFilters = () => {
    setOption("");
    handleSubjectChange("");
  };
  return (
    <div>
      <div className="filter-container">
        <h1 className="filter-title">Filter </h1>
        <BasicSelect handleSort={handleSort} />
      </div>
      <hr></hr>
      <h2>Ratings</h2>
      <RadioButtonsGroup handleRating={handleRating} />
      <hr></hr>
      <h2> Subject</h2>

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
      <hr></hr>
      <button onClick={removeFilters}> Remove filters</button>
    </div>
  );
}

export default Sidebar;
