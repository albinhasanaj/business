"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";

const Hero = () => {
    const words = [
        "Web Development",
        "UI/UX Design",
        "SEO Optimization",
        "Digital Marketing",
        "Performance Optimization",
    ];

    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000);

        return () => clearInterval(interval); // Cleanup to avoid memory leaks
    }, []);

    // Function to create animated letters
    const AnimatedLetters = ({ text }: { text: string }) => {
        // Split text into an array of letters, preserving spaces
        const letters = Array.from(text);

        return (
            <span style={{ display: "inline-block", whiteSpace: "pre" }}>
                <AnimatePresence>
                    {letters.map((letter, index) => (
                        <motion.span
                            key={letter + "-" + index + "-" + wordIndex}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: index * 0.05,
                            }}
                            style={{ display: "inline-block", whiteSpace: "pre" }}
                            className="py-1"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </AnimatePresence>
            </span>
        );
    };

    return (
        <section className="relative flex flex-col gap-4 items-center justify-center size-full px-4 md:items-start md:px-8 lg:px-16">
            <h1 className="heading1 tracking-tight text-center md:text-left text-4xl sm:text-5xl md:text-5xl xl:text-5xl">
                {/* Container for the animated word */}
                <span className="inline-block relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={wordIndex}
                            style={{ display: "inline-block", whiteSpace: "pre" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <AnimatedLetters text={words[wordIndex]} />
                        </motion.span>
                    </AnimatePresence>
                </span>
                <br /> Launches brands to new{" "}
                <span className="text-[#41BFF5]">heights</span>
            </h1>

            {/* Other content remains unchanged */}
            <motion.div
                animate={{
                    y: [0, -3, 0],
                    opacity: [1, 0.9, 1],
                    rotate: [0, -0.5, 0],
                }}
                transition={{
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            >
                <p className="text-xl sm:text-2xl md:text-2xl lg:text-[32px] tracking-tighter text-[#CACACA] text-center md:text-left">
                    Websites tailored to you
                </p>
            </motion.div>

            <Button text="Schedule a meeting" />

            {/* Top left circle on mobile, moves to the left on larger screens */}
            <div className="size-24 md:size-40 bg-[#40BFF5] rounded-full absolute left-[5%] top-[15%] md:left-[10%] md:top-[10%] blur-[30px] md:blur-[50px]" />

            {/* Bottom right circle on mobile, moves to the right on larger screens */}
            <div className="size-24 md:size-40 bg-[#40BFF5] rounded-full absolute right-[5%] bottom-[5%] md:right-[10%] md:bottom-auto md:left-auto md:top-[10%] blur-[30px] md:blur-[50px]" />
        </section>
    );
};

export default Hero;
