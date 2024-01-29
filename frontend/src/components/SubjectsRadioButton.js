import React, { useState } from "react";

import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

function SubjectsRadioButton() {
  return (
    <div>
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
    </div>
  );
}

export default SubjectsRadioButton;
