import About from './About';
import CardsContainer from './CardsContainer';

const AboutContainer: React.FC = () => {
    return (
        <div className="flex relative mb-[12vh]">
            <div className='flex flex-col md:flex-row max-w-[1440px] justify-between md2:gap-0 gap-4'>
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
