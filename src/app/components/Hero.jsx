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
                    I am a full-time IT Technician working in Managed Services for my local Government. In my downtime from work I am currently working on a Software as a Service, commonly known as a SaaS, which will offer a range of features to help streamline and optimise potential client's needs for websites and e-commerce stores/sites to keep the client in control and happy!
                </p>
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
