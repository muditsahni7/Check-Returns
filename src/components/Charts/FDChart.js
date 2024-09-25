import React from 'react'
import PieChart from "./PieChart"

const FDChart = ({ investment, rateOfInterest, timePeriod }) => {
  const principle = parseFloat(investment);
  const interestRate = parseFloat(rateOfInterest);
  const years = parseInt(timePeriod);

  const interest = (principle * interestRate * years) / 100;
  const totalValue = principle + interest;

  const chartData = {
    labels: ['Total Investment', 'Interest'],
    datasets: [
      {
        data: [principle, interest],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      }
    ]
  }
  return (
    <div><PieChart data={chartData} /></div>
  )
}
export default FDChart