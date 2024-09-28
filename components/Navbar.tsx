"use client";

import React, { useState, useEffect, useRef } from 'react';
import { GrLanguage } from "react-icons/gr";
import { CgMenuCheese } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(true);
    const lastScrollY = useRef<number>(0);
    const ticking = useRef<boolean>(false);

    const ignoreScroll = useRef<boolean>(false);
    const ignoreScrollTimeout = useRef<NodeJS.Timeout | null>(null);

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
        if (!ticking.current && !ignoreScroll.current) {
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

    const handleNavLinkClick = () => {
        ignoreScroll.current = true;
        if (ignoreScrollTimeout.current) {
            clearTimeout(ignoreScrollTimeout.current);
        }
        ignoreScrollTimeout.current = setTimeout(() => {
            ignoreScroll.current = false;
        }, 1000); // Adjust the duration as needed
    };

    return (
        <nav
            className={`fixed transition-all top-0 left-0 right-0 z-50 duration-300 backdrop-blur-sm ${show
                ? 'translate-y-0 bg-[rgba(0,0,0,0.3)] md:hover:bg-[rgba(0,0,0,0.5)]'
                : '-translate-y-full'
                } flex w-full items-center text-white py-4 px-8 md:px-16 justify-between`}
        >
            <span className='text-4xl font-bold tracking-wide'>
                <Link href='#home' onClick={handleNavLinkClick}>
                    <Image src="/images/logo/tachyon.png" alt="Tachyon" width={64} height={64}
                        className='cursor-pointer md:hover:scale-105 transition-transform h-[64px] w-auto'
                        unoptimized={true}
                    />
                </Link>
            </span>
            <ul className='md:gap-4 lg:gap-8 hidden md:flex select-none absolute left-[50%] px-0 -translate-x-1/2'>
                <li className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>
                    <Link href='#about' onClick={handleNavLinkClick}>About Us</Link>
                </li>
                <li className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>
                    <Link href='#projects' onClick={handleNavLinkClick}>Portfolio</Link>
                </li>
                {/* <li className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>
                    <Link href='#services'>Services</Link>
                </li> */}
                <li className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>
                    <Link href='#contact' onClick={handleNavLinkClick}>Contact</Link>
                </li>
            </ul>
            <GrLanguage
                size={32}
                className='hidden md:flex hover:text-[#41BFF5] transition-colors cursor-pointer'
            />

            {isOpen ? (
                <RxCross2
                    size={32}
                    className='md:hidden text-white cursor-pointer'
                    onClick={() => {
                        setIsOpen(false);
                    }}
                />
            ) : (
                <CgMenuCheese
                    size={32}
                    className='md:hidden text-white cursor-pointer'
                    onClick={() => setIsOpen(true)}
                />
            )}

            {isOpen && (
                <div className='md:hidden absolute top-full right-4 w-[80%] max-w-sm bg-white rounded-lg shadow-lg p-6 z-40'>
                    <ul className='flex flex-col gap-6 text-black items-start select-none'>
                        <li
                            onClick={() => {
                                setIsOpen(false);
                            }}
                            className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'
                        >
                            <Link href='#about' onClick={handleNavLinkClick}>About Us</Link>
                        </li>
                        <li
                            onClick={() => {
                                setIsOpen(false);
                            }}
                            className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'
                        >
                            <Link href='#projects' onClick={handleNavLinkClick}>Portfolio</Link>
                        </li>
                        {/* <li className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>
                            <Link href='#services'>Services</Link>
                        </li> */}
                        <li
                            onClick={() => {
                                setIsOpen(false);
                            }}
                            className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'
                        >
                            <Link href='#contact' onClick={handleNavLinkClick}>Contact</Link>
                        </li>
                        <GrLanguage
                            size={32}
                            className='mt-4 cursor-pointer text-black hover:text-[#41BFF5] transition-colors'
                        />
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
