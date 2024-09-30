"use client";

import Image from "next/image";




const SmileySpeakNav = () => {

    return (
        <nav className="flex flex-col items-center mx-12 md:mx-0">
            {/* desktop */}
            <div className="hidden md:flex w-full items-center justify-around">

                <div className="flex items-center gap-4 cursor-not-allowed select-none"
                >
                    <Image src="/images/SmileySpeak/smileylogo.png"
                        alt="SmileySpeak Logo"
                        width={64}
                        height={64}
                    />
                    <h2 className="md:text-[32px] lg:text-[48px] text-black">SMILEY SPEAK</h2>
                </div>
                <div className="flex gap-4">
                    <div className='px-8 py-4 text-[16px] md:text-[20px] bg-white rounded-[5px] box-shadow hover:bg-[#F0F0F0] text-black cursor-not-allowed select-none'>Sign Up</div>
                    <div className='px-8 py-4 text-[16px] md:text-[20px] bg-white rounded-[5px] box-shadow hover:bg-[#F0F0F0] text-black cursor-not-allowed select-none'>Log In</div>
                </div>
            </div>
            {/* mobile */}
            <div className="md:hidden w-full flex flex-col items-end relative">
                {/* <Image src={isOpen ? "icons/cross.svg" : "/icons/hamburger.svg"}
                    alt="Hamburger Menu"
                    width={64}
                    height={64}
                    className="cursor-pointer"
                /> */}

            </div>
        </nav>
    )
}

export default SmileySpeakNav