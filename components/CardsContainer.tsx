import React from 'react';
import Card from './Card';
import Button from './Button';
import { Skills } from '@/constants/skills';

const CardsContainer = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col items-center gap-10 justify-center md:mr-5'>
                {Skills.map((service, index) => (
                    <Card key={index} title={service.title} text={[service.text]} />
                ))}
            </div>
            <Button text="Find your goal" classes='self-center bg-gradient-to-tl from-[#3d66f5] to-[#4c19ae] text-white md:hidden mt-8' />
        </div>
    );
};

export default CardsContainer;
