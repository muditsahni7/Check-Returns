import ScatterPlot from "./ScatterPlot"
import React from 'react'


const FDScatter = ({ investment, rateOfInterest, timePeriod }) => {
    const principal = parseFloat(investment);
    const interestRate = parseFloat(rateOfInterest);
    const years = parseInt(timePeriod);


    const data = [];
    for (let year = 0; year <= years; year++) {
        const totalValue = principal + (principal * interestRate * year) / 100;
        data.push({ x: year, y: totalValue });
    }

    const chartData = {
        datasets: [
            {
                label: "Investment",
                data: data,
                pointBackgroundCOlor: 'rgb(255, 99, 132, 1)'
            }
        ]
    }

    const options = {
        scales: {
            x: {
                type: "linear",
                position: "bottom",
                title: {
                    display: true,
                    text: 'Years'
                }
            },
            y: {
                type: 'linear',
                position: 'left',
                title: {
                    display: true,
                    text: "Total Value"
                },
                beginAtZero: true
            }
        }
    }
    return (
        <div className='h-full'>
            <ScatterPlot datasets={chartData} options={options} />
        </div>
    )
}

export default FDScatter