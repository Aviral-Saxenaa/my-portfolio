// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t bg-gradient-to-b from-[#0d1224] to-[#0a0f1c] border-[#353951] text-white mt-16">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-8 lg:py-12">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        
        <div className="text-center mb-8">
          <h3 className="gradient-text text-2xl font-bold mb-2">Aviral Saxena</h3>
          <p className="text-gray-400 text-sm">Full-Stack Developer & Problem Solver</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400 order-2 md:order-1">
            © 2024 Aviral Saxena. All rights reserved. Built with ❤️ using Next.js
          </p>
          <div className="flex items-center gap-6 order-1 md:order-2">
            <Link
              target="_blank"
              href={`https://github.com/Aviral-Saxenaa`}
              className="flex items-center gap-2 text-sm uppercase hover:text-[#16f2b3] transition-colors duration-300 group"
            >
              <IoStar className="group-hover:scale-110 transition-transform duration-300" />
              <span>GitHub</span>
            </Link>
            <Link
              target="_blank"
              href={`https://linkedin.com/in/saxenaaviral`}
              className="flex items-center gap-2 text-sm uppercase hover:text-[#16f2b3] transition-colors duration-300 group"
            >
              <CgGitFork className="group-hover:scale-110 transition-transform duration-300" />
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700/50 text-center">
          <p className="text-xs text-gray-500">
            Designed & Developed with modern web technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;