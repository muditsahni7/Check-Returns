import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';
import { GiReceiveMoney } from "react-icons/gi"
import { GiPayMoney } from "react-icons/gi";
import img from "./main_page_bg.png"
import { FaBalanceScale } from 'react-icons/fa';
import Footer from "../components/Header_Footer/Footer"
import toast from 'react-hot-toast';

function DashboardPage() {
  const { user } = useContext(AuthContext);
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchIncomeAndExpense = async () => {
      const authToken = localStorage.getItem('authToken');
      try {
        const incomeResponse = await axios.get('https://check-returns-70te.onrender.com/income', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const expenseResponse = await axios.get('https://check-returns-70te.onrender.com/expense', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setIncomes(incomeResponse.data);
        setExpenses(expenseResponse.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIncomeAndExpense();
  }, [user]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;

    if (Array.isArray(incomes) && incomes.length > 0) {
      totalIncome = incomes.reduce((total, income) => total + income.amount, 0);
    }

    if (Array.isArray(expenses) && expenses.length > 0) {
      totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
    }

    const balance = totalIncome - totalExpense;

    setTotalIncome(totalIncome);
    setTotalExpense(totalExpense);
    setBalance(balance);
  }, [incomes, expenses]);



  if (loading) {
    toast('Loading!')
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='flex flex-col items-center bg-gradient-to-r from-[#edfced] to-[#deeef5] '>
      <div className='mt-32 bg-gradient-to-r text-[24px] font-extrabold uppercase leading-[24.2px] tracking-widest md:text-[26px] md:leading-[30px] lg:leading-[36px] bg-clip-text text-transparent from-[#3DBFF5] to-[#6F42C1] lg:text-[32px]'>
        CHECK RETURNS
      </div>
      <h1 className='text-gray-900 dark:text-dark-gray-900 text-[28px] font-extrabold leading-[34px] tracking-tight md:text-[40px] md:leading-[48px] lg:text-5xl lg:leading-[55px] w-full max-w-[740px] !whitespace-pre-line text-center mt-8'>
        Maximizing <span className='bg-gradient-to-r bg-clip-text text-transparent from-[#8A63D2] to-[#E23A3A]'>Returns,</span> <div>Minimizing <span className='bg-gradient-to-r bg-clip-text text-transparent from-[#8A63D2] to-[#E23A3A] '>Efforts</span></div>
      </h1>


      <div className='text-gray-800 dark:text-dark-gray-800 max-w-[740px] text-[16px] leading-[22px] md:text-[19px] md:leading-[26px] lg:text-[24px] lg:leading-[36px] md:font-medium text-center mt-4 px-8'>
        Maximizing financial returns with minimal input, our investment calculator streamlines the process, helping you make informed investment decisions effortlessly
      </div>

      <div className='mt-24 px-8'>
        <img src={img} height={680} width={525} alt='Main_BG' />
      </div>

      <div className='mt-20'>
        <div className='mb-4 px-4 text-center text-[28px] font-extrabold leading-8 text-gray-900 dark:text-dark-gray-900 md:text-[40px] md:leading-[48px]'>CheckReturns <span className='bg-gradient-to-r bg-clip-text text-transparent from-[#E23A3A] to-[#E58A00]'>Services</span></div>
        <div className='flex justify-center mt-10'>
          <div className='flex flex-wrap justify-center sm:justify-around lg:w-10/12 xl:w-11/12'>
            <div className='relative border-2 z-10 flex transform-gpu cursor-pointer flex-col rounded-2xl bg-white p-4 shadow-lg gradient-border-2 hover:border-gradient-tl-light-blue-white lg:max-w-[325px] m-5 sm:w-[280px] lg:w-[300px] xl:w-[320px]'>
              <div className='h-[150px] w-full rounded object-cover flex justify-center items-center text-[#E23A3A]'>
                <GiReceiveMoney size={80} />
              </div>
              <div className="tracking-tight my-3 font-inter text-2xl font-semibold leading-6 text-gray-800 capitalize text-center">Income Manager</div>
              <div className='blue-link mb-5 text-base font-normal leading-[22px] text-gray-500'>Optimize earnings, track income sources, and visualize growth with an intuitive Income Manager for financial success.</div>

              <a href="/income" className='text-center no-underline text-black border-2 px-3 py-2 rounded-lg text-lg hover:bg-blue-200 transition duration-500 select-none'>Income</a>
            </div>
            <div className='relative border-2 z-10 flex transform-gpu cursor-pointer flex-col rounded-2xl bg-white p-4 shadow-lg gradient-border-2 hover:border-gradient-tl-light-blue-white lg:max-w-[325px] m-5 sm:w-[280px] lg:w-[300px] xl:w-[320px]'>
              <div className='h-[150px] w-full rounded object-cover flex justify-center items-center text-[#e2d278]'>
                <GiPayMoney size={80} />
              </div>
              <div className="tracking-tight my-3 font-inter text-2xl font-semibold leading-6 text-gray-800 capitalize text-center">Expense Manager</div>
              <div className='blue-link mb-5 text-base font-normal leading-[22px] text-gray-500'>Control spending, categorize expenses, and achieve financial goals with a powerful Expense Manager for smart money management.</div>
              <a href="/expense" className='text-center no-underline text-black border-2 px-3 py-2 rounded-lg text-lg hover:bg-blue-200 transition duration-500 select-none'>Expense</a>
            </div>
            <div className='relative border-2 z-10 flex transform-gpu cursor-pointer flex-col rounded-2xl bg-white p-4 shadow-lg gradient-border-2 hover:border-gradient-tl-light-blue-white lg:max-w-[325px] m-5 sm:w-[280px] lg:w-[300px] xl:w-[320px]'>
              <div className='h-[150px] w-full rounded object-cover flex justify-center items-center text-[#E58A00]'>
                <FaBalanceScale size={80} />
              </div>
              <div className="tracking-tight my-3 font-inter text-2xl font-semibold leading-6 text-gray-800 capitalize text-center">Balance</div>
              <div className='blue-link mb-5 text-base font-normal leading-[22px] text-gray-500'>Navigate finances, monitor cash flow, and make informed decisions with a holistic Balance Tracker for financial well-being.</div>
              <a href="/balance" className='text-center no-underline text-black border-2 px-3 py-2 rounded-lg text-lg hover:bg-blue-200 transition duration-500 select-none'>Balance</a>
            </div>
          </div>
        </div>
      </div>

      <div className={`bg-gray-800 h-[350px] bg-center bg-cover mt-16 flex justify-center items-center flex-col w-full`}>
        <div className='bg-gradient-to-r text-[24px]  font-extrabold uppercase leading-[24.2px] tracking-widest md:text-[26px] md:leading-[30px] lg:leading-[36px] bg-clip-text text-transparent from-[#3DBFF5] to-[#6F42C1] lg:text-[32px]'>
          CHECK RETURNS
        </div>

        <div className='text-gray-50 sm:text-[28px] text-[20px] font-extrabold leadin-[34px] tracking-tight md:text-[40px] md:leading-[48px] lg:text-5xl lg:leading-[55px] mt-4'>
          Check your Returns today!
        </div>

        <div className='flex space-x-2 sm:w-[350px] w-[250px] justify-around mt-10'>
          <a className='w-[150px] no-underline text-center rounded-lg bg-white text-[#202020] px-3 py-2 font-semibold select-none cursor-pointer' href='/calculator'>Calculator</a>
          <a className='w-[150px] no-underline text-center rounded-lg bg-[#29abe2] text-white px-3 py-2 font-semibold select-none cursor-pointer' href='/login'>Login</a>
        </div>
      </div>

      <div className="my-8 bg-gray-400 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"></div>

      <div className={` h-[180px] flex justify-center mt-4 items-center flex-col w-full p-4 mb-8`}>
        <div className='text-[24px] font-extrabold uppercase tracking-widest text-[#29abe2]'>
          Share Your Thoughts
        </div>

        <div className='flex flex-col items-center mt-3'>
          <p className='text-[18px] text-gray-500 mb-4'>
            Discover new possibilities and share your feedback with us!
          </p>
          <a href='https://hxm3c82zmak.typeform.com/to/zsdsDUHE' className='w-[200px] no-underline text-center rounded-lg bg-[#29abe2] text-white px-4 py-2 font-semibold select-none cursor-pointer hover:bg-[#1a1a1a] transition-colors'>
            Give Feedback
          </a>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default DashboardPage;
