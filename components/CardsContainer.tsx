import React from 'react';
import Card from './Card';

const CardsContainer = () => {
    return (
        <div className='flex flex-wrap justify-end gap-4'>
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
