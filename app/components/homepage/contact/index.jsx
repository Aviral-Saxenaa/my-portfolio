// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
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
          Let&apos;s discuss your next project or just say hello
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <ContactForm />
        <div className="lg:w-full">
          <div className="mb-8 lg:hidden">
            <h3 className="font-bold mb-4 gradient-text text-2xl lg:text-3xl">Get In Touch</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-[#16f2b3] to-[#8228ec] mb-4"></div>
          </div>
          <div className="hidden lg:block mb-8">
            <h3 className="font-bold mb-4 gradient-text text-2xl lg:text-3xl">Contact Information</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-[#16f2b3] to-[#8228ec] mb-6"></div>
            <p className="text-gray-400 text-base leading-relaxed">
              Ready to start a conversation? Here are the best ways to reach me. I&apos;m always open to discussing new opportunities and exciting projects.
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:gap-8">
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
          <div className="mt-12 lg:mt-16">
            <h4 className="text-lg font-semibold text-gray-300 mb-6">Connect With Me</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link target="_blank" href={personalData.github} className="group">
                <div className="modern-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <IoLogoGithub
                    className="mx-auto mb-3 bg-gradient-to-r from-gray-600 to-gray-500 p-4 rounded-full hover:from-[#f626af] hover:to-[#8228ec] transition-all duration-300 text-white shadow-lg group-hover:shadow-pink-500/25"
                    size={56}
                  />
                  <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300 font-medium">GitHub</p>
                  <p className="text-xs text-gray-500 mt-1">View my repositories</p>
                </div>
              </Link>
              <Link target="_blank" href={personalData.linkedIn} className="group">
                <div className="modern-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <BiLogoLinkedin
                    className="mx-auto mb-3 bg-gradient-to-r from-gray-600 to-gray-500 p-4 rounded-full hover:from-[#0077b5] hover:to-[#8228ec] transition-all duration-300 text-white shadow-lg group-hover:shadow-blue-500/25"
                    size={56}
                  />
                  <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300 font-medium">LinkedIn</p>
                  <p className="text-xs text-gray-500 mt-1">Professional network</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;