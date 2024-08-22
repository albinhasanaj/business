import Image from 'next/image'
import React from 'react'

const Project = ({ bgColor, title, description, imagePath, index }: { index: number, bgColor: string, title: string, description: string, imagePath: string }) => {
    return (
        <div className={`flex flex-col ${index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-4 items-center justify-around p-8 ${bgColor}`}>
            <div className='flex flex-col gap-4'>
                <h2 className='heading2'>{title}</h2>
                <p className=''>{description}</p>
                {/* button will link to href of project title */}
                <button>Case Study</button>
            </div>
            <Image
                src={imagePath}
                alt={title}
                width={500}
                height={500}
                className='w-[1000px] h-auto overflow-hidden'
                unoptimized={true}
            />
        </div>
    )
}

export default Project