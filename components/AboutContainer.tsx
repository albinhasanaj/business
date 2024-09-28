import About from './About';
import CardsContainer from './CardsContainer';

interface AboutContainerProps {
    lang: String;
}

const AboutContainer: React.FC<AboutContainerProps> = ({ lang }) => {
    return (
        <div id='about' className="flex relative mb-[12vh]">
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
