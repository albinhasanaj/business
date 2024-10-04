import AboutContainer from "@/components/AboutContainer";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Wave from "react-wavify";
import LoadingWrapper from "@/components/LoadingWrapper";
import Navbar from "@/components/Navbar";

const Home = ({ params }: { params: { lang: string } }) => {
  const lang = (params.lang === 'en' || params.lang === 'sv') ? params.lang : 'en';

  return (
    <LoadingWrapper>
      <main className="flex flex-col">
        <header className="w-full flex justify-center absolute px-4 z-50">
          <Navbar />
        </header>
        <div className="min-h-screen h-[650px] flex justify-center blue__gradient relative">
          <div className="max-w-[1440px] w-full mb-16" id="home">
            <Hero />
          </div>
          <Wave
            fill="#fff"
            paused={false}
            style={{
              display: "flex",
              width: "100%",
              position: "absolute",
              bottom: 0,
            }}
            options={{
              height: 20,
              amplitude: 30,
              speed: 0.15,
              points: 5,
            }}
          />
        </div>
        <div
          id="about"
          className="bg-white w-full flex flex-col items-center min-h-screen">
          <AboutContainer lang={lang} />
        </div>
        <div id="projects">
          <Projects lang={lang} />
        </div>
        <div className="h-screen bg-white relative">placeholder</div>
        <div className="blue__gradient2">
          <Wave
            fill="#fff"
            paused={false}
            style={{
              display: "flex",
              width: "100%",
              position: "relative",
              bottom: 0,
              rotate: "180deg",
            }}
            options={{
              height: 20,
              amplitude: 30,
              speed: 0.15,
              points: 5,
            }}
          />
          <Contact />
        </div>
      </main>
    </LoadingWrapper>
  );
}

export default Home;