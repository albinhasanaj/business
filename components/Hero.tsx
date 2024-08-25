import React from 'react';

const Hero = () => {
    return (
        <section className="flex flex-col gap-4 items-center justify-center size-full px-4 md:items-start md:px-8 lg:px-16">
            <h1 className='heading1 tracking-tight text-center md:text-left text-4xl sm:text-5xl md:text-5xl lg:text-6xl'>
                Web Development & Design <br /> Launches brands to new <span className='text-[#41BFF5]'>heights</span>
            </h1>
            <p className='text-xl sm:text-2xl md:text-2xl lg:text-[32px] tracking-tighter text-[#CACACA] text-center md:text-left'>
                Websites tailored to you
            </p>
            <button className='text-lg sm:text-xl md:text-xl lg:text-[24px] text-[#4C19AE] px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white rounded-[100px]'>
                Schedule a meeting
            </button>

            {/* Top left circle on mobile, moves to the left on larger screens */}
            <div className='size-24 md:size-40 bg-[#40BFF5] rounded-full absolute left-[5%] top-[15%] md:left-[10%] md:top-[10%] blur-[30px] md:blur-[50px]' />

            {/* Bottom right circle on mobile, moves to the right on larger screens */}
            <div className='size-24 md:size-40 bg-[#40BFF5] rounded-full absolute right-[5%] bottom-[5%] md:right-[10%] md:bottom-auto md:left-auto md:top-[10%] blur-[30px] md:blur-[50px]' />
        </section>
    );
}

export default Hero;
