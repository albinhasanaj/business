import Image from 'next/image'
import React, { Fragment } from 'react'

const Process = () => {

    // array 5 length
    const arr = Array.from({ length: 5 }, (_, i) => i + 1)

    return (
        <section className="flex flex-col gap-4 items-center my-20 size-full px-4 md:px-8 lg:px-16">
            <h2 className='heading2 text-white'>Our Process</h2>
            <div className='flex flex-col gap-20 max-w-[1000px] w-full mt-20'>
                {arr.map((item, index) => (
                    <div className={`${index % 2 == 0 ? "self-start lg:flex-row" : "self-end lg:flex-row-reverse"} rounded-[20px] flex flex-col`}
                        key={index}
                    >
                        <Image
                            src="/images/sketch.png"
                            alt="sketch"
                            width={500}
                            height={500}
                            unoptimized={true}
                        />
                        <div className={`relative ${index % 2 == 0 ? "lg:left-20" : ""}`}>
                            <h3 className='heading3'>Hello</h3>
                            <p className='paragraph text-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti placeat ut eveniet laudantium possimus? Pariatur saepe ea perferendis blanditiis repudiandae, dolorum maiores praesentium, quo temporibus qui ex voluptates rerum accusantium!</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Process