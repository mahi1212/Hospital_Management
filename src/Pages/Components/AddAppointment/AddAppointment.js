import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';
import './Appointment.css'
import Calender from '../../Shared/Calender/Calender';
import Time from '../../Shared/Time/Time';
const AddAppointment = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Box sx={{ background: '#fff' }} style={{boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'}}>
      <form onSubmit={handleSubmit(onSubmit)} className="text-center" >
        <Box className='appointment'>
          <h3>Take An Appointment</h3>
          <Grid container spacing={2} >
            <Grid item xs={12} md={4} >
              <h4>Doctor's name:</h4>
            </Grid>
            <Grid item xs={12} md={8}  >
              <select {...register("name")}>
                <option value="Dr.Basu">Dr.Basu</option>
                <option value="Dr.Rahman">Dr.Rahman</option>
                <option value="Dr.Rehana">Dr.Rehana</option>
              </select>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} >
              <h4>Consultancy Fees:</h4>
            </Grid>
            <Grid item xs={12} md={8}  >
              <input type="number" {...register} />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} >
              <h4>Patient ID:</h4>
            </Grid>
            <Grid item xs={12} md={8}  >
              <input type="number" {...register} />
            </Grid>
          </Grid>
          <Grid container spacing={2} >
            <Grid item xs={12} md={4} >
              <h4>Department name:</h4>
            </Grid>
            <Grid item xs={12} md={8}  >
              <select {...register("deptName")}>
                <option value="MicroBiology">MicroBiology</option>
                <option value="Physiotherapy">Physiotherapy</option>
                <option value="Neurology">Neurology</option>
                <option value="Orthopaedics">Orthopaedics</option>
                <option value="Pathology ">Pathology</option>
                <option value="Cardiology ">Cardiology</option>
                <option value="Ear,nose and throat(ENT) ">Ear,nose and throat(ENT)</option>
                <option value="Gynecology ">Gynecology</option>
              </select>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} >
              <h4>Problem:</h4>
            </Grid>
            <Grid item xs={12} md={8}  >
              <input type="text" {...register} />
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} >
            <h4>Date:</h4>
          </Grid>
          <Grid item xs={12} md={8}  >
            <Calender />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} >
            <h4>Time:</h4>
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

export default AddAppointment;