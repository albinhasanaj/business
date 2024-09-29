import React from 'react';
import Card from './Card';
import Button from './Button';
import { Skills } from '@/constants/skills';

const CardsContainer = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col items-center gap-20 justify-center md:mr-5'>
                {Skills.map((service, index) => (
                    <Card key={index} title={service.title} text={[service.text]} />
                ))}
            </div>
        </div>
    );
};

export default CardsContainer;
