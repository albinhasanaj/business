"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Project = ({ bgColor, title, description, imagePath, index, width }: ProjectProps) => {
    const [isModalOpen, setModalOpen] = useState(false);

    // Define animations for the text and image
    const textAnimation = {
        hidden: { opacity: 0, x: index % 2 == 0 ? -50 : 50 },
        visible: { opacity: 1, x: 0 },
    };

    const imageAnimation = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <motion.div
            className={`flex flex-col ${index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-4 items-center justify-around p-8 min-h-screen overflow-hidden`}
            style={{ background: bgColor }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            {/* Animate the text content */}
            <motion.div
                className={`flex flex-col gap-4 relative ${index % 2 == 0 ? "lg:left-40" : "lg:right-40"}`}
                variants={textAnimation}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h2 className='heading2 text-black text-center md:text-start'>{title}</h2>
                <p className='md:text-left paragraph max-w-[450px] text-center'>{description}</p>
                <Link className='flex justify-center md:justify-start' href={`/projects/${title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <button className="w-2/3 py-2 bg-white rounded-[25px] border border-black text-2xl mt-12 text-black">
                        Case Study
                    </button>
                </Link>
            </motion.div>

            {/* Animate the image */}
            <motion.div
                className={`relative ${index % 2 == 0 ? "lg:left-40" : "lg:right-40"}`}
                style={{ width: `${width}px`, overflow: 'hidden', maxWidth: '100%' }}
                variants={imageAnimation}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <Image
                    src={imagePath}
                    alt={title}
                    width={width}
                    height={width}
                    unoptimized={true}
                    className='h-auto'
                />
            </motion.div>
        </motion.div>
    )
}

export default Project;
