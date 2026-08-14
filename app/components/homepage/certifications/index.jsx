// @flow strict
import { certifications } from "@/utils/data/certifications";
import Image from "next/image";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
// Lottie file will be loaded dynamically
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Certification() {
  return (
    <div id="certifications" className="relative z-50 my-16 lg:my-24">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 opacity-50"
      />

      <div className="section-divider"></div>

      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">Certifications</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          My professional certifications and achievements
        </p>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath="/study.json" />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                certifications.map(certification => (
                  <GlowCard key={certification.id} identifier={`certification-${certification.id}`}>
                    <a
                      href={certification.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full w-full"
                    >
                      <div className="p-3 relative text-white">
                        <Image
                          src="/blur-23.svg"
                          alt="Hero"
                          width={1080}
                          height={200}
                          className="absolute bottom-0 opacity-80 pointer-events-none"
                        />
                        <div className="flex justify-center">
                          <p className="text-xs sm:text-sm text-[#16f2b3]">
                            {certification.duration}
                          </p>
                        </div>
                        <div className="flex items-center gap-x-8 px-3 py-5">
                          <div className="flex items-center justify-center self-stretch text-violet-500 transition-all duration-300 hover:scale-125">
                            <FaAward size={36} />
                          </div>
                          <div>
                            <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                              {certification.title}
                            </p>
                            <p className="text-sm sm:text-base mb-2">
                              {certification.issuer}
                            </p>
                            <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#16f2b3] transition-all duration-300">
                              <FaExternalLinkAlt size={12} />
                              View Certificate
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
