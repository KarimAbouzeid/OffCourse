import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="0"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="5"
          control={<Radio />}
          label={
            <span>
              ★★★★★ <span style={{ fontSize: "20px" }}>5 & up </span>
            </span>
          }
        />
        <FormControlLabel
          value="4"
          control={<Radio />}
          label={
            <span>
              ★★★★☆ <span style={{ fontSize: "20px" }}>4 & up </span>
            </span>
          }
        />
        <FormControlLabel
          value="3"
          control={<Radio />}
          label={
            <span>
              ★★★☆☆ <span style={{ fontSize: "20px" }}>3 & up </span>
            </span>
          }
        />
        <FormControlLabel
          value="2"
          control={<Radio />}
          label={
            <span>
              ★★☆☆☆ <span style={{ fontSize: "20px" }}>2 & up </span>
            </span>
          }
        />
        <FormControlLabel
          value="1"
          control={<Radio />}
          label={
            <span>
              ★☆☆☆☆ <span style={{ fontSize: "20px" }}>1 & up </span>
            </span>
          }
        />
        <FormControlLabel
          value="0"
          control={<Radio />}
          label={
            <span>
              ☆☆☆☆☆ <span style={{ fontSize: "20px" }}>0 & up </span>
            </span>
          }
        />
      </RadioGroup>
    </FormControl>
  );
}
