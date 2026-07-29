// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload, MdArrowForward } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-8 lg:py-20 min-h-screen lg:min-h-[90vh] overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Top gradient glow - responsive sizing */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] lg:w-[600px] lg:h-[300px] bg-violet-500/5 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 w-full items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center order-2 lg:order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-violet-500/20 bg-violet-500/[0.03] text-violet-300 text-[11px] sm:text-sm mb-4 sm:mb-6">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
            {personalData.name}
          </h1>
          
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold mt-2 sm:mt-3 text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-violet-400">
            {personalData.designation}
          </h2>

          {/* Value proposition */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-2xl leading-relaxed">
            {personalData.subheading}
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-3 sm:gap-6 mt-6 sm:mt-8">
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 text-xs sm:text-sm">
              <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              4+ years building products
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 text-xs sm:text-sm">
              <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              Full-stack SaaS architecture
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 text-xs sm:text-sm">
              <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              End-to-end product ownership
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 text-white font-medium text-xs sm:text-sm transition-all duration-300 hover:from-violet-500 hover:to-violet-400 hover:shadow-lg hover:shadow-violet-500/25"
            >
              View Projects
              <MdArrowForward className="group-hover:translate-x-1 transition-transform" size={16} />
            </Link>

            <Link
              href={personalData.resume}
              target="_blank"
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-gray-600 text-gray-300 font-medium text-xs sm:text-sm transition-all duration-300 hover:border-violet-500 hover:text-violet-300"
            >
              Download Resume
              <MdDownload size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 mt-8 sm:mt-10">
            <Link
              href={personalData.github}
              target="_blank"
              className="text-gray-400 hover:text-violet-300 transition-colors duration-300"
              aria-label="GitHub"
            >
              <BsGithub size={20} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="text-gray-400 hover:text-violet-300 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <BsLinkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Right - EduFlow Highlight Card */}
        <div className="lg:col-span-5 order-1 lg:order-2 w-full">
          <div className="relative group">
            {/* Glow effect behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/30 to-violet-400/20 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            
            <div className="relative bg-[#0d1224] border border-gray-800 rounded-2xl overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center gap-1.5 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-gray-800">
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500/80" />
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 sm:ml-3 text-[10px] sm:text-xs text-gray-500">flagship-project</span>
              </div>

              {/* Card content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="px-2 py-0.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-wider text-violet-300 bg-violet-500/10 rounded-full border border-violet-500/20">
                    Featured Project
                  </span>
                </div>

                <h3 className="text-lg sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">
                  EduFlow
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                  Multi-tenant Institution Operating System SaaS
                </p>

                {/* Architecture highlights */}
                <div className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5">
                  <div className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm">
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                    <span className="text-gray-300">Multi-tenant architecture</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm">
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                    <span className="text-gray-300">RBAC & permission hierarchies</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm">
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                    <span className="text-gray-300">Next.js + TypeScript + Prisma + PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm">
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                    <span className="text-gray-300">Production-ready with testing & security hardening</span>
                  </div>
                </div>

                {/* Tech stack mini badges */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-5">
                  {["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Supabase"].map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-medium text-gray-400 bg-gray-800/50 rounded-md border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="#eduflow"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-violet-300 hover:text-violet-200 transition-colors group/link"
                >
                  View case study
                  <FiArrowUpRight className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;