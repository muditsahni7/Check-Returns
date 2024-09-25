import React from 'react'

const CalculatorCard = ({ calculatorDetails }) => {
    return (
        <div className={`w-[220px] h-[300px] bg-white border m-16 rounded-lg`}>
            <div className='flex space-x-2 px-4 py-3 '>
                <div className='w-[12px] h-[12px] bg-red-400 rounded-full hover:bg-red-600 cursor-pointer'></div>
                <div className='w-[12px] h-[12px] bg-yellow-300 rounded-full hover:bg-yellow-600 cursor-pointer'></div>
                <div className='w-[12px] h-[12px] bg-green-500 rounded-full hover:bg-green-600 cursor-pointer'></div>
            </div>

            <div className='font-semibold mt-4 text-center text-[20px] px-4 h-[80px]'>
                {calculatorDetails.calculatorName}
            </div>

            <div className='mt-5 font-bold h-[170px]  w-full rounded-lg bg-black border-2 text-white px-4 py-2 flex flex-col justify-between mb-2'>
                <div>{calculatorDetails.calculatorDescription}</div>

                <div className='mt-8 flex justify-between  w-full mb-1'>
                    <a href='/calculator/fixed-deposit' className='rounded-lg px-3 py-1 border-2 text-[14px] no-underline text-gray-200 select-none hover:bg-white hover:text-black transition duration-500 cursor-pointer'>Calculator</a>
                </div>
            </div>
        </div>

    )
}

export default CalculatorCard