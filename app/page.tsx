import About from "@/components/About";
import AboutContainer from "@/components/AboutContainer";
import CardsContainer from "@/components/CardsContainer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { Fragment } from "react";
import Wave from "react-wavify";

export default function Home() {
  return (
    <Fragment>
      <header className="w-full flex justify-center absolute px-4">
        <Navbar />
      </header>
      <main className="flex flex-col">
        <div className="min-h-screen flex justify-center blue__gradient relative">
          <div className="max-w-[1440px] w-full">
            <Hero />
          </div>
          <Wave
            fill="#fff"
            paused={false}
            style={{ display: "flex", width: "100%", position: "absolute", bottom: 0 }}
            options={{
              height: 20,
              amplitude: 30,
              speed: 0.15,
              points: 5,
            }}
          />
        </div>
        <div className="bg-white w-full flex flex-col items-center">
          <AboutContainer />
        </div>
        <div className="w-full rotate-180"></div>
        <div className="">
          <Projects />
        </div>
      </main>
    </Fragment>
  );
}
