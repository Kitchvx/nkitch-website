import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center">
                <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
                    Hi, I'm Nathan
                </h1>
                <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
                    IT Technician, Web Developer and Soon to be Cybersecurity Technician. 
                </p>
                <div>
                    <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">Button 1</button>
                    <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">Button 2</button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
                    <Image
                    src="/images/hero.png"
                    alt="[hero.png] - Hero Image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
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
