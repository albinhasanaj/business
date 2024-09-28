// File: components/LoadingWrapper.js
"use client";

import { Fragment, useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import { motion } from "framer-motion";

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Fragment>
            {isLoading ? (
                <div className="blue__gradient">
                    <LoadingScreen />
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {children}
                </motion.div>

            )}
        </Fragment>
    );
}
