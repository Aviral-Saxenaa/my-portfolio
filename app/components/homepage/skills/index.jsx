// @flow strict

import { skills } from "@/utils/data/skills";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative z-50 my-16 lg:my-24">
      <div className="w-[120px] h-[120px] bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-30"></div>

      <div className="section-divider"></div>

      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">Skills & Technologies</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Here are the technologies and tools I work with to bring ideas to life
        </p>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skills.map((skill, id) => (
            <div className="w-40 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-xl group relative hover:scale-[1.1] cursor-pointer"
              key={id}>
              <div className="h-full w-full modern-card group-hover:border-violet-500 transition-all duration-500 overflow-hidden">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="h-10 sm:h-12 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="h-full w-auto rounded-lg filter group-hover:drop-shadow-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-base font-medium relative z-10 group-hover:text-[#16f2b3] transition-colors duration-300">
                    {skill.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;