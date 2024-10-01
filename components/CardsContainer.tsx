import React from 'react';
import Card from './Card';
import { getSkillsData } from '@/constants/Skills'

const CardsContainer = ({ lang }: { lang: String }) => {
    const skillsData = getSkillsData({ lang });
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col items-center gap-20 justify-center md:mr-5'>
                {skillsData.map((skill, index) => (
                    <Card key={index} title={skill.title} text={skill.text} />
                ))}
            </div>
        </div>
    );
};

export default CardsContainer;
