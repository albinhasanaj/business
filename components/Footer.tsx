import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-white w-full h-[250px] flex justify-center rounded-t-[40px]'>
            <div className='max-w-[1440px] flex justify-between  text-black pt-[40px] pb-[10px] px-[100px] w-full text-[20px]'>
                <div className='flex flex-col'>
                    <ul>
                        <li className='font-bold'>Navlinks</li>
                        <Link href='#about'>
                            <li className='hover:underline'>About</li>
                        </Link>
                        <Link href='#portfolio'>
                            <li className='hover:underline'>Portfolio</li>
                        </Link>
                        <Link href='#testimonials'>
                            <li className='hover:underline'>Testimonials</li>
                        </Link>
                        <Link href='#contact'>
                            <li className='hover:underline'>Contact</li>
                        </Link>
                    </ul>
                </div>
                <div className='flex flex-col justify-between h-full'>
                    <ul>
                        <li className='font-bold'>Terms & Policies</li>
                        <li>Terms of Service </li>
                        <li>Privacy</li>
                    </ul>
                    <p className='text-center'>Tachyon © 2024</p>
                </div>
                <div className='flex flex-col'>
                    <ul>
                        <li className='font-bold'>Social media</li>
                        <li>Instagram</li>
                        <li>Linkedin</li>
                        <li>TikTok</li>
                        <li>YouTube</li>
                        <li>Facebook</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer