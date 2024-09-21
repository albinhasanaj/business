"use client";
import React from 'react'
import { ImCross } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import TryForFreeBtn from './TryForFreeBtn'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image';

const Navbar = ({ handlePage2 }: { handlePage2: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`w-full z-10 fixed`}>
            <div className={`hidden md:flex justify-between items-center px-20 transition-all duration-300 py-6 bg-transparent'}`}>
                <p className="text-white text-3xl cursor-not-allowed font-bold hover:text-[rgba(255,255,255,0.8)]">NexTalk</p>
                <ul className='flex gap-6 lg:gap-10 items-center text-[#696969]'>
                    <p className="text-[1.2rem] cursor-not-allowed hover:text-[#525252]"> Home </p>
                    <p className="text-[1.2rem] cursor-not-allowed hover:text-[#525252]"> About </p>
                    <p className="text-[1.2rem] cursor-not-allowed hover:text-[#525252]"> Contact </p>
                    <p onClick={handlePage2} className="text-[1.2rem] hover:underline cursor-pointer text-white hover:text-[rgba(255,255,255,0.8)]"> Log In </p>
                    <div onClick={handlePage2}>
                        <TryForFreeBtn />
                    </div>
                </ul>
            </div>

            {/* Mobile Navbar */}
            <div className={`md:hidden flex fixed top-0 w-full transition-transform duration-300 translate-y-0'}`}>
                <div className="w-full flex items-center relative justify-between pr-2 pl-3 top-5 bg-opacity-90">
                    <Link href="/" className="text-white text-2xl font-bold">NexTalk</Link>
                    <Image
                        src={isOpen ? "/icons/NexTalk/cross.svg" : "/icons/NexTalk/burger-menu.svg"}
                        alt="Hamburger Menu"
                        width={64}
                        height={64}
                        onClick={() => setIsOpen(prev => !prev)}
                        className="cursor-pointer xs:h-[64px] xs:w-[64px] h-[48px] w-[48px]"
                    />
                    {isOpen && (
                        <div className="absolute top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-black bg-opacity-80 flex flex-col items-center justify-center overflow-hidden transition-all duration-300">
                            <ul className="flex flex-col gap-5 items-center">
                                <p onClick={handlePage2} className="text-white text-2xl hover:underline"> Home </p>
                                <p className="text-[#696969] text-2xl "> About </p>
                                <p className="text-[#696969] text-2xl "> Contact </p>
                                <p className="text-[#696969] text-2xl "> Log In </p>
                                <TryForFreeBtn />
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
