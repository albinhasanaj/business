import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <header className="w-full flex justify-center absolute px-4">
        <Navbar />
      </header>
      <main className="flex flex-col">
        <div className="min-h-screen blue__gradient flex justify-center">
          <div className="max-w-[1440px] w-full">
            <Hero />
          </div>
        </div>
      </main>
    </Fragment>
  );
}
