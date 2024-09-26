"use client";

import React, { useState, useEffect, useRef } from 'react';
import { GrLanguage } from "react-icons/gr";
import { CgMenuCheese } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(true);
    const lastScrollY = useRef<number>(0);
    const ticking = useRef<boolean>(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
            setShow(false);
        } else if (currentScrollY < lastScrollY.current) {
            setShow(true);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
    };

    const onScroll = () => {
        if (!ticking.current) {
            window.requestAnimationFrame(handleScroll);
            ticking.current = true;
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', onScroll);

            return () => {
                window.removeEventListener('scroll', onScroll);
            };
        }
    }, []);

    return (
        <nav
            className={`fixed  transition-all top-0 left-0 right-0 z-50 duration-200 ${show ? 'translate-y-0 bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.5)]' : '-translate-y-full'
                } flex w-full max-w-[1440px] justify-between items-center text-white py-4 px-4 md:px-8`}
        >
            <span className='text-4xl font-bold tracking-wide'>Tachyon</span>
            <ul className='md:gap-4 lg:gap-8 hidden md:flex select-none'>
                <li className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>
                    <Link href='#about'>About Us</Link>
                </li>
                <li className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>
                    <Link href='#projects'>Portfolio</Link>
                </li>
                {/* <li className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>
                    <Link href='#services'>Services</Link>
                </li> */}
                <li className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>
                    <Link href='#contact'>Contact</Link>
                </li>
            </ul>
            <GrLanguage size={32} className='hidden md:flex hover:text-[#41BFF5] transition-colors cursor-pointer' />

            {isOpen ? (
                <RxCross2 size={32} className='md:hidden text-white cursor-pointer' onClick={() => setIsOpen(false)} />
            ) : (
                <CgMenuCheese size={32} className='md:hidden text-white cursor-pointer' onClick={() => setIsOpen(true)} />
            )}

            {isOpen && (
                <div className='md:hidden absolute top-full right-4 w-[80%] max-w-sm bg-white rounded-lg shadow-lg p-6 z-40'>
                    <ul className='flex flex-col gap-6 text-black items-start select-none'>
                        <li
                            onClick={() => setIsOpen(false)}
                            className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>
                            <Link href='#about'>About Us</Link>
                        </li>
                        <li
                            onClick={() => setIsOpen(false)}
                            className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>
                            <Link href='#projects'>Portfolio</Link>
                        </li>
                        {/* <li className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>
                            <Link href='#services'>Services</Link>
                        </li> */}
                        <li
                            onClick={() => setIsOpen(false)}
                            className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>
                            <Link href='#contact'>Contact</Link>
                        </li>
                        <GrLanguage size={32} className='mt-4 cursor-pointer text-black hover:text-[#41BFF5] transition-colors' />
                    </ul>
                </div>
            )}

        </nav>
    );
};

export default Navbar;
