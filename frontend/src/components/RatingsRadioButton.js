import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function RadioButtonsGroup({ handleRating }) {
  const [option, setOption] = React.useState(0);

  const handleChange = (event) => {
    setOption(event.target.value);
    handleRating(event.target.value);
  };
  return (
    <FormControl>
      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={option}
        name="radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel
          value={5}
          control={<Radio />}
          label={
            <span>
              <span style={{ color: "#ffa534" }}> ★★★★★ </span>{" "}
              <span style={{ fontSize: "18px", fontWeight: "lighter" }}>
                5 & up{" "}
              </span>
            </span>
          }
        />
        <FormControlLabel
          value={4}
          control={<Radio />}
          label={
            <span>
              <span style={{ color: "#ffa534" }}>★★★★☆ </span>{" "}
              <span style={{ fontSize: "18px", fontWeight: "lighter" }}>
                4 & up{" "}
              </span>
            </span>
          }
        />
        <FormControlLabel
          value={3}
          control={<Radio />}
          label={
            <span>
              <span style={{ color: "#ffa534" }}>★★★☆☆ </span>
              <span style={{ fontSize: "18px", fontWeight: "lighter" }}>
                3 & up{" "}
              </span>
            </span>
          }
        />
        <FormControlLabel
          value={2}
          control={<Radio />}
          label={
            <span>
              <span style={{ color: "#ffa534" }}>★★☆☆☆ </span>{" "}
              <span style={{ fontSize: "18px", fontWeight: "lighter" }}>
                2 & up{" "}
              </span>
            </span>
          }
        />
        <FormControlLabel
          value={1}
          control={<Radio />}
          label={
            <span>
              <span style={{ color: "#ffa534" }}>★☆☆☆☆ </span>
              <span style={{ fontSize: "18px", fontWeight: "lighter" }}>
                1 & up{" "}
              </span>
            </span>
          }
        />
        <FormControlLabel
          value={0}
          control={<Radio />}
          label={
            <span>
              <span style={{ color: "#ffa534" }}>☆☆☆☆☆ </span>
              <span style={{ fontSize: "18px", fontWeight: "lighter" }}>
                0 & up{" "}
              </span>
            </span>
          }
        />
      </RadioGroup>
    </FormControl>
  );
}
