// @flow strict
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';
import { personalData } from '@/utils/data/personal-data';

function Footer() {
  return (
    <div className="relative border-t bg-[var(--bg-primary)] border-[var(--border-color)] text-[var(--text-primary)]">
      <div className="mx-auto px-4 sm:px-6 lg:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 sm:py-8 lg:py-12">
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6">
          <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-xs sm:max-w-md">
            Building scalable web and SaaS applications with modern full-stack technologies.
          </p>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              target="_blank"
              href={personalData.github}
              className="text-[var(--text-muted)] hover:text-violet-300 transition-colors duration-300"
              aria-label="GitHub"
            >
              <BsGithub size={18} />
            </Link>
            <Link
              target="_blank"
              href={personalData.linkedIn}
              className="text-[var(--text-muted)] hover:text-violet-300 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <BsLinkedin size={18} />
            </Link>
            <Link
              href={`mailto:${personalData.email}`}
              className="text-[var(--text-muted)] hover:text-violet-300 transition-colors duration-300"
              aria-label="Email"
            >
              <MdAlternateEmail size={18} />
            </Link>
          </div>

          <div className="text-[10px] sm:text-xs text-[var(--text-muted)]">
            <p>&copy; {new Date().getFullYear()} Mohammad Fahad. All rights reserved.</p>
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-1.5 sm:mt-2">
              <Link href="/privacy-policy" className="hover:text-[var(--text-secondary)] transition-colors">Privacy Policy</Link>
              <span className="text-[var(--border-color)]">&middot;</span>
              <Link href="/disclaimer" className="hover:text-[var(--text-secondary)] transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
