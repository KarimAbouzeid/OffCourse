import React from "react";
import "../css/sidebar.css";
import RadioButtonsGroup from "./RadioButton";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";

function Sidebar({ allSubjects, subject, handleSubjectChange }) {
  return (
    <div className="container-sidebar">
      <h1>Filter</h1>
      <hr></hr>
      <h2>Ratings</h2>
      <RadioButtonsGroup />
      <hr></hr>
      <h2> Subject</h2>
      {allSubjects.map((subject) => (
        <p>{subject} </p>
      ))}

      <RadioGroup
        aria-label="subject"
        value={subject} // State to track the selected subject
        onChange={handleSubjectChange} // Function to update the selected subject
      >
        {allSubjects.map((subject) => (
          <FormControlLabel
            key={subject} // Unique key for each radio button
            value={subject}
            control={<Radio />}
            label={subject}
          />
        ))}
      </RadioGroup>
    </div>
  );
}

export default Sidebar;
