import React from 'react';
import { AboutPage } from '@/constants/text';
import Button from './Button';

const About = () => {
    return (
        <div className='flex flex-col gap-6 sticky top-[35%]'>
            <h2 className='heading2 text-black'>TERRN.DYNAMICS</h2>
            <p className='text-xl ml-2 sticky w-2/3'>{AboutPage.description}</p>
            <Button text="Find your goal" classes='self-start bg-gradient-to-tl from-[#3d66f5] to-[#4c19ae] text-white' />
        </div>
    );
};

export default About;
