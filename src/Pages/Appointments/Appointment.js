import React, { useEffect, useState, } from "react";
import { Grid, Typography, } from "@mui/material";
import Box from "@mui/material/Box";
import "./Appointment.css";
import Calender from "../Shared/Calender/Calender";
import Time from "../Shared/Time/Time";
import { useParams } from "react-router-dom";

const Appointment = () => {
  const {email} = useParams();
  const [doctorInfo, setDoctorInfo] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/doctors/${email}`)
    .then(res => res.json())
    .then(data => setDoctorInfo(data[0]))
  }, [])
  // const {name} = doctorInfo;
  return (
    <Box
        sx={{ background: "#fff", height:{md:'80vh', lg:'80vh', xs:'100%',sm:'100%'},}}
        style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}
      >
        <form className="text-center" >
          <Box className="appointment" sx={{ paddingTop:{md:'5rem', lg:'5rem'}}}>
            <h3 style={{ padding: "1rem 0" }}>Take An Appointment</h3>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6">Selected Doctor</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" sx={{background:'#064663', borderRadius:'3px',color:'#fff'}}>{doctorInfo.name}</Typography> 
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{my:2}}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6"sx={{marginLeft:{md:'-3rem'}}}>Visit Fee </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{background:'#064663', borderRadius:'3px',color:'#fff'}}>{doctorInfo.fee}</Typography> 
              </Grid>
            </Grid>
          </Box>
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} >
            <Typography variant="h6">Patient Shift </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{mt:2}} >
              <Typography variant="h6" sx={{background:'#064663', width:'98%', margin:'0 auto', borderRadius:'3px',color:'#fff'}}>{doctorInfo.time}</Typography> 
            </Grid>
          </Grid>
          <Grid sx={{mt:2 }} container spacing={2}>
            <Grid item xs={12} md={4}>
              <h4>Choose Date</h4>
            </Grid>
            <Grid item xs={12} md={4}>
              <Calender />
            </Grid>
          </Grid>
          <hr style={{marginTop:"2rem", width:'80%'}}/>
          <Box style={{display:'flex'}} sx={{ml:{md:'8rem', xs:'2rem'}}}>
            <input
              style={{
                background: "#8758FF",
                color: "#FAF5FA ",
                fontWeight:800,
                marginBottom:"1rem",
                marginTop: "1rem",
                padding: "1rem 3rem",
                fontSize: "1rem",
                borderRadius: "5px",
                cursor:'pointer',
                border:'none'
              }}
              type="submit"
            />
          </Box>
        </form>
      </Box>
  )
}

export default Appointment