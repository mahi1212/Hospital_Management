import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import {  FaAmbulance, FaBrain, FaXRay } from "react-icons/fa";
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import FaceSharpIcon from '@mui/icons-material/FaceSharp';
const Department = () => {
    return (
        <Box >
      <Box sx={{
        display: 'flex',
        justifyContent : {xs:'center', sm:'center', md:'space-between', lg:'space-between', xl:'space-between'},
        alignItems: 'center',
        gap: '1rem 0',
        flexWrap: 'wrap',
        width: '100%',
      }}>
        <Paper elevation={2} sx={{ padding: '1rem', width:'14rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <div>
              <FaceSharpIcon style={{
                fontSize: '3rem',
                color: '#E31161',
                border: '2px solid #E31161',
                borderRadius: '20%',
                padding: '5px'
              }} />
            </div>
          
          </Box>
          <Typography>
           Dermotology
          </Typography>
        </Paper>
        <Paper elevation={2} sx={{ padding: '1rem', width:'14rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <div>
              <MonitorHeartIcon  style={{
                fontSize: '3rem',
                color: '#E31161',
                border: '2px solid #E31161',
                borderRadius: '20%',
                padding: '5px'
              }} />
            </div>
            <div>
            </div>
          </Box>
          <Typography>
           Cardiology  
 </Typography>
        </Paper>
        <Paper elevation={2} sx={{ padding: '1rem', width:'14rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <div>
              <FaXRay style={{
                fontSize: '3rem',
                color: '#E31161',
                border: '2px solid #E31161',
                borderRadius: '20%',
                padding: '5px'
              }} />
            </div>
            <div>
            </div>
          </Box>
          <Typography>
            Radiology
          </Typography>
        </Paper>

        <Paper elevation={2} sx={{ padding: '1rem', width:'14rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <div>
              <FaBrain style={{
                fontSize: '3rem',
                color: '#E31161',
                border: '2px solid #E31161',
                borderRadius: '20%',
                padding: '5px'
              }} />
            </div>
            <div>
            </div>
          </Box>
          <Typography>
Neurosrugery          </Typography>
        </Paper>
      
      </Box>

    </Box>
    );
};

export default Department;