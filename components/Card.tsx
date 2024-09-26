import Image from 'next/image';
import React from 'react';

const Card = ({ title, tags }: { title: string; tags: string[] }) => {
    return (
        <div className="relative card-container w-full max-w-[250px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] h-auto bg-gradient-to-tl from-[#3d66f5] to-[#4c19ae] rounded-md p-4">
            {/* Card content */}
            <div className="flex flex-col gap-3 w-full h-full items-start justify-start">
                <div className="relative w-full h-[150px] sm:h-[200px] md:h-[250px]">
                    <Image
                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                        alt="image"
                        layout="fill"
                        className="rounded-md object-cover"
                    />
                </div>

                <span className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                    {title}
                </span>

                <div className="flex flex-wrap w-full">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-gradient-to-tl from-[#3d66f5] to-[#4c19ae] text-white text-xs sm:text-sm md:text-base px-2 py-1 rounded-md m-1"
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
