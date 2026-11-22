// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload, MdArrowForward } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import SystemVisual from "@/app/components/three/system-visual";

function HeroSection() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center py-8 lg:py-20 min-h-screen lg:min-h-[90vh] overflow-hidden">
      <div className="hero-grid absolute inset-0 -z-10" />

      <div
        data-hero-parallax
        data-parallax-speed="-18"
        className="hero-orb absolute -top-24 left-1/2 -translate-x-1/2 w-[320px] h-[220px] sm:w-[460px] sm:h-[280px] lg:w-[680px] lg:h-[360px] rounded-full -z-10"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 w-full items-center">
        <div className="lg:col-span-7 flex flex-col items-start justify-center order-2 lg:order-1">
          <div data-hero-reveal className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-violet-500/20 bg-[var(--badge-bg)] text-violet-300 text-[11px] sm:text-sm mb-4 sm:mb-6">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </div>

          <h1 data-hero-reveal className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-[var(--text-primary)]">
            {personalData.name}
          </h1>
          
          <h2 data-hero-reveal className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold mt-2 sm:mt-3 text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-violet-400">
            {personalData.designation}
          </h2>

          <p data-hero-reveal className="text-[var(--text-secondary)] text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-2xl leading-relaxed">
            {personalData.subheading}
          </p>

          <div data-hero-reveal className="flex flex-wrap gap-3 sm:gap-6 mt-6 sm:mt-8">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[var(--text-muted)] text-xs sm:text-sm">
              <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              <span data-count="4" data-suffix="+">4+</span> years building products
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[var(--text-muted)] text-xs sm:text-sm">
              <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              Full-stack SaaS architecture
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[var(--text-muted)] text-xs sm:text-sm">
              <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              End-to-end product ownership
            </div>
          </div>

          <div data-hero-reveal className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
            <Link
              href="#projects"
              data-magnetic
              className="btn-accent group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-xs sm:text-sm transition-all duration-300"
            >
              View Projects
              <MdArrowForward className="group-hover:translate-x-1 transition-transform" size={16} />
            </Link>

            <Link
              href={personalData.resume}
              target="_blank"
              data-magnetic
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)]/60 text-[var(--text-secondary)] font-medium text-xs sm:text-sm transition-all duration-300 hover:border-violet-500 hover:text-violet-300"
            >
              Download Resume
              <MdDownload size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div data-hero-reveal className="flex items-center gap-4 mt-8 sm:mt-10">
            <Link
              href={personalData.github}
              target="_blank"
              className="text-[var(--text-muted)] hover:text-violet-300 transition-colors duration-300"
              aria-label="GitHub"
            >
              <BsGithub size={20} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="text-[var(--text-muted)] hover:text-violet-300 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <BsLinkedin size={20} />
            </Link>
          </div>
        </div>

        <div data-hero-reveal className="lg:col-span-5 order-1 lg:order-2 w-full">
          <div
            data-hero-parallax
            data-parallax-speed="-8"
            data-tilt
            className="tilt-card relative h-[280px] sm:h-[340px] lg:h-[420px] rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-primary)]/40"
          >
            <SystemVisual />

            <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3">
              <span className="text-[10px] sm:text-xs text-[var(--text-muted)]">systems / connected</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/10 px-2 py-0.5 text-[9px] sm:text-[10px] font-medium text-violet-300">
                Flagship project
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/85 to-transparent px-4 pb-4 pt-12 sm:px-5 sm:pb-5">
              <h3 className="text-lg sm:text-2xl font-bold text-[var(--text-primary)]">EduFlow</h3>
              <p className="mb-3 text-xs text-[var(--text-muted)] sm:text-sm">
                Multi-tenant Institution Operating System SaaS
              </p>
              <div className="mb-3 flex flex-wrap gap-1 sm:gap-1.5">
                {["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Supabase"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-[var(--border-light)] bg-[var(--tag-bg)] px-1.5 py-0.5 text-[9px] font-medium text-[var(--text-muted)] sm:px-2 sm:text-[10px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href="#eduflow"
                className="inline-flex items-center gap-1.5 text-xs text-violet-300 transition-colors hover:text-violet-200 sm:text-sm"
              >
                View case study
                <FiArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-10 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] sm:mt-14">
        <div
          data-marquee
          className="flex w-max items-center gap-8 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)] sm:text-xs"
        >
          {[...Array(2)].flatMap((_, group) =>
            [
              "Next.js",
              "TypeScript",
              "Multi-tenant SaaS",
              "PostgreSQL",
              "Three.js",
              "GSAP",
              "RBAC",
              "Production engineering",
            ].map((label) => (
              <span key={`${group}-${label}`} className="flex items-center gap-8">
                {label}
                <span className="h-1 w-1 rounded-full bg-violet-400" />
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
