import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { BsCheckCircle, BsPersonWorkspace, BsLightbulb } from "react-icons/bs";

function SectionHeader({ label, title }) {
  return (
    <div className="mb-8 sm:mb-12">
      <div className="flex items-center justify-start relative mb-6 sm:mb-8">
        <span className="bg-[var(--section-header-bg)] absolute left-0 w-fit text-[var(--text-primary)] px-3 sm:px-5 py-2 sm:py-3 text-base sm:text-xl rounded-md">
          {label}
        </span>
        <span className="w-full h-[2px] bg-[var(--section-header-bg)]"></span>
      </div>
      {title && (
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4">
          {title}
        </h2>
      )}
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="relative my-16 lg:my-28">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-violet-500/20 to-transparent" />
      </div>
      <div className="relative flex justify-center">
        <div className="w-2 h-2 rounded-full bg-violet-500/30 ring-4 ring-[var(--bg-darker)]" />
      </div>
    </div>
  );
}

function ExperienceDetail({ experience }) {
  if (!experience) return null;

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <Link
        href="/#experience"
        className="group inline-flex items-center gap-2 text-xs sm:text-sm text-[var(--text-muted)] hover:text-violet-300 transition-colors duration-300 mb-8 sm:mb-10"
      >
        <FiArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
        Back to experience
      </Link>

      <section className="mb-12 sm:mb-16 lg:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[10px] sm:text-xs font-medium mb-3 sm:mb-4">
                <BsPersonWorkspace size={12} className="flex-shrink-0" />
                {experience.title}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3">
                <span className="bg-gradient-to-r from-[var(--text-primary)] via-violet-200 to-violet-400 bg-clip-text text-transparent">
                  {experience.company}
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[var(--text-muted)] mb-4 sm:mb-6">
                <span className="inline-flex items-center gap-1.5">
                  <FiCalendar size={12} />
                  {experience.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FiMapPin size={12} />
                  {experience.location}
                </span>
              </div>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed max-w-2xl">
                {experience.description}
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="p-4 sm:p-5 lg:p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/80 lg:sticky lg:top-24">
              <h3 className="text-[var(--text-primary)] font-semibold text-xs sm:text-sm mb-3 sm:mb-4">Quick Facts</h3>
              <ul className="space-y-2.5 sm:space-y-3">
                <li className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <span className="w-1 h-1 rounded-full bg-violet-400 mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span>Role: {experience.title}</span>
                </li>
                <li className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <span className="w-1 h-1 rounded-full bg-violet-400 mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span>Duration: {experience.duration}</span>
                </li>
                <li className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <span className="w-1 h-1 rounded-full bg-violet-400 mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span>Location: {experience.location}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="mb-12 sm:mb-16 lg:mb-20">
        <SectionHeader
          label="RESPONSIBILITIES"
          title="What I owned and delivered"
        />
        <div className="space-y-3 sm:space-y-4">
          {experience.responsibilities.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 sm:p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60"
            >
              <span className="text-violet-400 text-xs sm:text-sm font-mono mt-0.5 flex-shrink-0 w-5">0{i + 1}</span>
              <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {experience.notableProjects && experience.notableProjects.length > 0 && (
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <SectionHeader
            label="PROJECTS"
            title="Key projects delivered"
          />
          <div className="space-y-3 sm:space-y-4">
            {experience.notableProjects.map((proj, i) => (
              <div
                key={i}
                className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60 p-4 sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <BsPersonWorkspace className="text-violet-400" size={14} />
                  </div>
                  <div>
                    <h4 className="text-[var(--text-primary)] text-sm sm:text-base font-semibold mb-1">{proj.name}</h4>
                    <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed">{proj.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <SectionDivider />

      {experience.technicalDecisions && experience.technicalDecisions.length > 0 && (
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <SectionHeader
            label="TECHNICAL DECISIONS"
            title="Engineering choices made"
          />
          <div className="space-y-3 sm:space-y-4">
            {experience.technicalDecisions.map((decision, i) => (
              <div
                key={i}
                className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60 p-4 sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <FiArrowUpRight className="text-violet-400 mt-0.5 flex-shrink-0" size={14} />
                  <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed">{decision}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <SectionDivider />

      <section className="mb-12 sm:mb-16 lg:mb-20">
        <SectionHeader
          label="TECHNOLOGIES"
          title="Tools and technologies used"
        />
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs sm:text-sm font-medium text-[var(--text-secondary)] bg-[var(--tag-bg)] rounded-lg border border-[var(--border-light)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <SectionDivider />

      {experience.achievements && experience.achievements.length > 0 && (
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <SectionHeader
            label="ACHIEVEMENTS"
            title="Impact made"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {experience.achievements.map((achievement, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 sm:p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60"
              >
                <BsCheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={16} />
                <span className="text-[var(--text-secondary)] text-xs sm:text-sm">{achievement}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <SectionDivider />

      {experience.lessons && (
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <SectionHeader
            label="LESSONS LEARNED"
            title="What this experience taught me"
          />
          <div className="flex items-start gap-3 p-4 sm:p-5 lg:p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60">
            <BsLightbulb className="text-amber-400 mt-0.5 flex-shrink-0" size={20} />
            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">{experience.lessons}</p>
          </div>
        </section>
      )}

      <div className="mt-12 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 border-t border-[var(--border-color)]">
        <Link
          href="/#experience"
          className="group inline-flex items-center gap-2 text-xs sm:text-sm text-[var(--text-muted)] hover:text-violet-300 transition-colors duration-300"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:-translate-x-0.5 transition-transform">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to experience
        </Link>
      </div>
    </div>
  );
}

export default ExperienceDetail;
