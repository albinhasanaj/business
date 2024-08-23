import React from 'react'
import { AboutPage } from '@/constants/text'

const About = () => {
    return (
        <section className='flex flex-col items-center gap-6 py-12'>
            <h2 className='heading2 text-black'>Who are we?</h2>
            <p className='text-xl max-w-[1000px] text-center'>{AboutPage.description}</p>
        </section>
    )
}

export default About