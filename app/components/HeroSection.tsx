'use client';
import Image from "next/image";

import {TypeAnimation} from "react-type-animation";
import "./style.css";

export default function HeroSection() {
  return (
    <section className="hero-section p-10">
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12">
          <div className="lg:col-span-7 md:col-span-3">
              <div>
                  <h1 className="lg:text-6xl text-4xl">Hello, It&#39;s
                      <span
                          className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600"> Will</span>
                  </h1>
                  <h1 className="text-xl lg:text-2xl font-bold  pb-5 ">
                      <span
                          className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600"> I&#39;m {" "} </span>
                      <TypeAnimation sequence={[
                          ' a Software Engineer',
                          3000, // wait 3s before replacing
                          ' a Web Developer',
                          3000, // wait 3s before replacing
                          ' a Mobile Developer',
                          3000,
                      ]}
                                     wrapper="span"
                                     speed={50}
                                     repeat={Infinity}
                      />
                  </h1>
                  <p className="text-base text-gray-300">I am a third-year Computer Engineering student, 21 years old.
                      I excel at teamwork, as demonstrated through my involvement in several academic projects. My goal
                      is to continue developing my skills and gain experience
                      in a professional environment where I can actively contribute to the company&#39;s objectives.</p>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row pt-5">
                  <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-2 lg:mb-0 bg-white
                  bg-gradient-to-br from-blue-800 via-blue-500 to-purple-600 hover:font-bold
                  ">Hire Me</button>
                  <button className="px-1 py-1 w-full sm:w-fit rounded-full
                  bg-gradient-to-br from-blue-800 via-blue-500 to-purple-600
                  "> <span className="block px-4 py-3 bg-black w-full rounded-full">Download CV</span>
                  </button>
              </div>
          </div>
          <div className="lg:col-span-5 md:col-span-3 pt-10 lg:pt-0 p-2">
              <div className="relative w-fit mx-auto">
                  <Image className="img-hero rounded-full hover:scale-90 transition-transform"
                         src="/character.jpg" alt="Will Image" width={300} height={300}/>
              </div>
          </div>

      </div>
    </section>
  );
}