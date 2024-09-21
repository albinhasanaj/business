"use client";

import React, { useState } from 'react';
import { GrLanguage } from "react-icons/gr";
import { CgMenuCheese } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <nav className='flex w-full max-w-[1440px] justify-between items-center relative text-white py-6 px-4 md:px-8 z-[10]'>
            <span className='text-4xl font-bold tracking-wide'>Tachyon</span>
            <ul className='md:gap-4 lg:gap-8 hidden md:flex select-none'>
                <li className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>About Us</li>
                <li className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>Portfolio</li>
                <li className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>Services</li>
                <li className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>Contact</li>
            </ul>
            <GrLanguage size={32} className='hidden md:flex hover:text-[#41BFF5] transition-colors cursor-pointer' />

            {isOpen ? (
                <RxCross2 size={32} className='md:hidden text-white cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
            ) : (
                <CgMenuCheese size={32} className='md:hidden text-white cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
            )}

            {isOpen && (
                <div className='md:hidden absolute top-20 right-4 w-[80%] max-w-sm bg-white rounded-lg shadow-lg p-6 z-10'>
                    <ul className='flex flex-col gap-6 text-black items-start select-none'>
                        <li className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>About Us</li>
                        <li className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>Portfolio</li>
                        <li className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>Services</li>
                        <li className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>Contact</li>
                        <GrLanguage size={32} className='mt-4 cursor-pointer text-black hover:text-[#41BFF5] transition-colors' />
                    </ul>
                </div>
            )}

        </nav>
    );
};

export default Navbar;
