// import { Box, Paper, Typography } from '@mui/material'
// import React from 'react'
// import {FaBrain, FaHandHoldingWater, FaHeartbeat, FaXRay } from "react-icons/fa";
// import FaceSharpIcon from '@mui/icons-material/FaceSharp';
// const Department = () => {
//     return (
//         <Box >
//       <Box sx={{
//         display: 'flex',
//         justifyContent : {xs:'center', sm:'center', md:'space-between', lg:'space-between', xl:'space-between'},
//         alignItems: 'center',
//         gap: '1rem 0',
//         flexWrap: 'wrap',
//         width: '100%',
//       }}>
//         <Paper elevation={2} sx={{ padding: '1rem', width:'14rem' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
//             <div>
//               <FaceSharpIcon style={{
//                 fontSize: '3rem',
//                 color: '#E31161',
//                 border: '2px solid #E31161',
//                 borderRadius: '20%',
//                 padding: '5px'
//               }} />
//             </div>
          
//           </Box>
//           <Typography>
//            Dermotology
//           </Typography>
//         </Paper>
//         <Paper elevation={2} sx={{ padding: '1rem', width:'14rem' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
//             <div>
//               <FaHeartbeat  style={{
//                 fontSize: '3rem',
//                 color: '#E31161',
//                 border: '2px solid #E31161',
//                 borderRadius: '20%',
//                 padding: '5px'
//               }} />
//             </div>
//             <div>
//             </div>
//           </Box>
//           <Typography>
//            Cardiology  
//           </Typography>
//         </Paper>
//         <Paper elevation={2} sx={{ padding: '1rem', width:'14rem' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
//             <div>
//               <FaXRay style={{
//                 fontSize: '3rem',
//                 color: '#E31161',
//                 border: '2px solid #E31161',
//                 borderRadius: '20%',
//                 padding: '5px'
//               }} />
//             </div>
//             <div>
//             </div>
//           </Box>
//           <Typography>
//             Radiology
//           </Typography>
//         </Paper>

//         <Paper elevation={2} sx={{ padding: '1rem', width:'14rem' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
//             <div>
//               <FaBrain style={{
//                 fontSize: '3rem',
//                 color: '#E31161',
//                 border: '2px solid #E31161',
//                 borderRadius: '20%',
//                 padding: '5px'
//               }} />
//             </div>
//             <div>
//             </div>
//           </Box>
//           <Typography>
//              Neurosrugery       
//            </Typography>
//         </Paper>
      
    
      
//         <Paper elevation={2} sx={{ padding: '1rem', width:'14rem' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
//             <div>
//               <FaHandHoldingWater style={{
//                 fontSize: '3rem',
//                 color: '#E31161',
//                 border: '2px solid #E31161',
//                 borderRadius: '20%',
//                 padding: '5px'
//               }} />
//             </div>
//             <div>
//             </div>
//           </Box>
//           <Typography>
//              Hematology    
//            </Typography>
//         </Paper>
//       </Box>

//     </Box>
//     );
// };

// export default Department;

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Department = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={4} sm={8} md={4} key={index}>
            <Item>xs=2</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  );
};

export default Department;