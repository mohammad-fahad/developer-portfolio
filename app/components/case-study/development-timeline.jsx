// @flow strict

const timelinePhases = [
  {
    phase: "Architecture Foundation",
    description: "Project setup, database schema design, multi-tenant data model, and core infrastructure.",
  },
  {
    phase: "Authentication & Role System",
    description: "User authentication, session management, role hierarchy, and permission engine.",
  },
  {
    phase: "Multi-Tenant Platform",
    description: "Tenant isolation, institution onboarding, organization management, and configuration system.",
  },
  {
    phase: "Academic Workflows",
    description: "Student management, teacher workflows, attendance tracking, class and section organization.",
  },
  {
    phase: "Finance System",
    description: "Fee structures, payment processing, transaction records, financial reporting.",
  },
  {
    phase: "Security Hardening",
    description: "Row-level security, input validation, rate limiting, audit logging, vulnerability scanning.",
  },
  {
    phase: "Production Readiness",
    description: "Testing strategy, CI/CD pipeline, error monitoring, performance optimization, documentation.",
  },
];

function DevelopmentTimeline() {
  return (
    <div className="rounded-xl border border-gray-800 bg-[#0d1224]/80 p-4 sm:p-6 lg:p-8">
      {/* Desktop: horizontal timeline */}
      <div className="hidden sm:block">
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-4 left-0 right-0 h-px bg-gray-800" />

          <ol className="relative flex justify-between">
            {timelinePhases.map((item, i) => (
              <li key={item.phase} className="flex flex-col items-center text-center flex-1 min-w-0">
                {/* Dot */}
                <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full border border-gray-700 bg-[#0d1224] mb-3">
                  <span className="w-2 h-2 rounded-full bg-violet-400" />
                </div>

                {/* Phase number */}
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 mb-1">
                  Phase {i + 1}
                </span>

                {/* Phase name */}
                <h4 className="text-white text-xs font-semibold leading-tight mb-1 px-1">
                  {item.phase}
                </h4>

                {/* Description */}
                <p className="text-gray-500 text-[10px] leading-relaxed px-1 max-w-[140px]">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="sm:hidden">
        <ol className="relative">
          {/* Vertical line */}
          <div className="absolute left-3.5 top-0 bottom-0 w-px bg-gray-800" />

          {timelinePhases.map((item, i) => (
            <li key={item.phase} className="relative flex items-start gap-4 pb-6 last:pb-0">
              {/* Dot */}
              <div className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full border border-gray-700 bg-[#0d1224] flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              </div>

              <div className="min-w-0 pt-0.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 block mb-0.5">
                  Phase {i + 1}
                </span>
                <h4 className="text-white text-sm font-semibold mb-1">
                  {item.phase}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default DevelopmentTimeline;