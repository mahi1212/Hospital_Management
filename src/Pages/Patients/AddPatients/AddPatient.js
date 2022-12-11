import {
  Box,
  Button,
  Chip,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Select,
  MenuItem,
  OutlinedInput,
  Fab,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Calender from "../../Shared/Calender/Calender";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["MBBS", "BCS", "FCPS", "PHD", "BMBS", "MBChC", "MBBCh"];
const packages = ["24 HOURS", "MORE THAN 2 DAYS", "10 DAYS OR MORE"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AddPatient = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <Box
      style={{
        border: "2px solid #ccc",
        padding: "1rem 1rem",
        background: "#fff",
      }}
    >
      <Box style={{ display: "flex", }}>
        <Button variant="contained" sx={{ fontWeight: 700, }}>
          <NavLink
            to="/doctors"
            style={{ textDecoration: "none", width: "100%", color: "#fff" }}
          >
            Doctors List
          </NavLink>
        </Button>
        <Button variant="contained" sx={{ ml: 2, fontWeight: 700, }} color="warning">
          <NavLink
            to="/packages"
            style={{ textDecoration: "none", width: "100%", color: "#fff" }}
          >
            Our Packages
          </NavLink>
        </Button>
      </Box>
      <hr></hr>
      <form>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: ".5rem 2rem",
            textAlign: "start",
          }}
        >
          {/* Add Name */}
          <Grid item xs={12} md={4}>
            <Typography variant="OVERLINE TEXT">PATIENT NAME</Typography>
          </Grid>
          <Grid item xs={12} md={8} sx={{ marginLeft: { md: "-5rem" } }}>
            <TextField
              id="standard-basic"
              label="Enter name of patient"
              required
              fullWidth
            />
          </Grid>
          {/* Phone */}
          <Grid item xs={12} md={4}>
            <Typography variant="OVERLINE TEXT">PHONE</Typography>
          </Grid>
          <Grid item xs={12} md={8} sx={{ marginLeft: { md: "-5rem" } }}>
            <TextField
              id="standard-basic"
              label="Enter phone number"
              required
              fullWidth
            />
          </Grid>
          {/* Age */}
          <Grid item xs={12} md={4}>
            <Typography variant="OVERLINE TEXT">AGE</Typography>
          </Grid>
          <Grid item xs={12} md={8} sx={{ marginLeft: { md: "-5rem" } }}>
            <TextField id="standard-basic" label="Enter Age" required fullWidth />
          </Grid>
          {/* weight */}
          <Grid item xs={12} md={4}>
            <Typography variant="OVERLINE TEXT">WEIGHT</Typography>
          </Grid>
          <Grid item xs={12} md={8} sx={{ marginLeft: { md: "-5rem" } }}>
            <TextField id="standard-basic" label="Enter Age" required fullWidth />
          </Grid>

          {/* PREPSCRIPTION, TEST REPORT,  */}
          {/* Select Doctor */}
          <Grid item xs={12} md={4}>
            <Typography variant="OVERLINE TEXT">SELECT DOCTOR</Typography>
          </Grid>
          <Grid item xs={12} md={8} sx={{ marginLeft: { md: "-5rem" } }}>
            <Box>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                label="SELECT"
                value={personName}
                onChange={handleChange}
                variant="standard"
                fullWidth
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Grid>
          {/* Appointment date */}
          <Grid item xs={12} md={4}>
            <Typography variant="OVERLINE TEXT">SELECT DATE</Typography>
          </Grid>
          <Grid item xs={12} md={8} sx={{ marginLeft: { md: "-6.5rem" }, display: 'flex', width:'100%' }}>
            <Calender />
            <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}>
              <Typography variant="OVERLINE TEXT">PACKAGE</Typography>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                variant="standard"
                fullWidth
                sx={{ml: 1}}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {packages.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </Box>

          </Grid>
          {/* Address */}
          <Grid item xs={12} md={4}>
            <Typography variant="OVERLINE TEXT">ADDRESS</Typography>
          </Grid>
          <Grid item xs={12} md={8} sx={{ marginLeft: { md: "-5rem" } }}>
            <TextField
              id="standard-basic"
              label="Enter your address"
              variant="standard"
              multiline
              rows={3}
              fullWidth
              />
          </Grid>
          {/* Medical History */}
          <Grid item xs={12} md={4}>
            <Typography variant="OVERLINE TEXT">MEDICAL HISTORY</Typography>
          </Grid>
          <Grid item xs={12} md={8} sx={{ marginLeft: { md: "-5rem" } }}>
            <TextField
              id="standard-basic"
              label="Describe Medical History & Symptopms"
              variant="standard"
              multiline
              rows={3}
              fullWidth
            />
          </Grid>
          {/* Medical History */}
          <Grid item xs={12} md={4}>
            <Typography variant="OVERLINE TEXT">TEST REPORT</Typography>
          </Grid>
          <Grid item xs={12} md={8} sx={{ marginLeft: { md: "-5rem" } }}>
                <input type="file" />
          </Grid>
          {/* gender */}
          <Grid item xs={12} md={4}>
            <Typography variant="OVERLINE TEXT">GENDER</Typography>
          </Grid>
          <Grid item xs={12} md={8} sx={{ marginLeft: { md: "-5rem" } }}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              required
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="OVERLINE TEXT">ADD PREPSCRIPTION</Typography>
          </Grid>
          <Grid item xs={12} md={8} sx={{ marginLeft: { md: "-5rem" } }}>
            <Fab color="primary" aria-label="PREPSCRIPTION">
              <AddIcon />
            </Fab>
          </Grid>
          {/*  */}
          
          <Grid item xs={12} md={4}>
            <Typography variant="OVERLINE TEXT">DECISION</Typography>
          </Grid>
          <Grid item xs={12} md={8} sx={{ marginLeft: { md: "-5rem" } }}>
            <Box sx={{ display: "flex", margin: "1rem 0" }}>
              <Button variant="outlined" color="error" type="reset">
                RESET
              </Button>
              <Chip
                label="OR"
                color="secondary"
                style={{
                  marginLeft: "-.8rem",
                  marginRight: "-.8rem",
                  marginTop: ".1rem",
                }}
              />
              <Button variant="outlined" color="success" type="submit">
                SAVE
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddPatient;
