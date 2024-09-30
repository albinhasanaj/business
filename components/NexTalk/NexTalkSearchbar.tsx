const NexTalkSearchbar = () => {
    return (
        <label className='w-full flex justify-center'>
            <div className='w-full flex justify-center relative'>
                <div
                    className="w-[90%] h-[3rem] rounded-[1rem] bg-[#424141] outline-none placeholder-[rgba(255,255,255,0.5)] text-white text-[0.75rem] font-normal tracking-[0.0375rem] pl-[1rem] mt-[1rem] ring-1 ring-transparent focus:ring-white/50 transition duration-200 ease-in-out flex items-center cursor-not-allowed">
                    <p className="text-gray-400 select-none">Search profile</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#7F838C"
                    className="w-4 h-4 opacity-70 absolute bottom-[25%] left-[85%] cursor-not-allowed">
                    <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </div>
        </label>
    )
}

export default NexTalkSearchbar