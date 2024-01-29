import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ handleSort }) {
  const [option, setOption] = React.useState("");

  const handleChange = (event) => {
    setOption(event.target.value);
    handleSort(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, maxWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          style={{ fontWeight: "bold" }}
        >
          Sort by
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue="Newest"
          value={option}
          label="Sort by"
          onChange={handleChange}
        >
          <MenuItem value={0}>Newest</MenuItem>
          <MenuItem value={1}>Highest Rated</MenuItem>
          <MenuItem value={2}>Price: Low To High</MenuItem>
          <MenuItem value={3}>Price: High To Low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
