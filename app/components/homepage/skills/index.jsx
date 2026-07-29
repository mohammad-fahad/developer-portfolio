// @flow strict

import { FiServer, FiLayout, FiShield, FiTerminal } from "react-icons/fi";

const capabilityCategories = [
  {
    icon: <FiLayout size={18} />,
    title: "Frontend Architecture",
    description: "Building responsive, accessible, and performant user interfaces with modern component architecture.",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Component Design", "Responsive Systems"],
  },
  {
    icon: <FiServer size={18} />,
    title: "Backend & Data",
    description: "Designing scalable APIs, data models, and server-side logic for production applications.",
    skills: ["Node.js", "Express", "Prisma", "PostgreSQL", "REST APIs", "Supabase"],
  },
  {
    icon: <FiShield size={18} />,
    title: "SaaS Engineering",
    description: "Architecting multi-tenant systems, role-based access control, and secure authentication flows.",
    skills: ["Multi-tenancy", "RBAC", "Authentication", "Authorization", "Workflow Design", "API Security"],
  },
  {
    icon: <FiTerminal size={18} />,
    title: "Production Engineering",
    description: "Shipping reliable software with testing, CI/CD, monitoring, and performance optimization.",
    skills: ["Testing", "CI/CD", "Docker", "Performance", "Security Hardening", "Deployment"],
  },
];

function Skills() {
  return (
    <div id="skills" className="relative z-50 my-16 lg:my-28">
      {/* Section header */}
      <div className="flex items-center justify-start relative mb-8 sm:mb-12">
        <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-3 sm:px-5 py-2 sm:py-3 text-base sm:text-xl rounded-md">
          EXPERTISE
        </span>
        <span className="w-full h-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="mb-6 sm:mb-10">
        <p className="text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2 sm:mb-3">
          Technical capabilities
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
          What I build with
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
        {capabilityCategories.map((category, i) => (
          <div
            key={i}
            className="p-4 sm:p-5 lg:p-6 rounded-xl border border-gray-800 bg-[#0d1224]/60 hover:border-violet-500/20 transition-all duration-300 group"
          >
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-500/20 transition-colors duration-300 flex-shrink-0">
                {category.icon}
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                {category.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 leading-relaxed">
              {category.description}
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-gray-300 bg-gray-800/60 rounded-md border border-gray-700/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;