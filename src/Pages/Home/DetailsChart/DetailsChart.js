import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import GenderPieChart from './GenderPieChart/GenderPieChart';

const DetailsChart = () => {
    const data = [{ name: 'Doctor', uv: 128, pv: 2400, amt: 2400 },
    { name: 'Patient', uv: 368, pv: 2400, amt: 2400 },
    { name: 'Stuff', uv: 270, pv: 2400, amt: 2400 },
    { name: 'Bed', uv: 142, pv: 2400, amt: 2400 },
    { name: 'Ambulence', uv: 120, pv: 2400, amt: 2400 },];
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            alignItems: 'center',
            borderRadius: '0.5rem',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            marginTop: '2rem',
            paddingTop: '2rem',
            backgroundColor: '#fff'
        }}>
            <BarChart width={400} height={300} data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="2 2" />
                <Bar dataKey="uv" fill="#8884d8" barSize={30} />
            </BarChart>
            <GenderPieChart></GenderPieChart>
        </div>
    )
}

export default DetailsChart