// components/Footerlottie.jsx
"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import animationData from '@/public/lotties/car1.json';

// Dynamically import 'lottie-react' to prevent SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const Footerlottie = () => {
    return (
        <div className='absolute w-full'>
            <div className='animate-car-move w-full absolute top-0 left-0 '>
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    style={{ height: 300, width: 300 }}
                // className='cursor-pointer' 
                // Vi borde ha så när man klickar på den så händer något
                />
            </div>
        </div>
    );
};

export default Footerlottie;
