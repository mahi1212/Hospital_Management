import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Card, TextField, Typography } from '@mui/material';
import {Link, useNavigate} from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  // Adding google sign-in system
    const {user, signInWithGoogle, logOut, loginUser , error} = useAuth();

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
      loginUser(loginData.email, loginData.password);
      
      e.preventDefault();
  }


  return (
  
    <Card sx={{ 
      minWidth: 200,
      maxWidth:'100vw',
      height:'865px',
      }} 
      xs={12} md={12} sm={12}>
    <Container fixed >
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >
        <Grid item xs={12} md={12} sm={12}  sx={{backgroundColor:'white',borderRadius:'5px',marginTop:'15%',marginLeft:'14px'}}>
        <Typography variant="h5" gutterBottom component="div">
            Login
          </Typography>
          <form onClick={handleLoginSubmit}>
          <TextField
              sx={{width:'50%',m:1}}
              id="standard-basic-1"
              label="Your mail"
              name='email'
              onChange={handleOnChange}
              variant="standard" />

            <TextField
              sx={{width:'50%',m:1}}
              id="standard-basic-2"
              label="Your password"
              name='password'
              onChange={handleOnChange}
              variant="standard"
              type="password"  
            />  
             <Button
            sx={{ width: '50%', m: 1 }}
            varient="contained"
            type="submit"
            style={{
              backgroundColor: 'green',
              color: 'white'
            }}>Login</Button>
                 <Typography>-----------OR-----------</Typography>
            <GoogleIcon 
            sx={{ width: '50%', m: 1 }}
            varient="contained"
            type="submit"
            onClick={signInWithGoogle}
            style={{
            color: 'linear-gradient(to right bottom,(2, 89, 87, 0),(234, 67, 53))',
            cursor:'pointer'
            }}
            ></GoogleIcon>
            <br />
            { user.email ? <button onClick={logOut}>Logout</button> : <span>Not logged in</span>}
            <br />
            {user.email && <span>Logged in as : {user.displayName}</span>}
            <br />
            {/* {error} */}
        <Link to='/registration'><Button  sx={{ width: '50%', m: 1 }} >For the First time</Button></Link>
          </form>
        </Grid>
      
      </Grid>
    </Box>
    </Container>
    </Card>
   
  )
}

export default Login