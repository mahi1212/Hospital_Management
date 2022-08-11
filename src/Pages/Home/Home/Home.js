import { Grid } from '@mui/material'
import React from 'react'
// import Map from '../../Map/Map'
import Banner from '../Banner/Banner'
import DetailsChart from '../DetailsChart/DetailsChart'
import Feedback from '../Feedback/Feedback'
import TodaysDoctors from '../TodaysDoctors/TodaysDoctors'

const Home = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Banner></Banner>
          <DetailsChart></DetailsChart>
        </Grid>
        <Grid item xs={12} md={4}>
          <Feedback></Feedback>
        </Grid>
      </Grid>
      <TodaysDoctors></TodaysDoctors>
      {/* <Map></Map> */}
    </div>
  )
}

export default Home

