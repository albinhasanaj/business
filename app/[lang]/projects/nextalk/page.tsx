import Link from "next/link";
import Wave from "react-wavify";

const Hero = () => {
    return (
        <div>
            <section className='w-full h-auto py-[250px] bg-black flex flex-col gap-10 items-center justify-center'>
                <div className='flex flex-col items-center gap-5'>
                    <h1 className='w-[1000px] text-4xl text-center text-white'>OBS: THIS PREVIEW OF NEXTALK IS ONLY A <span className='underline'>PREVIEW</span> SO ALL FEATURES WON'T BE WORKING AS INTENDED!</h1>
                    <Link
                        target='_blank'
                        href='https://nextalk-demo.vercel.app/'>
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
            <section className="w-full h-auto bg-white relative mt-20 pb-10 px-20">
                <div className="flex justify-start w-full">
                    <div className="text-black flex flex-col gap-3 max-w-lg">
                        <h1 className="text-3xl font-semibold">Project Overview</h1>
                        <p>NexTalk is a live chat application designed to allow users to connect and communicate in real-time. Built as a practice project, its primary goal is to demonstrate the development team's technical skills and ability to create a fully functional, interactive platform. Although NexTalk doesn't offer unique features that differentiate it from other widely-used chat applications, it serves as a comprehensive showcase of core abilities in web development, socket programming, and user experience design.</p>
                    </div>
                </div>

                <div className="flex justify-end w-full">
                    <div className="text-black flex flex-col gap-3 max-w-lg">
                        <h1 className="text-3xl font-semibold">Scope and Limitations (Demo Disclaimer)</h1>
                        <p>In this demo version of NexTalk, some features have been intentionally limited to streamline the demonstration and focus on core functionality. Please note the following limitations:
                            <ul>
                                <li>
                                    <span className="font-semibold">Account Creation:</span> Users cannot create their own accounts. For demonstration purposes, user profiles are pre-configured and hardcoded.
                                </li>
                                <li>
                                    <span className="font-semibold">Messaging:</span> The ability to send and receive live messages is disabled in this demo version. While the interface reflects the intended chat experience, live interaction is unavailable.

                                </li>
                                <li>
                                    <span className="font-semibold">Profile Editing:</span> You cannot modify user profile details, either for yourself or your friends. The demo does not support changes to display names, avatars, or other profile information.
                                </li>
                                <li>
                                    <span className="font-semibold">Friend Management:</span> The option to add or remove friends is also disabled. Friend lists in the demo are static, reflecting the core functionality but not allowing for dynamic user connections. These limitations ensure that the demo runs smoothly while showcasing the application's potential without unnecessary complexity.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

                <div className="flex justify-start w-full">
                    <div className="text-black flex flex-col gap-3 max-w-lg">
                        <h1 className="text-3xl font-semibold">Development Process</h1>
                        <p>NexTalk was developed using the Next.js framework, a powerful React-based solution known for its performance optimization and scalability in web applications. The project’s architecture focuses on real-time data handling, user authentication, and responsive design to ensure a smooth user experience across devices. One of the major challenges faced during development was integrating socket-based communication to enable live chatting. This required fine-tuning both the server and client sides to handle real-time updates efficiently. Despite the challenges, the development team successfully implemented a scalable solution that demonstrates proficiency in handling live data streams.</p>
                    </div>
                </div>

                <div className="flex justify-end w-full">
                    <div className="text-black flex flex-col gap-3 max-w-lg">
                        <h1 className="text-3xl font-semibold">Key Features</h1>
                        <p>NexTalk boasts several key features that highlight its functionality as a live chat platform:</p>
                        <ul>
                            <li>
                                <span className="font-semibold">Live Chatting:</span> Users can engage in real-time conversations, with messages appearing instantly between friends in the chat window.
                            </li>
                            <li>
                                <span className="font-semibold">Online/Offline Indicators:</span> The app shows whether a user is currently online or offline, providing clarity and enhancing communication flow.

                            </li>
                            <li>
                                <span className="font-semibold">Friend Name Customization:</span> For personal convenience, users can edit the names of their friends in their contact list, tailoring their experience.
                            </li>
                            <li>
                                <span className="font-semibold">Pin Friends:</span> Users can pin specific friends to the top of their list, ensuring that their most frequent contacts are easily accessible.
                            </li>
                            <li>
                                <span className="font-semibold">New Chat Notifications:</span> Incoming messages are highlighted with a blue "New Chat" marker and a blue flare to make new conversations highly visible.
                            </li>
                            <li>
                                <span className="font-semibold">Reaction Feature:</span> Users can express themselves within chats using reactions. When a reaction is triggered, it is visible to both users, creating a more interactive and engaging conversation.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-start w-full">
                    <div className="text-black flex flex-col gap-3 max-w-lg">
                        <h1 className="text-3xl font-semibold">Target Audience and Use Cases</h1>
                        <p>NexTalk is aimed at casual users who are looking for a simple, straightforward platform to communicate with friends. Whether users want to chat live, see who's online, or customize their contact list, NexTalk provides an intuitive environment for basic, real-time communication needs. While it's not intended to compete with larger, feature-rich apps like WhatsApp or Facebook Messenger, it serves as a convenient tool for users looking for a lightweight, easy-to-use messaging platform.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Hero;
