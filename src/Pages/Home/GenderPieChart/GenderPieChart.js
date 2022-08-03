import React from 'react'
import { PieChart, Pie, Tooltip } from 'recharts';

const GenderPieChart = () => {
    const genderData = [
        {
            "name": "Man",
            "value": 200
        },
        {
            "name": "Women",
            "value": 130
        },
        {
            "name": "Baby",
            "value": 190
        },
        {
            "name": "Buddah",
            "value": 140
        },
    ];
    return (
        <PieChart width={400} height={250}>
            <Tooltip />
            <Pie data={genderData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#003865" label />
        </PieChart>
    )
}

export default GenderPieChart