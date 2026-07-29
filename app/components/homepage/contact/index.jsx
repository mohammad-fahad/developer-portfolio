// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="relative z-50 my-16 lg:my-28">
      {/* Section header */}
      <div className="flex items-center justify-start relative mb-8 sm:mb-12">
        <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-3 sm:px-5 py-2 sm:py-3 text-base sm:text-xl rounded-md">
          CONTACT
        </span>
        <span className="w-full h-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="mb-6 sm:mb-10">
        <p className="text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2 sm:mb-3">
          Get in touch
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
          {`Let's build something together`}
        </h2>
        <p className="text-gray-400 mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base">
          {`Have a project in mind or just want to chat? I'm always open to discussing new opportunities and interesting ideas.`}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start">
        <ContactForm />
        
        <div className="space-y-4 sm:space-y-6">
          {/* Contact info cards */}
          <div className="p-4 sm:p-5 rounded-xl border border-gray-800 bg-[#0d1224]/60">
            <h3 className="text-white font-semibold text-xs sm:text-sm mb-3 sm:mb-4">Contact information</h3>
            <div className="space-y-3 sm:space-y-4">
              <a href={`mailto:${personalData.email}`} className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-300 hover:text-violet-300 transition-colors group">
                <MdAlternateEmail className="text-gray-400 group-hover:text-violet-400 transition-colors flex-shrink-0" size={18} />
                <span className="truncate">{personalData.email}</span>
              </a>

              <a href={`tel:${personalData.phone}`} className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-300 hover:text-violet-300 transition-colors group">
                <IoMdCall className="text-gray-400 group-hover:text-violet-400 transition-colors flex-shrink-0" size={18} />
                <span>{personalData.phone}</span>
              </a>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personalData.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-300 hover:text-violet-300 transition-colors group"
              >
                <CiLocationOn className="text-gray-400 group-hover:text-violet-400 transition-colors flex-shrink-0" size={18} />
                <span className="truncate">{personalData.address}</span>
              </a>
            </div>
          </div>

          {/* Social links */}
          <div className="p-4 sm:p-5 rounded-xl border border-gray-800 bg-[#0d1224]/60">
            <h3 className="text-white font-semibold text-xs sm:text-sm mb-3 sm:mb-4">Find me online</h3>
            <div className="flex items-center gap-2 sm:gap-3">
              <Link target="_blank" href={personalData.github} className="p-2 sm:p-2.5 rounded-lg bg-gray-800/60 border border-gray-700/50 text-gray-400 hover:text-violet-300 hover:border-violet-500/30 transition-all duration-300">
                <IoLogoGithub size={18} />
              </Link>
              <Link target="_blank" href={personalData.linkedIn} className="p-2 sm:p-2.5 rounded-lg bg-gray-800/60 border border-gray-700/50 text-gray-400 hover:text-violet-300 hover:border-violet-500/30 transition-all duration-300">
                <BiLogoLinkedin size={18} />
              </Link>
              {personalData.twitter && (
                <Link target="_blank" href={personalData.twitter} className="p-2 sm:p-2.5 rounded-lg bg-gray-800/60 border border-gray-700/50 text-gray-400 hover:text-violet-300 hover:border-violet-500/30 transition-all duration-300">
                  <FaXTwitter size={18} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;