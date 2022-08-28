
import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Card, TextField, Typography } from '@mui/material';
import {Link, NavLink} from 'react-router-dom'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const PatientReg = () => {

  const [loginData,setLoginData] = useState({})
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
     Register As Patient
          </Typography>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        <Grid item xs={12} md={6} >
        
           <form onClick={handleLoginSubmit}>
          <TextField
              sx={{width:'50%',m:1}}
              id="standard-basic"
              label="Full Name"
              name='text'
              onChange={handleOnChange}
              variant="standard" />
          <TextField
              sx={{width:'50%',m:1}}
              id="standard-basic"
              label="Your mail"
              name='email'
              onChange={handleOnChange}
              variant="standard" />

            <TextField
              sx={{width:'50%',m:1}}
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
              sx={{width:'50%',m:1}}
              id="standard-basic"
              label="Address"
              name='text'
              onChange={handleOnChange}
              variant="standard" />

              <TextField
              sx={{width:'50%',m:1}}
              id="standard-basic"
              label="Your phone"
              name='email'
              onChange={handleOnChange}
              variant="standard" />

              <TextField
              sx={{width:'50%',m:1}}
              id="standard-basic"
              label="Confirm password"
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
              backgroundColor: '#430089',
              color: 'white'
            }}>Register</Button>
                  
    
        </form> 
        </Grid>
     
      </Grid>
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        sx={{width:'50%',m:1}}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female"  sx={{width:'100%',m:1}}/>
        <FormControlLabel value="male" control={<Radio />} label="Male"  sx={{width:'50%',m:1}}/>
        <FormControlLabel value="other" control={<Radio />} label="Other"  sx={{width:'50%',m:1}}/>
      </RadioGroup>
    </FormControl>
    </Box>
    
    <Link to='/login'><Button  sx={{ width: '50%', m: 1 }} color="inherit">Already have an account</Button></Link>
    </Container>
    </div>

  )
}

export default PatientReg