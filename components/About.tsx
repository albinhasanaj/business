import React from 'react';
import Button from './Button';

const About = ({ lang }: { lang: String }) => {
    let translations;
    if (lang === 'sv') {
        translations = require('@/locales/sv/lang.js');
    } else {
        translations = require('@/locales/en/lang.js');
    }
    return (
        <div className='flex flex-col gap-6 items-center md:w-2/3 md:items-start sticky top-[35%] mx-4'>
            <h2 className='md:heading2 text-4xl font-bold text-black'>Tachyon</h2>
            <p className='md:text-xl text-[16px] text-gray-600 sticky w-2/3 md:w-full text-center md:text-start'>{translations.about.description}</p>
            <div>
            </div>
        </div>
    );
};

export default About;
