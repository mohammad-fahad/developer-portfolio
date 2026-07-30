"use client";

import { experiences } from "@/utils/data/experience";
import { BsPersonWorkspace } from "react-icons/bs";
import { FiCalendar, FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

function Experience() {
  return (
    <div id="experience" className="relative z-50 my-16 lg:my-28">
      <div className="flex items-center justify-start relative mb-8 sm:mb-12">
        <span className="bg-[var(--section-header-bg)] absolute left-0 w-fit text-[var(--text-primary)] px-3 sm:px-5 py-2 sm:py-3 text-base sm:text-xl rounded-md">
          EXPERIENCE
        </span>
        <span className="w-full h-[2px] bg-[var(--section-header-bg)]"></span>
      </div>

      <div className="mb-6 sm:mb-10">
        <p className="text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2 sm:mb-3">
          Where I have worked
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">
          Professional experience
        </h2>
        <p className="text-[var(--text-muted)] mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base">
          Click on any role to see the full story — responsibilities, projects, technical decisions, and lessons learned.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-[var(--timeline-bg)] hidden sm:block" />

        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp) => (
            <Link
              key={exp.id}
              href={`/experience/${exp.slug}`}
              className="relative flex items-start gap-4 sm:gap-8 group cursor-pointer"
            >
              <div className="relative z-10 flex-shrink-0 mt-0.5 sm:mt-1">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--section-header-bg)] border-2 border-violet-500/30 flex items-center justify-center group-hover:border-violet-400 transition-colors duration-300">
                  <BsPersonWorkspace className="text-violet-400" size={14} />
                </div>
              </div>

              <div className="flex-1 min-w-0 p-3 sm:p-4 lg:p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60 hover:border-violet-500/30 hover:bg-[var(--bg-primary)]/80 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[var(--text-primary)] group-hover:text-violet-300 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-[var(--text-muted)] flex-shrink-0">
                    <FiCalendar size={10} />
                    {exp.durationShort}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                    {exp.company} — {exp.location}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 ml-2">
                    View details
                    <FiArrowUpRight size={10} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
