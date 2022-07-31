import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';

const Banner = () => {
  return (
    <div >
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', margin:'0 0 0 12rem'}}>
        <Paper variant="outlined" sx={{ padding: '1rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <div>
              <HomeIcon sx={{ fontSize: '1.5rem' }} />
            </div>
            <div>
              <Typography sx={{ fontWeight: '800' }}>128</Typography>
              <p>Doctors</p>
            </div>
          </Box>
          <Typography>
            3 doctors joined this week
          </Typography>
        </Paper>
        <Paper variant="outlined" sx={{ padding: '1rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <div>
              <HomeIcon sx={{ fontSize: '1.5rem' }} />
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
              <HomeIcon sx={{ fontSize: '1.5rem' }} />
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
              <HomeIcon sx={{ fontSize: '1.5rem' }} />
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
              <HomeIcon sx={{ fontSize: '1.5rem' }} />
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
    </div>
  )
}

export default Banner