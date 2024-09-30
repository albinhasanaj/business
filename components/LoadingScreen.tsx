import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import "@/styles/loadingscreen.css";

const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return Math.min(oldProgress + 5, 100); // Increase by 5% every time
            });
        }, 80); // Adjust time interval (150ms in this case) for speed of progress

        return () => clearInterval(interval); // Cleanup
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen md:gap-4 gap-10">

            <div className='flex items-center gap-10'>
                <div className="rocket-shake">
                    <Image
                        src={"/images/logo/tachyon-icon.png"}
                        alt="Tachyon Logo"
                        width={120}
                        height={100}
                        style={{ width: "auto", height: "100%" }} // Maintain aspect ratio by setting one to "auto"
                        priority
                    />
                </div>
                <Image src={"/images/logo/tachyon-text.png"} alt="Tachyon Logo" width={250} height={100} className="md:block hidden" />
            </div>

            <div className='w-full flex justify-center px-2'>
                <div className="w-full max-w-md h-2 bg-gray-800 rounded">
                    <div
                        className="h-full bg-white rounded transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
