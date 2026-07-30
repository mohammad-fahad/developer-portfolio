const phases = [
  {
    phase: "Phase 1",
    title: "Foundation & Architecture",
    description: "Set up the project structure, database schema, authentication system, and multi-tenant architecture. Established the core API patterns and data models.",
    details: ["Project scaffolding & monorepo structure", "Database schema design with Prisma", "Authentication with Supabase", "Multi-tenant context middleware"],
  },
  {
    phase: "Phase 2",
    title: "Core Academic Workflows",
    description: "Built the primary academic management features including student enrollment, attendance tracking, and teacher assignment workflows.",
    details: ["Student enrollment & records management", "Attendance tracking system", "Class & section management", "Teacher assignment & scheduling"],
  },
  {
    phase: "Phase 3",
    title: "Financial Operations",
    description: "Implemented comprehensive financial modules including fee structures, payment collection, transaction history, and financial reporting.",
    details: ["Fee structure & configuration", "Payment collection & verification", "Transaction history & audit logs", "Financial reporting & analytics"],
  },
  {
    phase: "Phase 4",
    title: "Production Hardening",
    description: "Focused on security hardening, comprehensive testing, performance optimization, and CI/CD pipeline setup for production readiness.",
    details: ["Security hardening & penetration testing", "Unit, integration & E2E tests", "Performance optimization & Lighthouse", "CI/CD pipeline & Docker setup"],
  },
];

function DevelopmentTimeline() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {phases.map((phase, i) => (
        <div
          key={i}
          className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/80 p-4 sm:p-5 lg:p-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full border border-violet-500/20">
              {phase.phase}
            </span>
          </div>
          <h3 className="text-[var(--text-primary)] font-semibold text-sm sm:text-base mb-2">{phase.title}</h3>
          <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{phase.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
            {phase.details.map((detail, j) => (
              <div key={j} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                <span className="w-1 h-1 rounded-full bg-violet-400 mt-1.5 flex-shrink-0" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DevelopmentTimeline;
