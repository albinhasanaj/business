import SmileySpeakNav from "@/components/SmileySpeakNav";
import { Itim } from "next/font/google";
import { ReactNode } from "react";
import "./styles/smileyspeak.css";
import { Toaster } from "react-hot-toast";

const itim = Itim({ weight: "400", subsets: ["latin"] });

const SmileySpeakLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body className={`${itim.className} bg-[#DDD] h-auto`}>
                <header className="w-full ">
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                </header>
                {children}
            </body>
        </html>
    )
}

export default SmileySpeakLayout
