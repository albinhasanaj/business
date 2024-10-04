"use client";
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import svTranslations from '@/locales/sv/lang.js';
import enTranslations from '@/locales/en/lang.js';
import Wave from 'react-wavify';

const Hero = () => {
    const params = useParams();
    const lang = params.lang || 'en';

    const translations = lang === 'sv' ? svTranslations : enTranslations;

    return (
        <div>
            <section className='w-full h-screen bg-black flex flex-col gap-10 items-center justify-center '>
                <div className='flex flex-col items-center gap-5'>
                    <h1 className='w-[1000px] text-4xl text-center text-white'>
                        {translations.projects.message1} <span className='underline'>{translations.projects.span}</span> {translations.projects.message2}
                    </h1>
                    <Link target='_blank' href='https://nextalk-demo.vercel.app/'>
                        <p className='text-xl text-gray-300 cursor-pointer font-bold hover:text-white hover:underline'>
                            {translations.projects.link}
                        </p>
                    </Link>
                </div>
            </section>
            <Wave
                fill="#fff"
                paused={false}
                style={{
                    display: "flex",
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                }}
                options={{
                    height: 20,
                    amplitude: 30,
                    speed: 0.15,
                    points: 5,
                }}
            />
            <section className="w-full h-auto bg-white relative  pb-10 px-20">
                <div className="flex justify-start w-full">
                    <div className="text-black flex flex-col gap-3 max-w-lg">
                        <h1 className="text-3xl font-semibold">{translations.projects.nextalk.project_overview.title}</h1>
                        <p>{translations.projects.nextalk.project_overview.description}</p>
                    </div>
                </div>

                <div className="flex justify-end w-full">
                    <div className="text-black flex flex-col gap-3 max-w-lg">
                        <h1 className="text-3xl font-semibold">{translations.projects.nextalk.scope_and_limitations.title}</h1>
                        <p>{translations.projects.nextalk.scope_and_limitations.description}</p>
                        <ul className='flex flex-col gap-3'>
                            <li>
                                <span className='font-bold'>
                                    {translations.projects.nextalk.scope_and_limitations.li1.span}
                                </span>
                                <p>{translations.projects.nextalk.scope_and_limitations.li1.text}</p>
                            </li>
                            <li>
                                <span className='font-bold'>
                                    {translations.projects.nextalk.scope_and_limitations.li2.span}
                                </span>
                                <p>{translations.projects.nextalk.scope_and_limitations.li2.text}</p>
                            </li>
                            <li>
                                <span className='font-bold'>
                                    {translations.projects.nextalk.scope_and_limitations.li3.span}
                                </span>
                                <p>{translations.projects.nextalk.scope_and_limitations.li3.text}</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-start w-full">
                    <div className="text-black flex flex-col gap-3 max-w-lg">
                        <h1 className="text-3xl font-semibold">{translations.projects.nextalk.development_process.title}</h1>
                        <p>{translations.projects.nextalk.development_process.description}</p>
                    </div>
                </div>

                <div className="flex justify-end w-full">
                    <div className="text-black flex flex-col gap-3 max-w-lg">
                        <h1 className="text-3xl font-semibold">{translations.projects.nextalk.key_features.title}</h1>
                        <p>{translations.projects.nextalk.key_features.description}</p>
                        <ul className='flex flex-col gap-3'>
                            <li>
                                <span className='font-bold'>
                                    {translations.projects.nextalk.key_features.li1.span}
                                </span>
                                <p>{translations.projects.nextalk.key_features.li1.text}</p>
                            </li>
                            <li>
                                <span className='font-bold'>
                                    {translations.projects.nextalk.key_features.li2.span}
                                </span>
                                <p>{translations.projects.nextalk.key_features.li2.text}</p>
                            </li>
                            <li>
                                <span className='font-bold'>
                                    {translations.projects.nextalk.key_features.li3.span}
                                </span>
                                <p>{translations.projects.nextalk.key_features.li3.text}</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-start w-full">
                    <div className="text-black flex flex-col gap-3 max-w-lg">
                        <h1 className="text-3xl font-semibold">{translations.projects.nextalk.target_audience.title}</h1>
                        <p>{translations.projects.nextalk.target_audience.description}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
