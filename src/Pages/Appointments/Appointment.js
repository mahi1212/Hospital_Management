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
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // const data = {
    //   doctorName: doctorInfo.name,
    //   doctorEmail: doctorInfo.email,
    //   doctorFee: doctorInfo.fee,
    //   doctorShift: doctorInfo.time,
    //   // appointmentDate: formData.get('date'),
    //   // patientName: formData.get('name'),
    //   // patientPhone: formData.get('phone'),
    //   // patientSymptoms: formData.get('symptoms'),
    // }
    // console.log(data);
    // fetch('http://localhost:5000/appointments', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // })
    // .then(res => res.json())
    // .then(success => {
    //   if(success){
    //     alert('Appointment Created Successfully')
    //   }
    // })

  }
  return (
    <Box
        sx={{ background: "#fff", height:{md:'80vh', lg:'80vh', xs:'100%',sm:'100%'},}}
        style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}
      >
        <form onSubmit={handleSubmit} className="text-center" >
          <Box className="appointment" sx={{ paddingTop:{md:'5rem', lg:'5rem'} }}>
            <Typography variant="h6" style={{ padding: "2rem 0", marginTop: "-1rem" }}>DOCTOR APPOINMENT CHOOSEN </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6">Selected Doctor</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" sx={{background:'#6D67E4', borderRadius:'3px',color:'#fff'}}>{doctorInfo.name}</Typography> 
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{my:2}}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6"sx={{marginLeft:{md:'-3rem'}}}>Visit Fee </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{background:'#6D67E4', borderRadius:'3px',color:'#fff'}}>{doctorInfo.fee}</Typography> 
              </Grid>
            </Grid>
          </Box>
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} >
            <Typography variant="h6">Patient Shift </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{mt:2}} >
              <Typography variant="h6" sx={{background:'#6D67E4', width:'98%', margin:'0 auto', borderRadius:'3px',color:'#fff'}}>{doctorInfo.time}</Typography> 
            </Grid>
          </Grid>
          <hr style={{marginTop:"2rem", width:'80%'}}/>
          {/* <Box style={{display:'flex'}} sx={{ml:{md:'8rem', xs:'2rem'}}}>
            <input
              style={{
                background: "green",
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
          </Box> */}
        </form>
      </Box>
  )
}

export default Appointment