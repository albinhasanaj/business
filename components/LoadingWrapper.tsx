// File: components/LoadingWrapper.js
"use client";

import { Fragment, useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Fragment>
            {isLoading ? (
                <div className="blue__gradient">
                    <LoadingScreen />
                </div>
            ) : (
                children
            )}
        </Fragment>
    );
}
