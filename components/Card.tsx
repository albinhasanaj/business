"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const Card = ({ title, tags }: { title: string; tags: string[] }) => {
    return (
        <motion.div
            className="relative card-container w-[350px] h-[350px] bg-gradient-to-tl from-[#3b49f5] to-[#6439e6] rounded-[25px] shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-700 cursor-pointer"
            whileHover={{
                scale: 1.1,
                rotate: 0,
                transition: { duration: 0.1 },
            }}
            initial={{ scale: 1, rotate: 0 }}
            animate={{ scale: 1, rotate: 0 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Neon Glowing Border */}
            <motion.div
                className="absolute inset-0 rounded-[25px] border-2 border-transparent bg-gradient-to-tr from-[#4f4fbc] to-[#aa57f5] opacity-50 bg-clip-border z-0"
                whileHover={{ opacity: 1, boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)' }}
            ></motion.div>

            {/* Card content */}
            <div className="relative z-20 p-6 flex flex-col gap-4 w-full h-full items-start justify-start">
                {/* Neon Glowing Image */}
                <motion.div
                    className="relative w-[100px] h-[100px] bg-slate-800/30 rounded-lg shadow-xl border-[2px] border-slate-600"
                    whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)' }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                        alt="image"
                        width={100}
                        height={100}
                        className="rounded-md object-cover"
                    />
                </motion.div>

                <motion.span
                    className="text-2xl font-semibold text-slate-100 tracking-wider"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {title}
                </motion.span>

                {/* Floating Tags */}
                <div className="flex flex-wrap w-2/3">
                    {tags.map((tag, index) => (
                        <motion.span
                            key={index}
                            className="bg-slate-700/50 text-slate-300 text-xs px-3 py-1 rounded-full m-1 shadow-md"
                            whileHover={{ y: -5, scale: 1.1, boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}
                            transition={{ duration: 0.3 }}
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Card;
