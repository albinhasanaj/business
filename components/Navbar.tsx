import React from 'react'
import { GrLanguage } from "react-icons/gr";

const Navbar = () => {
    return (
        <nav className='flex w-full max-w-[1440px] justify-between items-center relative text-white py-6'>
            <span className='text-[32px] font-bold'>TERRN.DYNAMICS</span>
            <ul className='flex gap-8'>
                <li className='text-lg font-medium'>About Us</li>
                <li className='text-lg font-medium'>Portfolio</li>
                <li className='text-lg font-medium'>Services</li>
                <li className='text-lg font-medium'>Contact</li>
            </ul>
            <GrLanguage size={48} />
        </nav>
    )
}

export default Navbar
