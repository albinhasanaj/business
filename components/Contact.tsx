"use client"
import React, { useState } from 'react'
import "@/styles/budgetslider.css"
import Image from 'next/image';
import { motion } from 'framer-motion';

const planeVariants = {
    initial: { scale: 1, opacity: 1, x: 0, y: 0 },
    flyAway: {
        scale: [1, 3.5],
        x: [0, -200, 100, 1000],
        y: [0, -50, -10, -250],
        opacity: [1, 1, 1, 0],
        rotate: [0, 25, 0, 30],
        transition: {
            duration: 3,
            ease: "easeInOut"
        }
    },
    fadeBack: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: 3.2
        }
    }
};

const Contact = () => {
    const [value, setValue] = useState(0); // slider value
    const [rangeValue, setRangeValue] = useState(0); // computed dollar amount
    const [customValue, setCustomValue] = useState<number | null>(null); // for custom input
    const [isEditing, setIsEditing] = useState(false); // toggle for input/edit state
    const [planeAnimation, setPlaneAnimation] = useState(false); // form submit state

    const handleSliderChange = (e: any) => {
        const newValue = Number(e.target.value);
        setValue(newValue);
        setRangeValue(newValue);
        setCustomValue((newValue * 150) + 300); // update custom input to reflect slider value in dollars
    };

    const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCustomValue = Number(e.target.value);
        setCustomValue(newCustomValue);
        const sliderEquivalent = (newCustomValue - 300) / 150; // convert dollar amount to slider range
        if (sliderEquivalent >= 0 && sliderEquivalent <= 100) {
            setValue(sliderEquivalent); // set slider value to match the custom input
            setRangeValue(sliderEquivalent);
        }
    };

    const handleCustomSubmit = () => {
        if (customValue && customValue >= 300 && customValue <= 15000) {
            setRangeValue((customValue - 300) / 150); // convert custom value to slider range
            setValue((customValue - 300) / 150); // update slider position
        } else if (customValue !== null && customValue > 15000) {
            setRangeValue((15000 - 300) / 150);
            setValue((15000 - 300) / 150); // ensure slider stays at max
            setCustomValue(15000); // max out at 15000+
        } else {
            alert('Value must be at least 300');
            setCustomValue(300); // autocomplete to minimum if invalid
            setRangeValue(0); // reset slider to minimum
            setValue(0);
        }
        setIsEditing(false);
    };

    const handleSubmit = () => {
        setPlaneAnimation(true)
        console.log('Form submitted!');

    };

    const displayedValue = (rangeValue * 150) + 300 > 14999 ? '15000+' : (rangeValue * 150) + 300;

    return (
        <div className='flex justify-center'>
            <div id='contact' className='h-auto min-h-screen flex flex-col md2:flex-row items-center justify-between max-w-[1440px] mb-[200px]'>

                <div className='gap-10 md2:gap-[140px] flex flex-col items-start justify-between'>
                    <div className='flex flex-col md2:w-[750px] gap-10 items-center md2:items-start md2:pt-0 pt-3'>
                        <div className='flex flex-col gap-2 items-center md2:items-start xl:w-[750px] sm:w-[500px]'>
                            <h1 className='text-white font-bold text-3xl sm:text-4xl'>Contact us</h1>
                            <p className='text-white text-[16px] sm:text-xl text-center md2:text-start'>
                                Looking to get in touch? You can either fill out the form with your request or browse the contact details to choose your preferred method of contacting us.
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-10 w-full items-center md2:items-start'>
                        <div className='flex flex-col gap-16'>
                            <input type="text" placeholder='NAME' className='bg-transparent xl:w-[500px] xs:w-[350px] w-[300px] border-b-[1px] border-white outline-none text-white font-semibold text-xl xl:text-2xl placeholder:font-normal pb-2 pl-2' />
                            <input type="text" placeholder='EMAIL' className='bg-transparent xl:w-[500px] xs:w-[350px] w-[300px] border-b-[1px] border-white outline-none text-white font-semibold text-xl xl:text-2xl placeholder:font-normal pb-2 pl-2' />
                            <textarea name="Comment" id="Comment" placeholder='SHARE YOUR THOUGHTS' className='bg-transparent xl:w-[500px] xs:w-[350px] w-[300px] border-b-[1px] border-white outline-none text-white font-semibold text-xl xl:text-2xl placeholder:font-normal pl-2'></textarea>
                        </div>
                        <div className='flex flex-col gap-10'>
                            <div className='flex flex-col xs:flex-row justify-between gap-3 items-center'>
                                <p className='text-white'>Budget:</p>
                                <div className='flex w-full gap-3'>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={value}
                                        onChange={handleSliderChange}
                                        className="slider"
                                        style={{ '--value': `${value}%` } as React.CSSProperties}
                                    />
                                    {isEditing ? (
                                        <div className='flex items-center'>
                                            <span className='text-white'>$</span>
                                            <input
                                                type="text"
                                                value={customValue || ''}
                                                onChange={handleCustomChange}
                                                onBlur={handleCustomSubmit}
                                                className="text-white bg-transparent w-[50px] border-none outline-none"
                                            />
                                        </div>
                                    ) : (
                                        <p
                                            className='text-white cursor-pointer'
                                            onClick={() => setIsEditing(true)}
                                        >
                                            ${displayedValue}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <button
                                onClick={handleSubmit}
                                className={`bg-white w-[300px] xs:w-[350px] xl:w-[475px] h-[65px] text-black text-[16px] flex items-center justify-center font-medium rounded-full relative`}
                            >
                                SHARE YOUR FEEDBACK

                                <motion.div
                                    className='absolute right-[10%]'
                                    variants={planeVariants}
                                    initial="initial"
                                    animate={planeAnimation ? "flyAway" : "fadeBack"}
                                    onAnimationComplete={() => setPlaneAnimation(false)} // Reset after animation
                                >
                                    <Image
                                        src='/images/TachyonIllustration.png'
                                        width={800}
                                        height={180}
                                        alt='contact'
                                        className='w-[64px] h-auto'
                                    />
                                </motion.div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
