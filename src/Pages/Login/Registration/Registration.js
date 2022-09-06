import React, { useState } from 'react'
import Container from '@mui/material/Container';
import { Card,Typography } from '@mui/material';
import Register from '../Register/Register';





const Registration = () => {



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
      // alert('submit')
      e.preventDefault();
  }









  return (
    <Card sx={{ 
    minWidth: 276,
    height:'931px',
    boxShadow:'none' ,
    // marginTop:'15%',
    // backgroundColor:'rgb(45, 225, 240)',
    // background: 'linear-gradient(to right bottom, #430089, #82ffa1)'
    }} xs={12} md={6} sm={12}>
   
<Container fixed>
<Typography variant="bosy1" gutterBottom component="div">
      <Register ></Register>
          </Typography>
    {/* <Box sx={{ flexGrow: 1 }}> */}
      {/* <Grid container spacing={2}>
        
        <Grid item xs={12} md={6} > */}
        
          {/* <form onClick={handleLoginSubmit}>
          <TextField
              sx={{width:'50%',m:1}}
              id="standard-basic"
              label="First Name"
              name='text'
              onChange={handleOnChange}
              variant="standard" />
          <TextField
              sx={{width:'50%',m:1}}
              id="standard-basic"
              label="Your mail"
              name='email'rt

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
        
         
          </form> */}
        {/* </Grid>
        <Grid item xs={12} md={6} > */}
        {/* <form onClick={handleLoginSubmit}>
             <TextField
              sx={{width:'50%',m:1}}
              id="standard-basic"
              label="Last Name"
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
            }}>Login</Button>
                  

        </form> */}
        {/* </Grid>
      
      </Grid>
    </Box> */}
    {/* <Link to='/login'><Button  sx={{ width: '50%', m: 1 }} color="inherit">Already have an account</Button></Link> */}
    </Container>
    </Card>
  )
}

export default Registration