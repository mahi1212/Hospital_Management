import React from 'react'
import Banner from '../Banner/Banner'
import DetailsChart from '../DetailsChart/DetailsChart'
import TodaysDoctors from '../TodaysDoctors/TodaysDoctors'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <DetailsChart></DetailsChart>
        <TodaysDoctors></TodaysDoctors>
    </div>
  )
}

export default Home