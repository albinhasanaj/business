import About from './About';
import CardsContainer from './CardsContainer';

interface AboutContainerProps {
    lang: String;
}

const AboutContainer: React.FC<AboutContainerProps> = ({ lang }) => {
    return (
        // mb-16 for laptop
        <div className="flex relative mt-[8vh] mb-[16vh]">
            <div className='flex flex-col md:flex-row max-w-[1440px] justify-between md2:gap-0 gap-4'>
                <div>
                    <About lang={lang} />
                </div>
                <div>
                    <CardsContainer />
                </div>
            </div>
        </div>
    );
};

export default AboutContainer;
