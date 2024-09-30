"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "next/navigation";
import Button from "./Button";

const Hero = () => {
    const params = useParams();
    const lang = params?.lang || 'en';
    const [translations, setTranslations] = useState<any>(null);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const loadTranslations = async () => {
            let loadedTranslations;
            if (lang === "sv") {
                loadedTranslations = await import('@/locales/sv/lang.js');
            } else {
                loadedTranslations = await import('@/locales/en/lang.js');
            }
            setTranslations(loadedTranslations.default);
        };

        loadTranslations();
    }, [lang]);

    // timer that runs every 3 second
    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % 5); //5 is the number of words in the array
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    if (!translations) {
        return null;
    }

    // Ensure headingText is defined and not empty
    const headingText = translations.hero.heading || 'Default Heading';

    // Function to create animated letters
    const AnimatedLetters = ({ text }: { text: string }) => {
        const letters = Array.from(text);

        return (
            <span style={{ display: "inline-block" }}
            >
                {letters.map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: index * 0.05,
                        }}
                        style={{ display: "inline-block" }}
                        className="py-1"
                    >
                        {letter}
                    </motion.span>
                ))}
            </span>
        );
    };

    return (
        <section className="relative flex flex-col gap-4 items-center justify-center size-full px-4 md:items-start md:px-8 lg:px-16">
            <h1 className="heading1 tracking-tight text-center md:text-left text-2xl sm:text-3xl md:text-5xl xl:text-5xl">
                {/* Container for the animated heading */}
                <span className="inline-block relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={`${wordIndex}-${headingText[wordIndex]}`} // Unique key per word
                            style={{ display: "inline-block", whiteSpace: "pre" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <AnimatedLetters
                                text={headingText[wordIndex]} />
                        </motion.span>
                    </AnimatePresence>
                </span>
                <br /> {translations.hero.subheading}{" "}
                <span className="text-[#41BFF5]">{translations.hero.below}</span>
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
                    {translations.hero.tagline}
                </p>
            </motion.div>

            <Button text={translations.hero.button} href="#contact" />

            <AnimatePresence>
                {/* Visual effects */}
                <motion.div
                    key="circle1"
                    animate={{
                        y: [0, -5, 0, 5, 0],
                        opacity: [1, 0.95, 1, 0.9, 1],
                        rotate: [0, -1, 1, -0.5, 0],
                        scale: [1, 1.02, 1],
                    }}
                    transition={{
                        duration: 4,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                    className="size-24 md:size-40 bg-[#40BFF5] rounded-full absolute right-[0%] bottom-[5%] md:right-[5%] md:top-[10%] blur-[60px]"
                />

                <motion.div
                    key="circle2"
                    animate={{
                        y: [0, -5, 0, 5, 0],
                        opacity: [1, 0.95, 1, 0.9, 1],
                        rotate: [0, -1, 1, -0.5, 0],
                        scale: [1, 1.02, 1],
                    }}
                    transition={{
                        duration: 4,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                    className="size-24 md:size-40 bg-[#40BFF5] rounded-full absolute right-[15%] bottom-[5%] md:right-[25%] md:bottom-[10%] blur-[60px]"
                />
            </AnimatePresence>

        </section>
    );
};

export default Hero;
