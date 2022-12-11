
import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Card, TextField, Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom'
import Gender from '../../Shared/Gender/Gender';

const DoctortReg = () => {


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
    e.preventDefault();
  }
  return (
    <div>
      <Container fixed>
        <Typography variant="h5" gutterBottom component="div">
          REGISTER AS DOCTOR
        </Typography>
        <Box

        >
          <form className="text-center" onClick={handleLoginSubmit}>
            {/* <Box className="appointment"> */}

            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sm={12}>
                <TextField
                  sx={{ width: '70%', m: 1 }}
                  id="standard-basic"
                  label="First Name"
                  name='text'
                  onChange={handleOnChange}
                  variant="standard" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  sx={{ width: '70%', m: 1 }}
                  id="standard-basic"
                  label="Address"
                  name='text'
                  onChange={handleOnChange}
                  variant="standard" />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sm={12}>
                <TextField
                  sx={{ width: '70%', m: 1 }}
                  id="standard-basic"
                  label="Your mail"
                  name='email'
                  onChange={handleOnChange}
                  variant="standard" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  sx={{ width: '70%', m: 1 }}
                  id="standard-basic"
                  label="Your phone"
                  name='email'
                  onChange={handleOnChange}
                  variant="standard" />
              </Grid>
            </Grid>
            {/* </Box> */}
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sm={12}>
                <TextField
                  sx={{ width: '70%', m: 1 }}
                  id="standard-basic"
                  label="Your password"
                  name='password'
                  onChange={handleOnChange}
                  variant="standard"
                  type="password"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  sx={{ width: '70%', m: 1 }}
                  id="standard-basic"
                  label="Confirm password"
                  name=' confirm password'
                  onChange={handleOnChange}
                  variant="standard"
                  type="password"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sm={12}>
                <Gender></Gender>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* <TextField
              sx={{width:'50%',m:1}}
              id="standard-basic"
              label="Your mail"
              name='email'
            //   onChange={handleOnChange}
              variant="standard" /> */}
              </Grid>
            </Grid>

          </form>
          <Button
            sx={{ width: '30%', m: 3 }}
            varient="contained"
            type="submit"
            style={{
              backgroundColor: ' #e6ecf0',
              color: 'black'
            }}>Register</Button>
        </Box>

        <Link to='/login'><Button sx={{ width: '50%', m: 1 }} color="inherit">Already have an account</Button></Link>
      </Container>
    </div>

  )
}

export default DoctortReg;