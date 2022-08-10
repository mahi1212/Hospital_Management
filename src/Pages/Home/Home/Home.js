import React from 'react'
import Map from '../../Map/Map'
import Banner from '../Banner/Banner'
import DetailsChart from '../DetailsChart/DetailsChart'
import TodaysDoctors from '../TodaysDoctors/TodaysDoctors'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <DetailsChart></DetailsChart>
        <TodaysDoctors></TodaysDoctors>
        {/* <Map></Map> */}
    </div>
  )
}

export default Home