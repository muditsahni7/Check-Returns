"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const PieChart = ({ data }) => {
    if (!data.datasets || !Array.isArray(data.datasets)) {
        return <div>Error: Invalid Chart Data</div>
    }

    return <Doughnut data={data} />
}

export default PieChart;
