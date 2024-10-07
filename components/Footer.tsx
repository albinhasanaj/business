import Link from 'next/link'
import React from 'react'
import Footerlottie from './Footerlottie'

const Footer = () => {
    return (
        <div>
            <footer className=' bg-white w-full flex justify-center rounded-t-[40px] h-[550px]'>
                <div className='flex flex-col w-full items-center'>
                    {/* Hidden div that becomes visible on hover */}

                    <div className='max-w-[1440px] flex justify-between text-black pt-[40px] pb-[10px] px-[100px] w-full text-[20px]'>
                        <div className='flex flex-col'>
                            <ul>
                                <li className='font-bold'>Navlinks</li>
                                <Link href='#about'>
                                    <li className='hover:underline cursor-pointer'>About</li>
                                </Link>
                                <Link href='#portfolio'>
                                    <li className='hover:underline cursor-pointer'>Portfolio</li>
                                </Link>
                                <Link href='#testimonials'>
                                    <li className='hover:underline cursor-pointer'>Testimonials</li>
                                </Link>
                                <Link href='#contact'>
                                    <li className='hover:underline cursor-pointer'>Contact</li>
                                </Link>
                            </ul>
                        </div>
                        <div className='flex flex-col justify-between h-full'>
                            <ul>
                                <li className='font-bold'>Terms & Policies</li>
                                <li className='hover:underline cursor-pointer'>Terms of Service</li>
                                <li className='hover:underline cursor-pointer'>Privacy</li>
                            </ul>
                        </div>
                        <div className='flex flex-col'>
                            <ul>
                                <li className='font-bold'>Social Media</li>
                                <li className='hover:underline cursor-pointer'>Instagram</li>
                                <li className='hover:underline cursor-pointer'>LinkedIn</li>
                                <li className='hover:underline cursor-pointer'>TikTok</li>
                                <li className='hover:underline cursor-pointer'>YouTube</li>
                                <li className='hover:underline cursor-pointer'>Facebook</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full rounded-t-[40px] h-full'>
                        {/* SOMETHING COOL LIKE A GIF OR AN ANIMATION OR SOMETHING LIKE THAT THATS UNIQE TO THE WEBSITE */}
                        <Footerlottie />
                    </div>
                    <div>
                        <p className='text-black text-[16px] text-center'>Tachyon © 2024</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
