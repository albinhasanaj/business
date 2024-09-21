import React from 'react';
import Card from './Card';
import { Services } from '@/constants/services';

const CardsContainer = () => {
    return (
        <div className='flex flex-wrap md:justify-end gap-4 justify-center'>
            {Services.map((service, index) => (
                <Card key={index} title={service.title} tags={service.tags} />
            ))}
        </div>
    );
};

export default CardsContainer;
