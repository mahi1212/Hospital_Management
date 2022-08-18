import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';
import './Appointment.css'
import Calender from '../Shared/Calender/Calender';
import Time from '../Shared/Time/Time';
// import { appointmentData } from '../../utils/appointmentData';

const Appointment = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch('./appointmentData.json')
      .then(res => res.json())
      .then(data => setAppointments(data))
  }, [])

  return (
    <Box sx={{ background: '#fff' }} style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <form onSubmit={handleSubmit(onSubmit)} className="text-center" >
        <Box className='appointment'>
          <h3>Take An Appointment</h3>
          <Grid container spacing={2} >
            <Grid item xs={12} md={4} >
              <h4>Select Doctor</h4>
            </Grid>
            <Grid item xs={12} md={8}  >
              <select {...register("name")} style={{width:'80%', textAlign:'center'}}>
                {
                  appointments.map((item, index) => (
                    <option key={index} value={item.name}>{item.name}</option>
                  ))
                }
              </select>
            </Grid>
          </Grid>
          <Grid container spacing={2} >
            <Grid item xs={12} md={4} >
              <h4>Consultency Fee</h4>
            </Grid>
            <Grid item xs={12} md={8}  >
              <select {...register("name")} style={{width:'80%', textAlign:'center'}}>
                {
                  appointments.map((item, index) => (
                    <option key={index} value={item.name}>{item.fee}</option>
                  ))
                }
              </select>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} >
            <h4>Select Date</h4>
          </Grid>
          <Grid item xs={12} md={8}  >
            <Calender />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} >
            <h4>Select Time</h4>
          </Grid>
          <Grid item xs={12} md={8} >
            <Time />
          </Grid>
        </Grid>
        <input style={{
          background: "#1C0633",
          color: '#FAF5FA ',
          'margin-bottom': "5%",
          'margin-top': "6%",
          padding: '1rem 5rem',
          fontSize: '1rem',
          borderRadius: '5px'
        }}
          type="submit" />
      </form>
    </Box>


  );
}

export default Appointment;