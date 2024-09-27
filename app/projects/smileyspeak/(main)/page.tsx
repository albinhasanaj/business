"use client";
import SmileySpeakCard from "@/components/SmileySpeakCard";
import SmileySpeakNav from "@/components/SmileySpeakNav";
import { Fragment, useState } from "react";
import { Itim } from "next/font/google";

const itim = Itim({ weight: "400", subsets: ["latin"] });


const SmileySpeak = () => {
    const [OBSpage, setOBSpage] = useState(true);
    const handleOBSpage = () => {
        setOBSpage(!OBSpage);
    }
    return (
        <div className={`${itim.className}`}>
            {OBSpage ? (
                <section className='w-full h-screen bg-black flex flex-col gap-10 items-center justify-center pt-[200px]'>
                    <div className='flex flex-col items-center gap-5'>
                        <h1 className='w-[1000px] text-4xl text-center text-white'>OBS: THIS PREVIEW OF NEXTALK IS ONLY A <span className='underline'>PREVIEW</span> SO ALL FEATURES WON'T BE WORKING AS INTENDED!</h1>
                        <p onClick={handleOBSpage} className='text-xl text-gray-300 cursor-pointer font-bold hover:text-white hover:underline'>I understand and wish to proceed!</p>
                    </div>
                    <p className='text-gray-500 pt-[200px]'>For the full project, visit <span className='font-bold cursor-pointer'>[URL FOR THE PROJECT]</span></p>
                </section>
            ) : (
                <div className="h-screen bg-[#DDDDDD]">
                    <div className="flex flex-col items-center w-full">
                        <div className="w-full py-8">
                            <SmileySpeakNav />
                        </div>

                        <h1 className="text-center text-[48px] md:text-[64px] lg:text-[96px] text-black">Discover & Share <span className="block h1__span__gradient">Fun & Joyful comments</span></h1>
                        <p className="text-center text-[20px] md:text-[26px] lg:text-[40px] opacity-50 text-black">SmileySpeak is a free to use website to find the best<br />comments on planet earth!</p>
                    </div>
                    <div className="w-full flex flex-col gap-2 items-center mt-10">
                        <label htmlFor="search" className="lg:text-[20px] text-black">Search for a tag or a username</label>
                        <input type="text" name="search" id="search" placeholder="#funny"
                            className="w-2/3 md:w-[500px] lg:w-[700px] p-4 rounded-[5px] focus:outline-none bg-white text-black box-shadow" />
                    </div>
                    {/* <h2 className="text-center text-[24px]">{"No comments :("}</h2> */}
                    <div className="w-full flex gap-10 items-center justify-center py-12">
                        <SmileySpeakCard />
                        <SmileySpeakCard />
                        <SmileySpeakCard />
                    </div>
                </div>
            )}
        </div>

    );
};

export default SmileySpeak;
