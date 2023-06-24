import React, { useState } from 'react'
import Container from '@mui/material/Container';
import { Card, Typography } from '@mui/material';
import Register from '../Register/Register';

const Registration = () => {
  return (
    <Card sx={{
      boxShadow: 'none',
      height: '100%',
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