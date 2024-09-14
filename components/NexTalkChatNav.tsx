import Image from 'next/image'
import React from 'react'


const NexTalkChatNavbar = () => {
    return (
        // <Image src={isOpen ? "/icons/cross.svg" : "/icons/burger-menu.svg"}
        <nav className="w-full flex justify-end p-8 md:hidden">
            <Image
                src="/icons/burger-menu.svg"
                alt="Hamburger Menu"
                width={64}
                height={64}
                className="cursor-pointer"
            />
        </nav>
    )
}

export default NexTalkChatNavbar