import React from 'react';
import Card from './Card';

const CardsContainer = () => {
    return (
        <div className='grid grid-cols-2 gap-4 mt-12'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export default CardsContainer;
