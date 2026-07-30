import Link from "next/link";
import { FiArrowUpRight, FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { BsCheckCircle } from "react-icons/bs";

function SectionHeader({ label, title, description }) {
  return (
    <div className="mb-8 sm:mb-12">
      <div className="flex items-center justify-start relative mb-6 sm:mb-8">
        <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-3 sm:px-5 py-2 sm:py-3 text-base sm:text-xl rounded-md">
          {label}
        </span>
        <span className="w-full h-[2px] bg-[#1a1443]"></span>
      </div>
      {title && (
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-gray-400 max-w-3xl text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

function ProjectDetail({ project }) {
  if (!project) return null;

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      {/* Back navigation */}
      <Link
        href="/#projects"
        className="group inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-violet-300 transition-colors duration-300 mb-8 sm:mb-10"
      >
        <FiArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
        Back to projects
      </Link>

      {/* Hero */}
      <section className="mb-12 sm:mb-16 lg:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[10px] sm:text-xs font-medium mb-3 sm:mb-4">
                <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-violet-400" />
                {project.role}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3">
                <span className="bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">
                  {project.name}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-400 mb-4 sm:mb-6">
                {project.client}
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                {project.extendedDescription || project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.links?.website && (
                <a
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-violet-500 rounded-full hover:from-violet-500 hover:to-violet-400 transition-all duration-300 shadow-lg shadow-violet-500/20"
                >
                  <FiExternalLink size={14} />
                  Visit Website
                  <FiArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="p-4 sm:p-5 lg:p-6 rounded-xl border border-gray-800 bg-[#0d1224]/80 lg:sticky lg:top-24">
              <h3 className="text-white font-semibold text-xs sm:text-sm mb-3 sm:mb-4">Project Overview</h3>
              <ul className="space-y-2.5 sm:space-y-3">
                <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                  <span className="w-1 h-1 rounded-full bg-violet-400 mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span>Role: {project.role}</span>
                </li>
                <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                  <span className="w-1 h-1 rounded-full bg-violet-400 mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span>Client: {project.client}</span>
                </li>
                <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                  <span className="w-1 h-1 rounded-full bg-violet-400 mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span>Stack: {project.tools.slice(0, 3).join(", ")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="relative my-16 lg:my-28">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-violet-500/20 to-transparent" />
        </div>
        <div className="relative flex justify-center">
          <div className="w-2 h-2 rounded-full bg-violet-500/30 ring-4 ring-[#0a0f1e]" />
        </div>
      </div>

      {/* Challenge */}
      {project.challenge && (
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <SectionHeader
            label="CHALLENGE"
            title="The problem we solved"
            description=""
          />
          <div className="rounded-xl border border-gray-800 bg-[#0d1224]/60 p-4 sm:p-5 lg:p-6">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {project.challenge}
            </p>
          </div>
        </section>
      )}

      <div className="relative my-16 lg:my-28">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-violet-500/20 to-transparent" />
        </div>
        <div className="relative flex justify-center">
          <div className="w-2 h-2 rounded-full bg-violet-500/30 ring-4 ring-[#0a0f1e]" />
        </div>
      </div>

      {/* Solution */}
      {project.solution && (
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <SectionHeader
            label="SOLUTION"
            title="How we approached it"
            description=""
          />
          <div className="rounded-xl border border-gray-800 bg-[#0d1224]/60 p-4 sm:p-5 lg:p-6">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {project.solution}
            </p>
          </div>
        </section>
      )}

      <div className="relative my-16 lg:my-28">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-violet-500/20 to-transparent" />
        </div>
        <div className="relative flex justify-center">
          <div className="w-2 h-2 rounded-full bg-violet-500/30 ring-4 ring-[#0a0f1e]" />
        </div>
      </div>

      {/* Outcomes */}
      {project.outcomes && project.outcomes.length > 0 && (
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <SectionHeader
            label="OUTCOMES"
            title="Results delivered"
            description=""
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {project.outcomes.map((outcome, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 sm:p-4 rounded-xl border border-gray-800 bg-[#0d1224]/60"
              >
                <BsCheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-xs sm:text-sm">{outcome}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="relative my-16 lg:my-28">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-violet-500/20 to-transparent" />
        </div>
        <div className="relative flex justify-center">
          <div className="w-2 h-2 rounded-full bg-violet-500/30 ring-4 ring-[#0a0f1e]" />
        </div>
      </div>

      {/* Engineering Decisions */}
      {project.engineeringDecisions && project.engineeringDecisions.length > 0 && (
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <SectionHeader
            label="ENGINEERING DECISIONS"
            title="Key technical choices"
            description=""
          />
          <div className="space-y-3 sm:space-y-4">
            {project.engineeringDecisions.map((decision, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-800 bg-[#0d1224]/60 p-4 sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="text-violet-400 text-xs sm:text-sm font-mono mt-0.5">0{i + 1}</span>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{decision}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="relative my-16 lg:my-28">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-violet-500/20 to-transparent" />
        </div>
        <div className="relative flex justify-center">
          <div className="w-2 h-2 rounded-full bg-violet-500/30 ring-4 ring-[#0a0f1e]" />
        </div>
      </div>

      {/* Technologies */}
      <section className="mb-12 sm:mb-16 lg:mb-20">
        <SectionHeader
          label="TECHNOLOGIES"
          title="Tools and technologies used"
          description=""
        />
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-300 bg-gray-800/60 rounded-lg border border-gray-700/50"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Back to projects */}
      <div className="mt-12 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 border-t border-gray-800">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-violet-300 transition-colors duration-300"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:-translate-x-0.5 transition-transform">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to projects
        </Link>
      </div>
    </div>
  );
}

export default ProjectDetail;
