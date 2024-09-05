"use client";
import About from './About';
import CardsContainer from './CardsContainer';

const AboutContainer: React.FC = () => {
    return (
        <div className="max-w-[1440px] min-h-screen relative">
            <div className='grid grid-cols-2 my-auto h-full'>
                {/* Sidebar for About section */}
                <div className='h-full relative'> {/* Add relative positioning */}
                    {/* <About /> */}
                    <h1 className=''>haha</h1>
                </div>
                {/* Content area that scrolls normally */}
                <div className='overflow-auto h-full'>
                    <CardsContainer />
                </div>
            </div>
        </div>
    );
};

export default AboutContainer;
