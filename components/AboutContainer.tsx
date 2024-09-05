"use client"
import About from './About';
import CardsContainer from './CardsContainer';

const AboutContainer: React.FC = () => {
    return (
        <div className="max-w-[1440px] flex min-h-screen relative">
            <div className='grid grid-cols-2 my-auto'>
                {/* Sidebar for About section */}
                <div className='h-full sticky top-[30%]'>
                    <About />
                </div>
                {/* Content area that scrolls normally */}
                <div>
                    <CardsContainer />
                </div>
            </div>
        </div>
    );
};

export default AboutContainer;
