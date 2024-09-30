import Link from "next/link";

const Hero = () => {
    return (
        <section className='w-full h-screen bg-black flex flex-col gap-10 items-center justify-center'>
            <div className='flex flex-col items-center gap-5'>
                <h1 className='w-[1000px] text-4xl text-center text-white'>OBS: THIS PREVIEW OF NEXTALK IS ONLY A <span className='underline'>PREVIEW</span> SO ALL FEATURES WON'T BE WORKING AS INTENDED!</h1>
                <Link
                    target='_blank'
                    href='https://nextalk-demo.vercel.app/'>
                    <p className='text-xl text-gray-300 cursor-pointer font-bold hover:text-white hover:underline'>I understand and wish to proceed!</p>
                </Link>
            </div>
        </section>
    )
}
export default Hero;
