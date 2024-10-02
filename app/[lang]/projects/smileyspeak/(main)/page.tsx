import Link from "next/link";
import Wave from "react-wavify";

const SmileySpeak = () => {
    return (
        <div>
            <section className='w-full h-screen bg-black flex flex-col gap-10 items-center justify-center '>
                <div className='flex flex-col items-center gap-5'>
                    <h1 className='w-[1000px] text-4xl text-center text-white'>OBS: THIS PREVIEW OF NEXTALK IS ONLY A <span className='underline'>PREVIEW</span> SO ALL FEATURES WON'T BE WORKING AS INTENDED!</h1>
                    <Link
                        target='_blank'
                        href='https://smileyspeak-demo.vercel.app/'>
                        <p className='text-xl text-gray-300 cursor-pointer font-bold hover:text-white hover:underline'>I understand and wish to proceed!</p>
                    </Link>
                </div>
            </section>
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
            <section className="w-full h-auto bg-white relative  pb-10 px-20">
                <div className="flex justify-start w-full">
                    <div className="text-black flex flex-col gap-3 max-w-lg">
                        <h1 className="text-3xl font-semibold">Project Overview</h1>
                        <p>SmileySpeak is a platform where users can share and post funny comments, much like Reddit. The project's primary goal is to offer a simple, engaging space for users to express humor and connect through shared moments of fun.</p>
                    </div>
                </div>

                <div className="flex justify-end w-full">
                    <div className="text-black flex flex-col gap-3 max-w-lg">
                        <h1 className="text-3xl font-semibold">Scope and Limitations (Demo Disclaimer)</h1>
                        <p>In this demo version of SmileySpeak, certain features are restricted:</p>
                        <ul>
                            <li>
                                Users are unable to like posts
                            </li>
                            <li>
                                Posting new comments or threads is disabled.
                            </li>
                            <li>
                                Profile editing options, such as updating username, email, or password, are unavailable.
                            </li>
                        </ul>
                        <p>These limitations are designed to streamline the demo while showcasing the platform’s core functionality.</p>
                    </div>
                </div>

                <div className="flex justify-start w-full">
                    <div className="text-black flex flex-col gap-3 max-w-lg">
                        <h1 className="text-3xl font-semibold">Development Process</h1>
                        <p>SmileySpeak was developed using Next.js, a framework known for its efficient performance and scalability. The development process was relatively smooth, with no significant obstacles, thanks to the framework’s flexibility and ease of use.</p>
                    </div>
                </div>

                <div className="flex justify-end w-full">
                    <div className="text-black flex flex-col gap-3 max-w-lg">
                        <h1 className="text-3xl font-semibold">Key Features</h1>
                        <p>The key features of SmileySpeak include:</p>
                        <ul>
                            <li>
                                The ability for users to post their own comments and engage in discussions.
                            </li>
                            <li>
                                A "like" system where users can express their appreciation for other comments.

                            </li>
                            <li>
                                Unique account creation, allowing users to register with distinctive usernames and engage with the platform.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-start w-full">
                    <div className="text-black flex flex-col gap-3 max-w-lg">
                        <h1 className="text-3xl font-semibold">Target Audience and Use Cases</h1>
                        <p>SmileySpeak is designed for anyone who enjoys sharing lighthearted, funny moments through comments. Whether users want to post humorous thoughts or engage with others' content, the platform is ideal for fostering fun, casual interactions.</p>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default SmileySpeak;
