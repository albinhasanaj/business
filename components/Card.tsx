import Image from 'next/image';
import React from 'react';

const Card = ({ title, tags }: { title: string; tags: string[] }) => {
    return (
        <div className="relative card-container w-[300px] h-[300px] md2:w-[350px] md2:h-[350px] bg-gradient-to-tl from-[#3d66f5] to-[#4c19ae] rounded-md p-4">
            {/* Card content */}
            <div className="flex flex-col gap-3 w-full h-full items-start justify-start">
                <div className="relative w-[100px] h-[100px]">
                    <Image
                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                        alt="image"
                        width={100}
                        height={100}
                        className="rounded-md object-cover"
                    />
                </div>

                <span className="md2:text-2xl text-xl font-semibold text-white">
                    {title}
                </span>

                <div className="flex flex-wrap md2:w-2/3">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="from-[#3d66f5] to-[#4c19ae] bg-gradient-to-tl text-white text-sm px-2 py-1 rounded-md m-1"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
