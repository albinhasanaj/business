"use client";

import React, { useState, useEffect, useRef } from 'react';
import { GrLanguage } from "react-icons/gr";
import { CgMenuCheese } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation'; // Use next/navigation

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(true);
    const lastScrollY = useRef<number>(0);
    const ticking = useRef<boolean>(false);

    const ignoreScroll = useRef<boolean>(false);
    const ignoreScrollTimeout = useRef<NodeJS.Timeout | null>(null);

    const router = useRouter();
    const params = useParams();
    const lang = params.lang || 'en';

    const [language, setLanguage] = useState(lang);


    let translations;

    //if lang == sv load locales/sv/lang.js else load locales/en/lang.js
    if (lang === 'sv') {
        translations = require('@/locales/sv/lang.js');
    } else {
        translations = require('@/locales/en/lang.js');
    }

    const changeLanguage = (lng: string) => {
        setLanguage(lng);
        setTimeout(() => {
            router.push(`/${lng}`);
        }, 150);
    };

    const handleScroll = () => {
        if (ignoreScroll.current) return; // Add this check

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
                        className='cursor-pointer md:hover:scale-105 transition-transform h-[48px] md:h-[64px] w-auto'
                        unoptimized={true}
                    />
                </Link>
            </span>
            <ul className='md:gap-4 lg:gap-8 hidden md:flex select-none absolute left-[50%] px-0 -translate-x-1/2'>
                <li className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>
                    <Link href="#about">{translations.navbar.about}</Link>
                </li>
                <li className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>
                    <Link href="#projects">{translations.navbar.portfolio}</Link>
                </li>
                {/* <li className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>
                    <Link href='#services'>Services</Link>
                </li> */}
                <li className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'>
                    <Link href="#contact">{translations.navbar.contact}</Link>
                </li>
            </ul>
            <div className="hidden md:flex gap-4 items-center">

                <div className="flex items-center bg-[rgba(255,255,255,0.1)] rounded-full p-1 cursor-pointer">
                    <span
                        className={`px-4 py-1 rounded-full transition-colors duration-300 text-lg ${language === 'en' ? 'bg-[#41BFF5] text-white' : 'text-white hover:text-[#41BFF5]'
                            }`}
                        onClick={() => {
                            changeLanguage('en');
                        }}
                    >
                        en
                    </span>
                    <span
                        className={`px-4 py-1 rounded-full transition-colors duration-300 text-lg ${language === 'sv' ? 'bg-[#41BFF5] text-white' : 'text-white hover:text-[#41BFF5]'
                            }`}
                        onClick={() => {
                            changeLanguage('sv');
                        }}
                    >
                        sv
                    </span>
                </div>
            </div>
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
                <div className='md:hidden absolute top-full right-4 w-[80%] max-w-sm rounded-lg shadow-lg p-6 z-40 bg-[rgba(0,0,0,0.5)] text-white'>
                    <ul className='flex flex-col gap-6 items-start select-none'>
                        <li
                            onClick={() => {
                                setIsOpen(false);
                            }}
                            className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'
                        >
                            <Link href='#about' onClick={handleNavLinkClick}>{translations.navbar.about}</Link>
                        </li>
                        <li
                            onClick={() => {
                                setIsOpen(false);
                            }}
                            className='text-lg font-medium hover:text-[#41BFF5] transition-colors cursor-pointer'
                        >
                            <Link href='#projects' onClick={handleNavLinkClick}>{translations.navbar.portfolio}</Link>
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
                            <Link href='#contact' onClick={handleNavLinkClick}>{translations.navbar.contact}</Link>
                        </li>
                        <div className="md:hidden flex gap-4 items-center">

                            <div className="flex items-center bg-[rgba(255,255,255,0.1)] rounded-full p-1 cursor-pointer">
                                <span
                                    className={`px-4 py-1 rounded-full transition-colors duration-300 text-lg ${language === 'en' ? 'bg-[#41BFF5] text-white' : 'text-white hover:text-[#41BFF5]'
                                        }`}
                                    onClick={() => {
                                        changeLanguage('en');
                                    }}
                                >
                                    en
                                </span>
                                <span
                                    className={`px-4 py-1 rounded-full transition-colors duration-300 text-lg ${language === 'sv' ? 'bg-[#41BFF5] text-white' : 'text-white hover:text-[#41BFF5]'
                                        }`}
                                    onClick={() => {
                                        changeLanguage('sv');
                                    }}
                                >
                                    sv
                                </span>
                            </div>
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
