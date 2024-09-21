"use client"
import NexTalkChatBubble from '@/components/NexTalkChatBubble';
import NexTalkChatNavbar from '@/components/NexTalkChatNav';
import NexTalkNav from '@/components/NexTalkNav';
import NexTalkSearchbar from '@/components/NexTalkSearchbar';
import TryForFreeBtn from '@/components/TryForFreeBtn';
import Image from 'next/image'
import { Fragment, useState } from 'react';

const Hero = () => {
    const [OBSpage, setOBSpage] = useState(true);
    const [page2, setPage2] = useState(true);
    const [chatSelected, setChatSelected] = useState(true)

    const handleChatSelected = () => {
        setChatSelected(!chatSelected)
    }
    const handleOBSpage = () => {
        setOBSpage(!OBSpage);
    }

    const handlePage2 = () => {
        setPage2(!page2);
    }
    return (
        <div>
            {OBSpage ? (
                <section className='w-full h-screen bg-black flex flex-col gap-10 items-center justify-center pt-[200px]'>
                    <div className='flex flex-col items-center gap-5'>
                        <h1 className='w-[1000px] text-4xl text-center text-white'>OBS: THIS PREVIEW OF NEXTALK IS ONLY A <span className='underline'>PREVIEW</span> SO ALL FEATURES WON'T BE WORKING AS INTENDED!</h1>
                        <p onClick={handleOBSpage} className='text-xl text-gray-300 cursor-pointer font-bold hover:text-white hover:underline'>I understand and wish to proceed!</p>
                    </div>
                    <p className='text-gray-500 pt-[200px]'>For the full project, visit <span className='font-bold cursor-pointer'>[URL FOR THE PROJECT]</span></p>
                </section>
            ) : (
                <div>
                    {page2 ? (
                        <section className="w-full h-screen bg-black">
                            <NexTalkNav handlePage2={handlePage2} />
                            {/* GRID IMAGE */}
                            <div className='absolute inset-0 '>
                                <Image
                                    src='/images/NexTalk/grid.png'
                                    layout='fill'
                                    objectFit='cover'
                                    objectPosition='center'
                                    alt='hero'
                                    className='w-full h-screen opacity-20 image__gradient'
                                />
                            </div>

                            {/* HERO TEXT */}
                            <div className='hidden md2:flex relative w-full h-full items-center justify-center'>
                                <div className='max-w-[1440px] flex items-center w-full justify-between px-20 mb-20'>
                                    <div>
                                        <Image
                                            src='/images/NexTalk/chatpreview.png'
                                            width={640}
                                            height={500}
                                            alt='hero-text'
                                            className='hidden md2:flex lg2:w-[640px] lg2:h-[500px] w-[448px] h-[350px] hover:scale-105 transform transition duration-300 ease-in-out'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <div>
                                            <h1 className='text-white font-bold text-4xl xl:text-5xl '>REAL TIME <br />COMMUNICATION</h1>
                                            <p className='text-white text-[1rem] xl:text-xl font-light'>From anywhere, with anyone.</p>
                                        </div>
                                        <div onClick={handlePage2}>
                                            <TryForFreeBtn />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* MOBILE */}
                            <div className='md2:hidden relative w-full h-screen flex justify-center pt-[7rem]'>
                                <div className='max-w-[930px] flex items-center w-full flex-col mt-10'>
                                    <div className='flex flex-col gap-4'>
                                        <div className='flex flex-col items-center'>
                                            <h1 className=' text-white font-bold text-center text-[1.5rem] leading-7 xs:text-[2rem] xs:leading-9'>REAL TIME <br />COMMUNICATION</h1>
                                            <p className='text-[0.75rem] xs:text-[1rem]'>From anywhere, with anyone.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Image
                                            src='/images/NexTalk/chatpreview.png'
                                            width={358.4}
                                            height={280}
                                            alt='hero-text'
                                            className='md2:hidden '
                                        />
                                    </div>
                                    <div>
                                        <TryForFreeBtn />
                                    </div>
                                </div>
                            </div>
                        </section>
                    ) : (
                        <section className='w-full h-screen bg-nasa bg-cover bg-no-repeat'>
                            <div
                                className="w-full flex flex-col"
                            >
                                <NexTalkChatNavbar />
                                <main className="flex h-[calc(100vh-180px)] md:h-screen w-full items-center justify-center">
                                    {/* MAIN COMPONENET SIDEBAR */}
                                    <div className={`w-[300px] sm:w-[350px] h-[500px] sm:h-[600px] md:flex lg:w-[350px] md:h-[600px] lg:h-[750px] rounded-l-3xl md:rounded-tr-none md:rounded-br-none rounded-bl-3xl flex-shrink-0 border border-white/54 bg-white/7 backdrop-blur-[7.5px] flex-col justify-between bg-[rgba(255,255,255,0.07)] gap-10`}
                                    >
                                        <NexTalkSearchbar />
                                        {/* LEFT SIDE */}
                                        <div className='flex flex-col h-full gap-10 scrollbar mb-auto overflow-x-hidden overflow-y-auto'>
                                            <Fragment>
                                                <div className='flex flex-col items-center w-full gap-4'>
                                                    <div className="flex justify-between items-center w-[90%]" >

                                                        <div onClick={handleChatSelected} className='flex items-center hover:bg-white hover:bg-opacity-10 hover:rounded-full w-full cursor-pointer'>
                                                            <div className='relative mr-3'>
                                                                <Image src="/images/NexTalk/ProfilePic.png" alt="profile" width={50} height={50} className="rounded-full" />
                                                                <Fragment>
                                                                    <span className="bg-green-500 rounded-full h-3 w-3 absolute bottom-0 right-0" />
                                                                </Fragment>
                                                            </div>
                                                            <div className='flex flex-col'>
                                                                <div className='flex items-center text-white text-nowrap relative'>
                                                                    <span>
                                                                        User
                                                                    </span>
                                                                </div>
                                                                <span className={`text-sm text-gray-500`}>
                                                                    Tap to chat
                                                                </span>

                                                            </div>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <div className="dropdown">
                                                                <label tabIndex={0} className='btn m-1 bg-transparent border-none hover:bg-transparent'>
                                                                    <Image src="/icons/NexTalk/settings.svg" alt="user settings" width={30} height={20} className="cursor-not-allowed" />
                                                                </label>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='w-[70%] h-px bg-gray-600' />
                                                </div>
                                            </Fragment>
                                        </div>
                                        <div className='flex justify-between mx-10 my-5'>
                                            <Image
                                                src='/icons/NexTalk/settings.svg'
                                                width={40}
                                                height={40}
                                                alt='Settings Icon'
                                                className='cursor-not-allowed'
                                            />
                                            <Image
                                                src='/icons/NexTalk/logout.svg'
                                                width={40}
                                                height={40}
                                                alt='Logout Icon'
                                                className='cursor-not-allowed'
                                            />
                                        </div>
                                    </div >


                                    {/* MAIN COMPONENT */}
                                    <div className={` w-[300px] sm:w-[350px] h-[500px] sm:h-[600px] md:w-[400px] md:flex rounded-3xl md:rounded-r-3xl md:rounded-tl-none md:rounded-bl-none md:rounded-tr-3xl md:w[500px] lg:w-[600px md:h-[600px] lg:h-[750px] lg:w-[600px] flex-shrink-0 rounded-r-3xl rounded-tr-3xl border border-white/54 bg-white/7 backdrop-blur-[30px] items-center bg-[rgba(255,255,255,0.1)] flex-col text-white`}>
                                        <header className='py-4 px-4 text-[14px] md:text-[16px] bg-[#424141] w-full md:rounded-tl-none rounded-bl-none rounded-tr-3xl flex justify-between items-center rounded-tl-3xl space-x-2'>
                                            <span>01/01/2024</span>
                                            <span className='text-[#C0C0C0] font-bold overflow-hidden whitespace-nowrap overflow-ellipsis'>Talking to: User</span>
                                            <span>00:00</span>
                                        </header>

                                        {chatSelected ? (
                                            <div className='h-full flex justify-center items-center flex-col gap-8'>
                                                <h1 className='text-white text-[24px] md:text-[40px] not-italic  tracking-[2px] font-bold text-center leading-tight'>SELECT A CHAT <br /> TO START <br /> CHATTING! </h1>
                                                <Image src='/images/NexTalk/authillustration.png' width={275} height={275} alt='authillustration' />
                                            </div>
                                        ) : (
                                            <div className='flex flex-col w-full h-full justify-between relative overflow-hidden'>
                                                <div className="overflow-x-hidden scrollbar px-6 mb-6">
                                                    <NexTalkChatBubble />
                                                </div>

                                                <div className='flex w-full justify-center relative'>
                                                    <label className="input bg-[#424141] flex items-center gap-2 w-[90%] md:w-[80%] mb-4">
                                                        <input type="text" className="grow bg-[#424141] text-[12px] md:text-[14px]" placeholder="Send a message" />
                                                        <div className="flex gap-4">
                                                            <Image
                                                                src='/icons/NexTalk/party-popper.svg'
                                                                width={24}
                                                                height={24}
                                                                alt='party-popper'
                                                                className='cursor-not-allowed hover:-translate-y-0.5 transition-all'
                                                            />
                                                            <Image src='/icons/NexTalk/send-message.svg' width={24} height={24} alt='send' className='cursor-not-allowed hover:-translate-y-0.5 transition-all'
                                                            />
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        )}



                                    </div>
                                </main>
                            </div>
                        </section>
                    )}
                </div>
            )}
        </div>
    )
}

export default Hero;
