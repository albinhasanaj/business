"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import "../styles/about.css";

const Card = ({ title, text }: { title: string; text: string[] }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleButton = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="relative w-[300px] xs:w-[370px] sm:w-[490px] h-auto pb-4 border-b-[#4C19AE] border-b-2">
            {/* Card content */}
            <div className="flex justify-between items-center">
                <div className='flex gap-3'>
                    <Image src="/icons/phone.svg" alt="icon" width={40} height={20} />
                    <div className={`sm:text-3xl text-2xl font-medium ${isActive ? 'gradient-text' : 'text-black'}`}>
                        {title}
                    </div>
                </div>
                <div className={`btn ${isActive ? 'active' : ''}`} onClick={toggleButton}></div>
            </div>
            <div>
                <p className={`text-lg mt-4 font-medium text-black ${isActive ? '' : 'hidden'}`}>{text}</p>
            </div>
        </div>
    );
};

export default Card;
