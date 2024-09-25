import TextInput from "../Charts/TextInput"
import FDChart from "../Charts/FDChart"
import FDScatter from "../Charts/FDScatter"
import FDLine from "../Charts/FDLine"
import FDBubble from "../Charts/FDBubble"
import React, { useRef, useState } from 'react'
import { GrSettingsOption } from 'react-icons/gr';

const FixedDeposit = () => {
    const [investment, setInvestment] = useState('10000');
    const [rateOfInterest, setRateOfInterest] = useState('5.7');
    const [timePeriod, setTimePeriod] = useState('4');

    const [clearedInvestment, setClearedInvestment] = useState(false);
    const [clearedRateOfInterest, setClearedRateOfInterest] = useState(false);
    const [clearedTimePeriod, setClearedTimePeriod] = useState(false);

    const [active, setActive] = useState('Scatter');
    const [showSettings, setShowSettings] = useState(false);
    const [timeUnit, setTimeUnit] = useState('years');

    const toggleSettingsPanel = () => {
        setShowSettings(!showSettings);
    };

    const settingsPanelRef = useRef(null);

    const calculateReturns = () => {
        const principle = parseFloat(investment);
        const interestRate = parseFloat(rateOfInterest) / 100;

        let years = parseFloat(timePeriod);

        if (timeUnit === 'months') {
            years = years / 12;
        } else if (timeUnit === 'days') {
            years = years / 365;
        }

        const returns = principle + principle * interestRate * years;
        const totalValue = principle + returns;

        return (
            <div className='md:h-[380px] h-fit border-[10px] p-4 lg:ml-8 mt-8 lg:mt-0 rounded-lg w-full flex between items-center flex-col sm:flex-row'>
                <div className='flex flex-col justify-between h-full md:w-1/2 w-full p-4 md:mr-16'>
                    <h4 className='font-bold text-3xl'>Summary</h4>

                    <div className='flex flex-col mt-4 text-[18px] font-normal'>
                        <div className='flex space-x-4 justify-between'>
                            <div>Investment Amount</div>
                            <div>₹{investment}</div>
                        </div>


                        <div className='flex space-x-4 justify-between'>
                            <div>Rate of Interest</div>
                            <div>{rateOfInterest}%</div>
                        </div>

                        <div className='flex space-x-4 justify-between'>
                            <div>Time Period</div>
                            <div>{timePeriod} {timeUnit}(s)</div>
                        </div>
                    </div>

                    <div className='mt-4 mb-4 text-[17px] font-semibold'>
                        <div className='flex space-x-4 justify-between '>
                            <div>Returns</div>
                            <div>₹{returns.toFixed(2)}</div>
                        </div>
                        <div className='flex space-x-4 justify-between '>
                            <div>Total Value</div>
                            <div>₹{totalValue.toFixed(2)}</div>
                        </div>
                    </div>
                </div>


                <div className='h-full w-[2px] border-2'></div>

                <div className='pr-4 flex items-center justify-center w-1/2'>
                    <FDChart investment={investment} rateOfInterest={rateOfInterest} timePeriod={timePeriod} />
                </div>

            </div>
        );
    };

    const handleInvestmentChange = (value) => {
        if (!isNaN(parseFloat(value)) && parseFloat(value) >= 0) {
            setInvestment(value);

            if (value !== '0') {
                setClearedInvestment(false);
            }
        } else if (value === '') {
            setInvestment('0');
            setClearedInvestment(true);
        }
    };

    const handleRateOfInterestChange = (value) => {
        if (!isNaN(parseFloat(value)) && parseFloat(value) >= 1) {
            setRateOfInterest(value);
            if (value !== '0') {
                setClearedRateOfInterest(false);
            }
        } else if (value === '') {
            setRateOfInterest('0');
            setClearedRateOfInterest(true);
        }
    };

    const handleTimePeriodChange = (value) => {
        if (!isNaN(parseInt(value)) && parseInt(value) >= 0) {
            setTimePeriod(value);
            if (value !== '0') {
                setClearedTimePeriod(false);
            }
        } else if (value === '') {
            setTimePeriod('0');
            setClearedTimePeriod(true);
        }
    };

    const handleTimeUnitChange = (selectedTimeUnit) => {
        setTimeUnit(selectedTimeUnit);
    };

    return (
        <div className={`lg:mx-16 mx-4 py-24`}>
            <h2 className='flex justify-between sm:flex-row sm:items-center flex-col'>
                <div className='bg-clip-text text-transparent bg-gradient-to-r from-[#5A32A3] to-[#D03592] relative sm:text-[40px] text-[30px] font-bold'>Fixed Deposit Calculator</div>
                <a href="/calculator" className='bg-gray-200 px-3 py-1 rounded-xl h-fit font-normal mt-1 w-fit select-none cursor-pointer hover:bg-gray-400 no-underline text-black transition duration-500 text-[16px]'>All Calculators</a>
            </h2>

            <div className='flex mt-6 lg:flex-row flex-col'>
                <div className='h-[380px] border-[10px] lg:w-[600px] rounded-2xl w-full'>
                    <div className='p-3 flex justify-between items-center'>
                        <div
                            className='bg-gray-200 rounded-lg px-3 py-1 text-[12px] text-black flex items-center space-x-1 select-none cursor-pointer hover-bg-gray-300'
                            onClick={toggleSettingsPanel}
                        >
                            <div>
                                <GrSettingsOption />
                            </div>
                            <div>Settings</div>
                        </div>

                        <div className=''>
                            {showSettings && (
                                <div ref={settingsPanelRef} className='absolute sm:left-[85px] left-[30px] transition duration-1000 bg-white z-50 mt-4 border-2 p-4 rounded-lg'>
                                    <div className='mb-4'>
                                        <label className='block text-[16px] font-semibold mb-2'>Time Period</label>
                                        <div className='flex space-x-4'>
                                            <label className='inline-flex items-center'>
                                                <input
                                                    type='radio'
                                                    value='years'
                                                    checked={timeUnit === 'years'}
                                                    onChange={() => handleTimeUnitChange('years')}
                                                />
                                                <span className='ml-2'>Years</span>
                                            </label>
                                            <label className='inline-flex items-center'>
                                                <input
                                                    type='radio'
                                                    value='months'
                                                    checked={timeUnit === 'months'}
                                                    onChange={() => handleTimeUnitChange('months')}
                                                />
                                                <span className='ml-2'>Months</span>
                                            </label>
                                            <label className='inline-flex items-center'>
                                                <input
                                                    type='radio'
                                                    value='days'
                                                    checked={timeUnit === 'days'}
                                                    onChange={() => handleTimeUnitChange('days')}
                                                />
                                                <span className='ml-2'>Days</span>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            )}

                        </div>

                        <div className='flex space-x-2'>
                            <div className='w-[12px] h-[12px] bg-red-400 rounded-full hover:bg-red-600 cursor-pointer'></div>
                            <div className='w-[12px] h-[12px] bg-yellow-300 rounded-full hover:bg-yellow-600 cursor-pointer'></div>
                            <div className='w-[12px] h-[12px] bg-green-500 rounded-full hover:bg-green-600 cursor-pointer'></div>
                        </div>
                    </div>

                    <div className='px-4 py-2 mb-4'>
                        <TextInput
                            id='investment'
                            label='Investment Amount (in ₹)'
                            value={clearedInvestment ? '' : investment}
                            onChange={handleInvestmentChange}
                        />

                        <TextInput
                            id='rateOfInterest'
                            label='Rate of Interest (p.a.)'
                            value={clearedRateOfInterest ? '' : rateOfInterest}
                            onChange={handleRateOfInterestChange}
                        />

                        <TextInput
                            id='timePeriod'
                            label={`Time Period (in ${timeUnit}(s))`}
                            value={clearedTimePeriod ? '' : timePeriod}
                            onChange={handleTimePeriodChange}
                        />
                    </div>

                </div>
                {calculateReturns()}
            </div>

            <div className='mt-6 border-[10px] rounded-lg mb-8 h-fit px-2 sm:px-8 py-4 select-none'>
                <div className='flex space-x-3 items-center justify-center mt-2 mb-4 text-[14px]'>
                    <div className={`rounded-lg px-2 py-1 border-2 cursor-pointer transition duration-300 ${active === "Scatter" && "bg-gray-200"}`} onClick={() => { setActive("Scatter") }}>Scatter</div>
                    <div className={`rounded-lg px-2 py-1 border-2 cursor-pointer transition duration-300 ${active === "Line" && "bg-gray-200"}`} onClick={() => { setActive("Line") }}>Line</div>
                    <div className={`rounded-lg px-2 py-1 border-2 cursor-pointer transition duration-300 ${active === "Bubble" && "bg-gray-200"}`} onClick={() => { setActive("Bubble") }}>Bubble</div>
                </div>

                <div className='w-full h-full'>
                    {active === "Scatter"
                        &&
                        <div>
                            <FDScatter investment={investment} rateOfInterest={rateOfInterest} timePeriod={timePeriod} />
                        </div>
                    }

                    {active === "Line"
                        &&
                        <div>
                            <FDLine investment={investment} rateOfInterest={rateOfInterest} timePeriod={timePeriod} />
                        </div>
                    }

                    {active === "Bubble"
                        &&
                        <div>
                            <FDBubble investment={investment} rateOfInterest={rateOfInterest} timePeriod={timePeriod} />
                        </div>
                    }
                </div>
            </div>

            <div className={`mt-6 border-[10px] rounded-lg mb-8 h-fit px-8 py-4 select-none`}>
                <div className='font-bold text-[20px] mb-2'>Information about FD</div>
                <div>
                    A Fixed Deposit (FD) is a low-risk investment offered by banks and financial institutions. It comprises depositing a quantity of money at a predetermined interest rate for a defined length of time. FDs provide safety, fixed returns, and government-backed insurance up to a specified amount. They are, however, less liquid, with early withdrawal penalties. Interest is usually taxed, and a minimum deposit is required.
                </div>
                <div className='my-4 font-bold'>M = P + ((P x r x t)/100)</div>
                <div>
                    The formula M represents the total amount you'll have in the end, where:
                    P is the initial deposit amount.
                    r is the annual interest rate.
                    t is the number of years the money is deposited or invested.
                </div>
            </div>
        </div>
    );
};

export default FixedDeposit;
