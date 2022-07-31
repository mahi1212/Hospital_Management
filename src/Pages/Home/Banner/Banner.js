import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { FaAccessibleIcon, FaAmbulance } from "react-icons/fa";
import { GiCherish , } from "react-icons/gi";
import { FiUsers,  } from "react-icons/fi";
import { TbBed } from "react-icons/tb";

const Banner = () => {
  return (
    <Box sx={{ margin: '0 1rem' }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        margin: { sm: '0 auto', md: '0 0 0 10rem' },
        flexWrap: 'wrap',
        padding: '0 0.5rem'
      }}>
        <Paper variant="outlined" sx={{ padding: '1rem', }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <div>
              <GiCherish style={{fontSize:'1.5rem', color:'#22577E'}} />
            </div>
            <div>
              <Typography sx={{ fontWeight: '800' }}>128</Typography>
              <p>Doctors</p>
            </div>
          </Box>
          <Typography>
            3 doctors joined today
          </Typography>
        </Paper>
        <Paper variant="outlined" sx={{ padding: '1rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <div>
              <FaAccessibleIcon style={{fontSize:'1.5rem', color:'#125B50'}} />
            </div>
            <div>
              <Typography sx={{ fontWeight: '800' }}>155K</Typography>
              <p>Patients</p>
            </div>
          </Box>
          <Typography>
            122 new patients admitted
          </Typography>
        </Paper>
        <Paper variant="outlined" sx={{ padding: '1rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <div>
              <FiUsers style={{ fontSize: '1.5rem', color:'#1572A1' }} />
            </div>
            <div>
              <Typography sx={{ fontWeight: '800' }}>452</Typography>
              <p>Stuffs</p>
            </div>
          </Box>
          <Typography>
            12 stuffs are on vacation
          </Typography>
        </Paper>

        <Paper variant="outlined" sx={{ padding: '1rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <div>
              <TbBed style={{ fontSize: '2rem', color:'#0E3EDA' }}/>
            </div>
            <div>
              <Typography sx={{ fontWeight: '800' }}>142</Typography>
              <p>Beds</p>
            </div>
          </Box>
          <Typography>
            10 bed remaining usable
          </Typography>
        </Paper>
        <Paper variant="outlined" sx={{ padding: '1rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <div>
              <FaAmbulance style={{ fontSize: '1.5rem', color:'#B33030' }} />
            </div>
            <div>
              <Typography sx={{ fontWeight: '800' }}>120</Typography>
              <p>Ambulence</p>
            </div>
          </Box>
          <Typography>
            19 Ambulence In service
          </Typography>
        </Paper>
      </Box>

    </Box>
  )
}

export default Banner