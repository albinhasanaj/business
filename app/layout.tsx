import type { Metadata } from "next";
import { Montserrat, Aldrich } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });
const aldrich = Aldrich({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tachyon",
  description: "Tachyon, the only web development and design agency you'll ever need.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#3D66F5] overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout