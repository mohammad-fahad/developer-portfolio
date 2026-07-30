'use client';
import { projectsData } from '@/utils/data/projects-data';
import { FiExternalLink, FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';
import { useState } from 'react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 4);

  return (
    <div id="projects" className="relative z-50 my-16 lg:my-28">
      {/* Section header */}
      <div className="flex items-center justify-start relative mb-8 sm:mb-12">
        <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-3 sm:px-5 py-2 sm:py-3 text-base sm:text-xl rounded-md">
          WORK
        </span>
        <span className="w-full h-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="mb-6 sm:mb-10">
        <p className="text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2 sm:mb-3">
          Selected projects
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
          Products and systems I have engineered
        </h2>
        <p className="text-gray-400 mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base">
          A collection of applications focused on usability, scalability, and production reliability.
        </p>
      </div>

      <div className="space-y-4 sm:space-y-5">
        {displayedProjects.map((project, index) => (
          <Link
            key={project.id}
            href={`/work/${project.slug}`}
            className="group block rounded-xl border border-gray-800 bg-[#0d1224]/60 hover:border-violet-500/30 hover:bg-[#0d1224]/80 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <div className="p-4 sm:p-5 lg:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] sm:text-xs font-medium text-violet-400 bg-violet-500/10 px-1.5 sm:px-2 py-0.5 rounded-full border border-violet-500/20 truncate max-w-[160px] sm:max-w-none">
                      {project.role}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-500 flex-shrink-0">0{index + 1}</span>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white group-hover:text-violet-300 transition-colors duration-300">
                    {project.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View case study
                    <FiArrowUpRight size={10} />
                  </span>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-gray-300 bg-gray-800/60 rounded-lg border border-gray-700/50 hover:border-violet-500/30 hover:text-violet-300 transition-all duration-300"
                    >
                      Live Demo
                      <FiExternalLink size={10} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-3 sm:mb-4">
                {project.description}
              </p>

              {project.highlights && project.highlights.length > 0 && (
                <div className="mb-3 sm:mb-4 space-y-1 sm:space-y-1.5">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-gray-400">
                      <span className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-violet-400 mt-1.5 sm:mt-2 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-gray-400 bg-gray-800/40 rounded-md border border-gray-700/40"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {projectsData.length > 4 && (
        <div className="flex justify-center mt-6 sm:mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-gray-300 bg-gray-800/40 rounded-lg border border-gray-700/50 hover:border-violet-500/30 hover:text-violet-300 transition-all duration-300"
          >
            {showAll ? "Show Less" : `View All Projects (${projectsData.length})`}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;