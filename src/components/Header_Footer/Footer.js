import React from 'react';
import { FaInstagram } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"

const Footer = () => {
    return (
        <div className={`footer-containe bg-black text-white w-full`}>
            <div className='container flex flex-col sm:flex-row justify-between'>
                <div className='mb-4 sm:mb-0 mt-4'>
                    <div className='font-bold text-lg mb-2'>Quick Links</div>
                    <ul className='flex flex-col text-left'>
                        <li><a href="/" className='no-underline text-white'>Home</a></li>
                        <li><a href="/expense" className='no-underline text-white'>Expense</a></li>
                        <li><a href="/income" className='no-underline text-white'>Income</a></li>
                        <li><a href="/balance" className='no-underline text-white'>Balance</a></li>
                    </ul>
                </div>

                <div className='mb-4 sm:mb-0 mt-4 '>
                    <div className='font-bold text-lg mb-2'>Contact Us</div>
                    <p className='flex cursor-pointer'>
                        <AiOutlineMail size={20} />
                        <span className='ml-2'>Gmail</span>
                    </p>
                </div>

                <div className='mt-4'>
                    <div className='font-bold text-lg mb-2'>Social</div>
                    <div className="flex space-x-2">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='flex items-center no-underline text-white'>
                            <FaInstagram size={20} />
                            <span className='ml-2'>Instagram</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
