'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-red-600'>
                        Hi, I&apos;m {''}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            'Nathan',
                            1000,
                            'Web Developer',
                            1000,
                            'IT Technician',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 textl-lg lg:text-xl'>
                    IT Technician, Web Developer and Soon to be Cybersecurity Technician.
                </p>
                <div>
                    
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-indigo-500 to-red-600 hover:bg-slate-200 text-white hover:from-indigo-600 hover:to-red-700'>
                        <span>
                            Contact Me
                        </span>
                    </button>

                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-indigo-500 to-red-600 hover:bg-slate-200 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-[#242424] rounded-full px-5 py-2'>
                            See My GitHub
                        </span>
                    </button>

                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative'>
                    <Image
                    src='/images/hero.png'
                    alt='[hero.png] - Hero Image'
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    width={300}
                    height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
