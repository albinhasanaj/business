import React from 'react'

const Button = ({ text, classes, href }: { text: string, classes?: string, href?: any }) => {


    return (
        <a href={href}>
            <button className={`text-lg sm:text-xl md:text-xl lg:text-[24px] text-[#4C19AE] px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white rounded-[100px] text-nowrap ${classes}`}>
                {text}
            </button>
        </a>
    )
}

export default Button