import React, { useState } from 'react'
import Container from '@mui/material/Container';
import { Card, Typography } from '@mui/material';
import Register from '../Register/Register';





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
    <Card sx={{
      minWidth: 276,
      height: '931px',
      boxShadow: 'none',
      // marginTop:'15%',
      // backgroundColor:'rgb(45, 225, 240)',
      // background: 'linear-gradient(to right bottom, #430089, #82ffa1)'
    }} xs={12} md={6} sm={12}>

      <Container fixed>
        <Typography variant="bosy1" gutterBottom component="div">
          <Register ></Register>
        </Typography>
      </Container>
    </Card>
  )
}

export default Registration