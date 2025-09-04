// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-16 lg:my-24 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8 z-10">
        <span className="modern-card w-fit text-white rotate-90 p-3 px-6 text-lg font-semibold">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-gradient-to-b from-[#1a1443] to-transparent"></span>
      </div>
      
      <div className="text-center mb-12 lg:hidden">
        <h2 className="text-2xl lg:text-3xl font-bold gradient-text mb-4">About Me</h2>
        <div className="section-divider w-24 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="order-2 lg:order-1 space-y-6">
          <div>
            <p className="font-semibold mb-6 text-[#16f2b3] text-xl lg:text-2xl uppercase tracking-wide">
              Who I am?
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#16f2b3] to-[#8228ec] mb-6"></div>
          </div>
          <p className="text-gray-200 text-base lg:text-lg leading-relaxed">
            {personalData.description}
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-4 py-2 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-full text-sm border border-violet-500/30">
              Problem Solver
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full text-sm border border-green-500/30">
              Quick Learner
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-full text-sm border border-pink-500/30">
              Team Player
            </span>
          </div>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Image
              src={personalData.profile}
              width={300}
              height={300}
              alt="Aviral Saxena"
              className="relative rounded-2xl transition-all duration-700 grayscale hover:grayscale-0 hover:scale-105 cursor-pointer shadow-2xl border border-gray-700/50 hover:border-violet-500/50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;