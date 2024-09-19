"use client"
import React, { useState } from 'react'

const Contact = () => {
    const [value, setValue] = useState(0);

    const handleSliderChange = (e: any) => {
        setValue(e.target.value);
    };
    return (
        <div className='h-screen flex items-center justify-center gap-48'>

            <div className='flex flex-col w-[750px] gap-10'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-white font-bold text-5xl'>Contact us</h1>
                    <p className='text-white text-2xl'>
                        Looking to get in touch? You can either fill out the form with your request or browse the contact details to choose your preferred method of contacting us.
                    </p>
                </div>
                <div className='w-[680px] h-[460px] bg-white flex items-center justify-center'>
                    <h1 className='text-black text-center text-4xl'>IMAGE FOR <br /> CONTACT FORM</h1>
                </div>
            </div>

            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-16'>
                    <input type="text" placeholder='NAME' className='bg-transparent w-[500px] border-b-[1px] border-white outline-none text-white font-semibold text-2xl placeholder:font-normal pb-2 pl-2' />
                    <input type="text" placeholder='EMAIL' className='bg-transparent w-[500px] border-b-[1px] border-white outline-none text-white font-semibold text-2xl placeholder:font-normal pb-2 pl-2' />
                    <textarea name="Comment" id="Comment" placeholder='SHARE YOUR THOUGHTS' className='bg-transparent w-[500px] border-b-[1px] border-white outline-none text-white font-semibold text-2xl placeholder:font-normal pl-2'></textarea>
                </div>
                <div className='flex flex-col gap-10'>
                    <div className='flex justify-between gap-3 items-center'>
                        <p className='text-white'>Budget:</p>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={value}
                            onChange={handleSliderChange}
                            defaultValue="0"
                            className="slider"
                            style={{ '--value': `${value}%` } as React.CSSProperties} // Update the CSS variable for the fill
                        />
                        <p className='text-white'>$$$</p>
                    </div>
                    <button className='bg-white w-[475px] h-[65px] text-black text-[16px] flex items-center justify-center font-medium rounded-full'>SHARE YOUR FEEDBACK</button>
                </div>
            </div>
        </div>
    )
}

export default Contact