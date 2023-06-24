import React from 'react'
import { RadialBarChart, RadialBar, Tooltip, Legend} from 'recharts';

const RadialChart = () => {
    const data = [
        // {
        //     "name": "18-24",
        //     "patient": 31.47,
        //     "pv": 400,
        //     "fill": "#8884d8"
        // },
        {
            "name": "25-29",
            "patient": 26.69,
            "pv": 500,
            "fill": "#83a6ed"
        },
        {
            "name": "30-34",
            "patient": 30.09,
            "pv": 200,
            "fill": "#8dd1e1"
        },
        {
            "name": "35-39",
            "patient": 8.22,
            "pv": 9800,
            "fill": "#82ca9d"
        },
        {
            "name": "40-49",
            "patient": 12.63,
            "pv": 3908,
            "fill": "#a4de6c"
        },
        {
            "name": "50+",
            "patient": 17.63,
            "pv": 120,
            "fill": "#d0ed57"
        }
    ]
    return (
        <RadialBarChart
            width={350}
            height={300}
            innerRadius="10%"
            outerRadius="80%"
            data={data}
            startAngle={180}
            endAngle={0}
        >
            <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='patient' />
            <Legend iconSize={10} width={100} height={250} layout='horizontal' verticalAlign='middle' align="right" />
            <Tooltip />
        </RadialBarChart>
    )
}

export default RadialChart