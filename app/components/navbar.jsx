// @flow strict
import Link from "next/link";


function Navbar() {
  return (
    <nav className="bg-transparent relative z-50">
      <div className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="gradient-text text-3xl font-bold tracking-tight hover:scale-105 transition-transform duration-300">
            AVIRAL SAXENA
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-2 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-3 no-underline outline-none hover:no-underline group" href="/#about">
              <div className="text-sm text-white transition-all duration-300 hover:text-[#16f2b3] relative">
                ABOUT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f626af] to-[#16f2b3] transition-all duration-300 group-hover:w-full"></span>
              </div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-3 no-underline outline-none hover:no-underline group" href="/#experience">
              <div className="text-sm text-white transition-all duration-300 hover:text-[#16f2b3] relative">
                EXPERIENCE
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f626af] to-[#16f2b3] transition-all duration-300 group-hover:w-full"></span>
              </div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-3 no-underline outline-none hover:no-underline group" href="/#skills">
              <div className="text-sm text-white transition-all duration-300 hover:text-[#16f2b3] relative">
                SKILLS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f626af] to-[#16f2b3] transition-all duration-300 group-hover:w-full"></span>
              </div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-3 no-underline outline-none hover:no-underline group" href="/#education">
              <div className="text-sm text-white transition-all duration-300 hover:text-[#16f2b3] relative">
                EDUCATION
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f626af] to-[#16f2b3] transition-all duration-300 group-hover:w-full"></span>
              </div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-3 no-underline outline-none hover:no-underline group" href="/#projects">
              <div className="text-sm text-white transition-all duration-300 hover:text-[#16f2b3] relative">
                PROJECTS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f626af] to-[#16f2b3] transition-all duration-300 group-hover:w-full"></span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="section-divider"></div>
    </nav>
  );
};

export default Navbar;