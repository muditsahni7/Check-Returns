import React from 'react'
import CalculatorCard from './CalculatorCard'


const Calculator = () => {
    const searchResults = [{
        "calculatorName": "FD Calculator",
        "calculatorDescription": "Calculate Fixed Deposit returns",
        "calculatorLink": "/fixed-deposit"
    },
    {
        "calculatorName": "Loan EMI Calculator",
        "calculatorDescription": "Calculate your monthly loan EMI",
        "calculatorLink": "/loan-emi-calculator"
    },
    {
        "calculatorName": "Mortgage Calculator",
        "calculatorDescription": "Estimate your mortgage payments",
        "calculatorLink": "/mortgage-calculator"
    },
    {
        "calculatorName": "BMI Calculator",
        "calculatorDescription": "Calculate your Body Mass Index (BMI)",
        "calculatorLink": "/bmi-calculator"
    },
    {
        "calculatorName": "Currency Converter",
        "calculatorDescription": "Convert between different currencies",
        "calculatorLink": "/currency-converter"
    }]
    return (
        <div>
            <div className={`mx-16 text-center text-[35px] font-semibold`}>
            <div className='bg-clip-text text-transparent pt-20 bg-gradient-to-r from-[#5A32A3] to-[#D03592] relative sm:text-[40px] text-[30px] font-bold'>All Calculators</div>
            </div>

            <div className='flex flex-wrap justify-center'>
                {searchResults.map((calculator) => (
                    <div key={calculator.calculatorName}>
                        <CalculatorCard calculatorDetails={calculator} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Calculator