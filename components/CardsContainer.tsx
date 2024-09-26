import React from 'react';
import Card from './Card';
import { Services } from '@/constants/services';
import Button from './Button';

const CardsContainer = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-wrap md:justify-end gap-4 justify-center mr-5'>
                {Services.map((service, index) => (
                    <Card key={index} title={service.title} tags={service.tags} />
                ))}
            </div>
            <Button text="Find your goal" classes='self-center bg-gradient-to-tl from-[#3d66f5] to-[#4c19ae] text-white md:hidden mt-8' />
        </div>
    );
};

export default CardsContainer;
