"use client"
import React, { useState } from 'react'

const Contact = () => {
    const [value, setValue] = useState(0);
    const [rangeValue, setRangeValue] = useState(0);

    const handleSliderChange = (e: any) => {
        setValue(e.target.value);
        setRangeValue(e.target.value);
    };

    return (
        <div id='contact' className='h-auto min-h-screen flex items-center justify-center w-full '>
            <div className='max-w-[1440px] gap-10 md2:gap-0 w-full flex flex-col md2:flex-row items-center justify-between mx-16'>
                <div className='flex flex-col md2:w-[750px] gap-10 items-center md2:items-start md2:pt-0 pt-3'>
                    <div className='flex flex-col gap-2 items-center md2:items-start xl:w-[750px] sm:w-[500px]'>
                        <h1 className='text-white font-bold text-3xl sm:text-4xl xl:text-5xl'>Contact us</h1>
                        <p className='text-white text-[16px] sm:text-xl xl:text-2xl text-center md2:text-start'>
                            Looking to get in touch? You can either fill out the form with your request or browse the contact details to choose your preferred method of contacting us.
                        </p>
                    </div>
                    <div className='xl:w-[680px] xl:h-[460px] sm:w-[500px] sm:h-[320px] w-[300px] h-[180px] bg-white flex items-center justify-center'>
                        <h1 className='text-black text-center text-4xl'>IMAGE FOR <br /> CONTACT FORM</h1>
                    </div>
                </div>

                <div className='flex flex-col gap-10'>
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
                                    defaultValue="0"
                                    className="slider"
                                    style={{ '--value': `${value}%` } as React.CSSProperties}
                                />
                                <p className='text-white'>
                                    ${((rangeValue * 150) + 300) > 15000 ? '15000+' : ((rangeValue * 150) + 300)}
                                </p>
                            </div>
                        </div>
                        <button className='bg-white w-[300px] xs:w-[350px] xl:w-[475px] h-[65px] text-black text-[16px] flex items-center justify-center font-medium rounded-full'>SHARE YOUR FEEDBACK</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact