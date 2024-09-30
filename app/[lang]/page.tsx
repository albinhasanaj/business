import AboutContainer from "@/components/AboutContainer";
import Contact from "@/components/Contact";
import Hero from "@/components/NexTalk/Hero";
import Navbar from "@/components/NexTalk/Navbar";
import Projects from "@/components/Projects";
import Wave from "react-wavify";
import LoadingWrapper from "@/components/NexTalk/LoadingWrapper";

const Home = ({ params }: { params: { lang: string } }) => {

  const lang = (params.lang === 'en' || params.lang === 'sv') ? params.lang : 'en';

  return (
    <LoadingWrapper>
      <header className="w-full flex justify-center absolute px-4">
        <Navbar />
      </header>
      <main className="flex flex-col">
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
        <div className="blue__gradient2">
          <Contact />
        </div>
      </main>
    </LoadingWrapper>
  );
}

export default Home;