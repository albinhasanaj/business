import About from './About';
import CardsContainer from './CardsContainer';

const AboutContainer: React.FC = () => {
    return (
        <div className="flex relative mb-[12vh]">
            <div className='flex flex-col md:flex-row max-w-[1440px] justify-between'>
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
