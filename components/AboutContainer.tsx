import About from './About';
import CardsContainer from './CardsContainer';

const AboutContainer: React.FC = () => {
    return (
        <div className="flex min-h-screen relative mb-[10vh]">
            <div className='flex flex-col md:flex-row max-w-[1440px] justify-between w-full'>
                <div>
                    <About />
                </div>
                <div>
                    <CardsContainer />
                </div>
            </div>
        </div>
    );
};

export default AboutContainer;
