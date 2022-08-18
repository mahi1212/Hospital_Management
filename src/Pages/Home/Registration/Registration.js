import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom'

const Registration = () => {



  const [loginData, setLoginData] = useState({})
  const handleOnChange = e => {
    const feild = e.target.name;
    const value = e.target.value;
    console.log(feild, value)
    const newLoginData = { ...loginData }
    newLoginData[feild] = value;
    setLoginData(newLoginData);
  }

  const handleLoginSubmit = e => {
    // alert('submit')
    e.preventDefault();
  }

  return (
    <Container fixed>
      <Typography variant="bosy1" gutterBottom component="div">
        Register as patient
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid item xs={12} md={6} >

            <form onClick={handleLoginSubmit}>
              <TextField
                sx={{ width: '50%', m: 1 }}
                id="standard-basic"
                label="First Name"
                name='text'
                onChange={handleOnChange}
                variant="standard" />
              <TextField
                sx={{ width: '50%', m: 1 }}
                id="standard-basic"
                label="Your mail"
                name='email'
                onChange={handleOnChange}
                variant="standard" />

              <TextField
                sx={{ width: '50%', m: 1 }}
                id="standard-basic"
                label="Your password"
                name='password'
                onChange={handleOnChange}
                variant="standard"
                type="password"
              />


            </form>
          </Grid>
          <Grid item xs={12} md={6} >
            <form onClick={handleLoginSubmit}>
              <TextField
                sx={{ width: '50%', m: 1 }}
                id="standard-basic"
                label="Last Name"
                name='text'
                onChange={handleOnChange}
                variant="standard" />

              <TextField
                sx={{ width: '50%', m: 1 }}
                id="standard-basic"
                label="Your phone"
                name='email'
                onChange={handleOnChange}
                variant="standard" />

              <TextField
                sx={{ width: '50%', m: 1 }}
                id="standard-basic"
                label="Your password"
                name='password'
                onChange={handleOnChange}
                variant="standard"
                type="password"
              />
              <Button
                sx={{ width: '50%', m: 3 }}
                varient="contained"
                type="submit"
                style={{
                  backgroundColor: '#2DE1F0',
                  color: 'white'
                }}>Register</Button>


            </form>
          </Grid>

        </Grid>
      </Box>
      <Link to='/login'><Button sx={{ width: '50%', m: 1 }} color="inherit">Already have an account</Button></Link>
    </Container>
  )
}

export default Registration