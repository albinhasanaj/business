import React from 'react';
import { AboutPage } from '@/constants/text';
import Button from './Button';

const About = () => {
    return (
        <div className='flex flex-col items-center text-center gap-6 sticky top-[20%]'>
            <h2 className='md:heading2 text-4xl font-bold text-black'>Tachyon</h2>
            <p className='md:text-xl text-[16px] sticky w-2/3'>{AboutPage.description}</p>
            <div>
            <Button text="Find your goal" classes='self-start bg-gradient-to-tl from-[#3d66f5] to-[#4c19ae] text-white' />
            </div>
        </div>
    );
};

export default About;
