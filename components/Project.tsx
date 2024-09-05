import Image from 'next/image'
import React from 'react'

const Project = ({ bgColor, title, description, imagePath, index, width }: ProjectProps) => {
    return (
        <div className={`flex flex-col ${index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-4 items-center justify-around p-8 min-h-screen overflow-hidden`}
            style={{ background: bgColor }}
        >
            <div className={`flex flex-col gap-4 relative ${index % 2 == 0 ? "lg:left-40" : "lg:right-40"}`}>
                <h2 className='heading2'>{title}</h2>
                <p className='text-left paragraph max-w-[450px]'>{description}</p>
                {/* button will link to href of project title */}
                <button className="w-2/3 py-2 bg-white rounded-[25px] border border-black text-2xl mt-12">Case Study</button>
            </div>
            <div
                className={`relative ${index % 2 == 0 ? "lg:left-40" : "lg:right-40"}`}
                style={{ width: `${width}px`, overflow: 'hidden', maxWidth: '100%' }}>
                <Image
                    src={imagePath}
                    alt={title}
                    width={width}
                    height={width}
                    layout="responsive"
                    unoptimized={true}
                    className='h-auto'
                />
            </div>
        </div>
    )
}

export default Project;
