"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';  // Import framer-motion
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
                    <Image
                        src="/icons/phone.svg"
                        alt="icon"
                        width={40}
                        height={20}
                        style={{ width: "auto", height: "100%" }} // Set one dimension to auto to maintain aspect ratio
                    />
                    <div className={`sm:text-3xl text-2xl font-medium ${isActive ? 'gradient-text' : 'text-black'}`}>
                        {title}
                    </div>
                </div>
                <div className={`btn ${isActive ? 'active' : ''}`} onClick={toggleButton}></div>
            </div>

            {/* Animate the dropdown using framer-motion */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <p className="text-lg mt-4 font-medium text-black">
                    {text}
                </p>
            </motion.div>
        </div>
    );
};

export default Card;
