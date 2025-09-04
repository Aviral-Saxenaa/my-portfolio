// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="my-16 lg:my-24 relative text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8 z-10">
        <span className="modern-card w-fit text-white rotate-90 p-3 px-6 text-lg font-semibold">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-gradient-to-b from-[#1a1443] to-transparent"></span>
      </div>
      
      <div className="section-divider"></div>
      
      <div className="text-center mb-12 lg:hidden">
        <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">Get In Touch</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Let's discuss your next project or just say hello
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactForm />
        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-lg flex items-center gap-4 group">
              <MdAlternateEmail
                className="bg-gradient-to-r from-gray-600 to-gray-500 p-3 rounded-full hover:from-[#16f2b3] hover:to-[#8228ec] hover:scale-110 transition-all duration-300 text-white cursor-pointer shadow-lg"
                size={40}
              />
              <span className="group-hover:text-[#16f2b3] transition-colors duration-300">{personalData.email}</span>
            </p>
            <p className="text-sm md:text-lg flex items-center gap-4 group">
              <IoMdCall
                className="bg-gradient-to-r from-gray-600 to-gray-500 p-3 rounded-full hover:from-[#16f2b3] hover:to-[#8228ec] hover:scale-110 transition-all duration-300 text-white cursor-pointer shadow-lg"
                size={40}
              />
              <span className="group-hover:text-[#16f2b3] transition-colors duration-300">
                {personalData.phone}
              </span>
            </p>
            <p className="text-sm md:text-lg flex items-center gap-4 group">
              <CiLocationOn
                className="bg-gradient-to-r from-gray-600 to-gray-500 p-3 rounded-full hover:from-[#16f2b3] hover:to-[#8228ec] hover:scale-110 transition-all duration-300 text-white cursor-pointer shadow-lg"
                size={40}
              />
              <span className="group-hover:text-[#16f2b3] transition-colors duration-300">
                {personalData.address}
              </span>
            </p>
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-4 lg:gap-6">
            <Link target="_blank" href={personalData.github} className="group">
              <IoLogoGithub
                className="bg-gradient-to-r from-gray-600 to-gray-500 p-3 rounded-full hover:from-[#f626af] hover:to-[#8228ec] hover:scale-110 transition-all duration-300 text-white cursor-pointer shadow-lg group-hover:shadow-pink-500/25"
                size={52}
              />
            </Link>
            <Link target="_blank" href={personalData.linkedIn} className="group">
              <BiLogoLinkedin
                className="bg-gradient-to-r from-gray-600 to-gray-500 p-3 rounded-full hover:from-[#0077b5] hover:to-[#8228ec] hover:scale-110 transition-all duration-300 text-white cursor-pointer shadow-lg group-hover:shadow-blue-500/25"
                size={52}
              />
            </Link>
            <Link target="_blank" href={personalData.twitter} className="group">
              <FaXTwitter
                className="bg-gradient-to-r from-gray-600 to-gray-500 p-3 rounded-full hover:from-[#1da1f2] hover:to-[#8228ec] hover:scale-110 transition-all duration-300 text-white cursor-pointer shadow-lg group-hover:shadow-blue-400/25"
                size={52}
              />
            </Link>
            <Link target="_blank" href={personalData.stackOverflow} className="group">
              <FaStackOverflow
                className="bg-gradient-to-r from-gray-600 to-gray-500 p-3 rounded-full hover:from-[#f48024] hover:to-[#8228ec] hover:scale-110 transition-all duration-300 text-white cursor-pointer shadow-lg group-hover:shadow-orange-500/25"
                size={52}
              />
            </Link>
            <Link target="_blank" href={personalData.facebook} className="group">
              <FaFacebook
                className="bg-gradient-to-r from-gray-600 to-gray-500 p-3 rounded-full hover:from-[#1877f2] hover:to-[#8228ec] hover:scale-110 transition-all duration-300 text-white cursor-pointer shadow-lg group-hover:shadow-blue-600/25"
                size={52}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;