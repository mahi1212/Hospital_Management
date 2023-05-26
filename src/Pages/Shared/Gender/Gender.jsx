import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Gender = () => {
  return (
    <div>
      <FormControl>
        <FormLabel
          id="demo-radio-buttons-group-label"
          style={{ color: "black", padding: "10px" }}
        >
          Gender
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          sx={{ display: "flex", alignItems: "flex-end" }}
          style={{ display: "initial" }}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          {/* <FormControlLabel value="other" control={<Radio />} label="Other"  /> */}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Gender;
