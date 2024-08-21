import React from 'react'

const Hero = () => {
    return (
        <section className="flex flex-col gap-4 items-start justify-center size-full px-4">
            <h1 className='heading1 tracking-tight'>Innovative Design <br /> Launches brands to new <span className='text-[#41BFF5]'>heights</span></h1>
            <p className='text-[32px] tracking-tighter text-[#CACACA]'>Websites tailored to you</p>
            <button className='text-[24px] text-[#4C19AE] px-8 py-4 bg-white rounded-[100px]'>
                Schedule a meeting
            </button>

            <div className='size-32 bg-[#40BFF5] rounded-full absolute left-[10%] top-[10%] blur-[50px]' />
            <div className='size-32 bg-[#40BFF5] rounded-full absolute right-[10%] top-[10%] blur-[50px]' />
        </section>
    )
}

export default Hero