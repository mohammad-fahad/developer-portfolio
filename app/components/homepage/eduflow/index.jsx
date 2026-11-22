import Link from "next/link";
import { FiExternalLink, FiCheck, FiArrowUpRight } from "react-icons/fi";
import { BsShieldCheck, BsLayers, BsPeople, BsGear } from "react-icons/bs";

const architectureHighlights = [
  {
    icon: <BsLayers size={18} />,
    title: "Multi-tenant Architecture",
    description: "Isolated data per institution with shared infrastructure. Each tenant operates independently with their own configuration, users, and workflows.",
  },
  {
    icon: <BsPeople size={18} />,
    title: "Role-Based Access Control",
    description: "Nine-level role hierarchy spanning platform, institution, branch, staff, parent and student contexts with server-side permission checks.",
  },
  {
    icon: <BsShieldCheck size={18} />,
    title: "Security Hardening",
    description: "Row-level security, server-side tenant guards, input validation, rate limiting and secure session management across tenant boundaries.",
  },
  {
    icon: <BsGear size={18} />,
    title: "Production Engineering",
    description: "Vitest and Playwright coverage, guarded migrations, error monitoring and CI/CD for reliable iteration.",
  },
];

const techStack = [
  { category: "Frontend", items: ["Next.js App Router", "TypeScript", "TailwindCSS"] },
  { category: "Backend", items: ["Server Actions", "Prisma ORM", "PostgreSQL", "Supabase Auth"] },
  { category: "Infrastructure", items: ["Docker", "CI/CD", "Vercel", "GitHub Actions"] },
  { category: "Quality", items: ["Vitest", "Playwright", "Prisma validation", "Type checking"] },
];

const workflows = [
  "Student lifecycle, attendance and academic results",
  "Homework, submissions and rubric-based grading",
  "Fee collection, receipts and operational reconciliation",
  "Notices, in-app notifications and governed email campaigns",
  "Parent and student portals for attendance, fees and results",
  "Institution, branch and role hierarchy management",
];

function EduFlowSection() {
  return (
    <section id="eduflow" className="relative z-50 my-16 lg:my-28">
      <div data-reveal className="flex items-center justify-start relative mb-8 sm:mb-12">
        <span className="bg-[var(--section-header-bg)] absolute left-0 w-fit text-[var(--text-primary)] px-3 sm:px-5 py-2 sm:py-3 text-base sm:text-xl rounded-md">
          FLAGSHIP PROJECT
        </span>
        <span className="w-full h-[2px] bg-[var(--section-header-bg)]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
        <div className="lg:col-span-3">
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[10px] sm:text-xs font-medium mb-3 sm:mb-4">
              <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-violet-400" />
              SaaS &bull; Multi-tenant &bull; Active development
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-1 sm:mb-2">
              EduFlow
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-muted)]">
              Multi-tenant Institution Operating System
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
            <div>
              <h3 className="text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1.5 sm:mb-2">The Problem</h3>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                Educational institutions often rely on fragmented tools for attendance, fee operations, communication
                and administration. EduFlow explores a unified, tenant-scoped model that connects administrators,
                teachers, students and parents in one system.
              </p>
            </div>
            <div>
              <h3 className="text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1.5 sm:mb-2">The Solution</h3>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                EduFlow is a founder-led, multi-tenant SaaS platform that brings institution operations into a
                single system. It serves multiple tenants from one codebase with tenant-scoped data boundaries,
                a nine-level role hierarchy and server-side permission checks.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
            {architectureHighlights.map((item, i) => (
              <div
                key={i}
                data-reveal
                data-tilt
                className="tilt-card p-3 sm:p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60 hover:border-violet-500/30 transition-colors duration-300"
              >
                <div className="text-violet-400 mb-2 sm:mb-3">{item.icon}</div>
                <h4 className="text-[var(--text-primary)] font-semibold text-xs sm:text-sm mb-1 sm:mb-1.5">{item.title}</h4>
                <p className="text-[var(--text-muted)] text-[11px] sm:text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mb-6 sm:mb-8">
            <h3 className="text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3 sm:mb-4">Key Workflows</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {workflows.map((wf, i) => (
                <div key={i} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <FiCheck className="text-emerald-400 mt-0.5 flex-shrink-0" size={12} />
                  <span>{wf}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="space-y-4 sm:space-y-6 lg:sticky lg:top-24">
            <div className="p-4 sm:p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/80">
              <h3 className="text-[var(--text-primary)] font-semibold text-xs sm:text-sm mb-3 sm:mb-4">Tech Stack</h3>
              <div className="space-y-3 sm:space-y-4">
                {techStack.map((group) => (
                  <div key={group.category}>
                    <p className="text-[9px] sm:text-[10px] font-medium uppercase tracking-wider text-[var(--text-muted)] mb-1.5 sm:mb-2">
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-medium text-[var(--text-secondary)] bg-[var(--tag-bg)] rounded-md border border-[var(--border-light)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/80">
              <h3 className="text-[var(--text-primary)] font-semibold text-xs sm:text-sm mb-3 sm:mb-4">Production Readiness</h3>
              <div className="space-y-2 sm:space-y-2.5">
                {[
                  "Unit and end-to-end test coverage with Vitest and Playwright",
                  "Guarded Prisma migration workflow",
                  "Server-side tenant and permission checks",
                  "Error monitoring and structured logging",
                  "CI with lint, typecheck and automated tests",
                  "Docker Compose for local infrastructure",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <FiCheck className="text-emerald-400 mt-0.5 flex-shrink-0" size={10} />
                    <span className="text-[11px] sm:text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/work/eduflow"
              target="_blank"
              className="group flex items-center justify-between w-full p-3 sm:p-4 rounded-xl border border-violet-500/20 bg-violet-500/5 hover:bg-violet-500/10 transition-colors duration-300"
            >
              <div className="min-w-0 flex-1">
                <p className="text-[var(--text-primary)] font-medium text-xs sm:text-sm">View the Case Study</p>
                <p className="text-[var(--text-muted)] text-[10px] sm:text-xs mt-0.5 truncate">Explore the architecture and code</p>
              </div>
              <FiExternalLink className="text-violet-400 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EduFlowSection;
