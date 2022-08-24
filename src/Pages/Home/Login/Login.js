import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const handleOnChange = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    console.log(feild, value);
    const newLoginData = { ...loginData };
    newLoginData[feild] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    // alert('submit')
    e.preventDefault();
  };

  return (
    <Container fixed>
      <Box
        sx={{
          flexGrow: 1,
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ background: "#fff", padding: "6rem 0rem" }}
        >
          <Grid item xs={12} md={12}>
            <Typography variant="bosy1" gutterBottom component="div">
              Login
            </Typography>
            <form onClick={handleLoginSubmit}>
              <TextField
                sx={{ width: { sm: "none", md: "50%", lg: "50%" }, m: 1 }}
                id="standard-basic"
                label="Your mail"
                name="email"
                onChange={handleOnChange}
                variant="standard"
              />

              <TextField
                sx={{ width: { sm: "none", md: "50%", lg: "50%" }, m: 1 }}
                id="standard-basic"
                label="Your password"
                name="password"
                onChange={handleOnChange}
                variant="standard"
                type="password"
              />
              <Button
                sx={{ width: "50%", m: 1 }}
                varient="contained"
                type="submit"
                style={{
                  backgroundColor: "#2DE1F0",
                  color: "white",
                }}
              >
                Login
              </Button>

              <Link to="/registration">
                <Button sx={{ width: "50%", m: 1 }} color="inherit">
                  For the First time?
                </Button>
              </Link>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
