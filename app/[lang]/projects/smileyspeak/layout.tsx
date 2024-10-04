import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

export const metadata = {
    title: 'SmileySpeak Demo',
    description: 'This is a preview of SmileySpeak, an application for posting comments.',
}

const SmileySpeakLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body className={`bg-black`}>
                <header className="w-full flex justify-center absolute px-4 z-50">
                    <Navbar />
                </header>
                {children}
            </body>
        </html>
    )
}

export default SmileySpeakLayout
