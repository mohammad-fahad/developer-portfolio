// @flow strict
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';
import { personalData } from '@/utils/data/personal-data';

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-gray-800 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 sm:py-8 lg:py-12">
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6">
          {/* Tagline */}
          <p className="text-xs sm:text-sm text-gray-400 max-w-xs sm:max-w-md">
            Building scalable web and SaaS applications with modern full-stack technologies.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              target="_blank"
              href={personalData.github}
              className="text-gray-400 hover:text-violet-300 transition-colors duration-300"
              aria-label="GitHub"
            >
              <BsGithub size={18} />
            </Link>
            <Link
              target="_blank"
              href={personalData.linkedIn}
              className="text-gray-400 hover:text-violet-300 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <BsLinkedin size={18} />
            </Link>
            <Link
              href={`mailto:${personalData.email}`}
              className="text-gray-400 hover:text-violet-300 transition-colors duration-300"
              aria-label="Email"
            >
              <MdAlternateEmail size={18} />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-[10px] sm:text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Mohammad Fahad. All rights reserved.</p>
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-1.5 sm:mt-2">
              <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <span className="text-gray-600">&middot;</span>
              <Link href="/disclaimer" className="hover:text-gray-300 transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;