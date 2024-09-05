import React from 'react';
import { AboutPage } from '@/constants/text';

const About = () => {
    return (
        <div className='gap-2 py-12 sticky top-[30%]'>
            <h2 className='heading2 text-black sticky'>TERRN.DYNAMICS</h2>
            <p className='text-xl ml-2 sticky'>{AboutPage.description}</p>
        </div>
    );
};

export default About;
