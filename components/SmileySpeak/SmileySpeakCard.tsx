"use client";
import Image from 'next/legacy/image'
import React from 'react'
import toast from 'react-hot-toast';

const SmileySpeakCard = () => {
    return (
        <div className="w-[320px] flex flex-col gap-4 h-auto bg-white rounded-[5px] border-[1px] border-black text-black py-4 px-6 ">
            <div className="flex justify-between">
                <div className="flex items-center gap-1">
                    <Image
                        src="/images/SmileySpeak/dragonImg.png"
                        alt="DragonSlayer Profile Pic"
                        width={48}
                        height={48}
                        className="rounded-full"
                    />
                    <div className="flex flex-col">
                        <span className="text-[18px] font-bold">Username</span>
                        <p className="text-[14px] opacity-50 cursor-not-allowed">Example@gmail.com</p>
                    </div>
                </div>
                <Image
                    src="/images/SmileySpeak/copyParagraph.png"
                    alt="Copy Paragraph"
                    width={24}
                    height={24}
                    className="cursor-pointer w-auto h-auto object-contain"
                    onClick={() => {
                        toast.success("Copied to clipboard")
                    }}
                />
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-[20px] break-words">Cool lorem ipsum comment yeahhhh boom</p>
            </div>
            <div className="flex flex-col gap-2 mt-auto">
                <div className="flex gap-1">
                    <Image
                        src="/images/SmileySpeak/heart.png"
                        alt="Like icon"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                        onClick={() => {
                            toast.error("You must be authenticated to like this post!")
                        }}
                    />
                    <span className="text-[16px]">0</span>
                </div>
                <div className="flex gap-2">
                    <span className="text-[16px] text-[#0400B1] cursor-not-allowed">#Test1</span>
                    <span className="text-[16px] text-[#0400B1] cursor-not-allowed">#Test2</span>
                    <span className="text-[16px] text-[#0400B1] cursor-not-allowed">#Test3</span>
                </div>
            </div>
        </div>
    )
}

export default SmileySpeakCard