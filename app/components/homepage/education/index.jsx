"use client";

import { educations } from "@/utils/data/educations";
import { BsBook } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";

function Education() {
  return (
    <div id="education" className="relative z-50 my-16 lg:my-28">
      {/* Section header */}
      <div className="flex items-center justify-start relative mb-8 sm:mb-12">
        <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-3 sm:px-5 py-2 sm:py-3 text-base sm:text-xl rounded-md">
          LEARNING
        </span>
        <span className="w-full h-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="mb-6 sm:mb-10">
        <p className="text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2 sm:mb-3">
          Education & training
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
          Background and continuous learning
        </h2>
      </div>

      <div className="relative">
        {/* Timeline line - hidden on very small screens */}
        <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gray-800 hidden sm:block" />

        <div className="space-y-4 sm:space-y-6">
          {educations.map((edu) => (
            <div key={edu.id} className="relative flex items-start gap-4 sm:gap-8 group">
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0 mt-0.5 sm:mt-1">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1a1443] border-2 border-violet-500/30 flex items-center justify-center group-hover:border-violet-400 transition-colors duration-300">
                  <BsBook className="text-violet-400" size={14} />
                </div>
              </div>

              {/* Content card */}
              <div className="flex-1 min-w-0 p-3 sm:p-4 lg:p-5 rounded-xl border border-gray-800 bg-[#0d1224]/60 hover:border-violet-500/20 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                    {edu.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-gray-400 flex-shrink-0">
                    <FiCalendar size={10} />
                    {edu.duration}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                  {edu.institution}
                </p>
                {edu.details && (
                  <ul className="space-y-0.5 sm:space-y-1 mt-1 sm:mt-2">
                    {edu.details.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-gray-400">
                        <span className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-violet-400 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;