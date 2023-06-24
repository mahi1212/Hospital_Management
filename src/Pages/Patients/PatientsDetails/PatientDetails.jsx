import { Button, Grid } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PatientDetails.css';
import avater from '../../../utils/Image.png'
import { Box } from '@mui/system';
const PatientDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({})
  console.log(details)
  useEffect(() => {
    fetch(`http://localhost:5000/patients/${id}`)
      .then(res => res.json())
      .then(data => setDetails(data))
  }, [id])

  return (
    <Box className='Container' sx={{ height: { xs: '100%', md: '80vh', display: 'grid', } }}>
      <p className='header'>PROFILE</p>
      <Grid container spacing={2} columns={12} >
        {/* name and image div */}
        <Grid xs={12} md={6} lg={4} sx={{ marginTop: '10px' }}>
          {details && <p>NAME: {details?.patientName}</p>}
          {details.image ? <img
            src={`data:image/png;base64,${details.image}`}
            alt="Patient Image"
            style={{ width: "300px", height: "200px", borderRadius: "3px" }}
          /> :
            <img src={avater} style={{ width: "300px", height: "320px" }} />
          }
        </Grid>
        <Grid xs={12} md={6} lg={8} display="flex" justifyContent="flex-start" alignItems="flex-end" sx={{ position: 'relative' }}>
          <Box style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            // borderLeft: '1px solid #ccc',
            paddingLeft: '20px',
            height: '88%',
          }}>
            <p>PHONE: {details?.phone}</p>
            <p>AGE: {details?.age}</p>
            <p>WEIGHT: {details?.weight}</p>
            <p>ADDRESS: {details?.address}</p>
            <p>GENDER: {details?.gender}</p>
            <p>BLOOD: {details?.blood}</p>
          </Box>
        </Grid>
        {/* <Button variant="contained" color='success' sx={{ position: 'absolute', right: {xs: '10px', sm: '10px', md: '400px', lg: '400px'}, top: {xs: 0, sm: 0, md: '250px', lg: '250px'} }}>UPDATE</Button> */}
      </Grid>
    </Box>
  )
}

export default PatientDetails