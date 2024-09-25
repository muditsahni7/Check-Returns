import LineChart from './LineChart';
import React from 'react'

const FDLine = ({ investment, rateOfInterest, timePeriod }) => {
  const principle = parseFloat(investment);
  const interestRate = parseFloat(rateOfInterest);
  const years = parseInt(timePeriod);

  const data = [];
  let currentTotal = principle;

  for (let year = 1; year <= years; year++) {
    currentTotal = currentTotal + currentTotal * interestRate;
    data.push(currentTotal.toFixed(2));
  }

  const chartData = {
    labels: Array.from({ length: years }, (_, i) => i + 1),
    datasets: [
      {
        label: "Investment",
        data: data,
        fill: true,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  }

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: "years"
        }
      },
      y: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Total Value',
        },
      },
    }
  }

  return (
    <div>
      <LineChart data={chartData} options={options} />
    </div>
  )
}

export default FDLine