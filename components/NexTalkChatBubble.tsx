"use client";
import Image from 'next/image'
import { Fragment } from 'react'
import { useState } from 'react'

const NexTalkChatBubble = () => {
    // const [imgSrc, setImgSrc] = useState<string>(profilePic || '/images/nickname.png');

    return (
        <Fragment>
            <Fragment>
                <div className="chat chat-end">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <Image
                                alt="Chat bubble"
                                src="/images/NexTalk/ProfilePic.png"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        </div>
                    </div>
                    <div className="chat-header overflow-ellipsis">
                        You
                        {/* <time className="text-xs opacity-50">12:46</time> */}
                    </div>
                    <div className="chat-bubble bg-blue-500 text-white break-words text-start text-[14px] md:text-[16px]"
                    >Hello!</div>
                </div>
            </Fragment>

            <Fragment>
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <Image
                                alt="Chat bubble"
                                src="/images/NexTalk/ProfilePic.png"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        </div>
                    </div>
                    <div className="chat-header overflow-ellipsis">
                        Not you
                        {/* <time className="text-xs opacity-50">12:45</time> */}
                    </div>
                    <div className="chat-bubble text-white break-all text-[14px] md:text-[16px]">
                        Hi there
                    </div>
                </div>
            </Fragment>

            <Fragment>
                <div className="chat chat-end">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <Image
                                alt="Chat bubble"
                                src="/images/NexTalk/ProfilePic.png"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        </div>
                    </div>
                    <div className="chat-header overflow-ellipsis">
                        You
                        {/* <time className="text-xs opacity-50">12:46</time> */}
                    </div>
                    <div className="chat-bubble bg-blue-500 text-white break-words text-start text-[14px] md:text-[16px]">
                        How are you doing?
                    </div>
                </div>
            </Fragment>

            <Fragment>
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <Image
                                alt="Chat bubble"
                                src="/images/NexTalk/ProfilePic.png"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        </div>
                    </div>
                    <div className="chat-header overflow-ellipsis">
                        Not you
                        {/* <time className="text-xs opacity-50">12:45</time> */}
                    </div>
                    <div className="chat-bubble text-white break-all text-[14px] md:text-[16px]">
                        I'm doing good, how about you?
                    </div>
                </div>
            </Fragment>
            <Fragment>
                <div className="chat chat-end">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <Image
                                alt="Chat bubble"
                                src="/images/NexTalk/ProfilePic.png"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        </div>
                    </div>
                    <div className="chat-header overflow-ellipsis">
                        You
                        {/* <time className="text-xs opacity-50">12:46</time> */}
                    </div>
                    <div className="chat-bubble bg-blue-500 text-white break-words text-start text-[14px] md:text-[16px]">
                        I'm good, thanks
                    </div>
                </div>
            </Fragment>
        </Fragment>
    )
}

export default NexTalkChatBubble