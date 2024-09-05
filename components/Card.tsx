import Image from 'next/image'
import React from 'react'

const Card = () => {
    return (
        <div className='w-[300px] h-[300px] rounded-md border-[2px] border-slate-700 shadow-lg bg-slate-500 flex flex-col'>
            <div className="flex flex-col mt-6 ml-6 gap-4">
                <Image src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                    alt="image"
                    width={100}
                    height={100}
                    className="p-6 bg-slate-800/20 rounded-md border-slate-700 border-[2px] w-[100px] h-[100px] object-cover"
                />
                <span className='text-xl font-bold'>Branding</span>
                {/* tags */}
                <div className="flex flex-wrap w-2/3">
                    <span className="bg-slate-700 text-white text-xs px-2 py-1 rounded-full m-1">Design</span>
                    <span className="bg-slate-700 text-white text-xs px-2 py-1 rounded-full m-1">Design</span>
                    <span className="bg-slate-700 text-white text-xs px-2 py-1 rounded-full m-1">Design</span>
                    <span className="bg-slate-700 text-white text-xs px-2 py-1 rounded-full m-1">Design</span>
                </div>
            </div>
        </div>
    )
}

export default Card