"use client";

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
    description: "Hierarchical role system spanning Super Admin, Institution Admin, Teachers, Students, and Parents — each with granular permissions.",
  },
  {
    icon: <BsShieldCheck size={18} />,
    title: "Security Hardening",
    description: "Row-level security, API rate limiting, input validation, CSRF protection, and secure session management across all tenant boundaries.",
  },
  {
    icon: <BsGear size={18} />,
    title: "Production Engineering",
    description: "Comprehensive testing strategy, error monitoring, performance optimization, and CI/CD pipeline for reliable deployments.",
  },
];

const techStack = [
  { category: "Frontend", items: ["Next.js App Router", "TypeScript", "TailwindCSS", "React Query"] },
  { category: "Backend", items: ["Next.js API Routes", "Prisma ORM", "PostgreSQL", "Supabase Auth"] },
  { category: "Infrastructure", items: ["Docker", "CI/CD", "Vercel", "GitHub Actions"] },
  { category: "Quality", items: ["Jest", "React Testing Library", "E2E Tests", "Lighthouse CI"] },
];

const workflows = [
  "Attendance management with real-time tracking",
  "Finance workflows including fee collection and invoicing",
  "Teacher workflow automation (assignments, grading, reports)",
  "Parent portal for student progress and communication",
  "Notification system (email, in-app, push)",
  "Institution ownership hierarchy and management",
];

function EduFlowSection() {
  return (
    <section id="eduflow" className="relative z-50 my-16 lg:my-28">
      <div className="flex items-center justify-start relative mb-8 sm:mb-12">
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
              SaaS &bull; Multi-tenant &bull; Production-ready
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
                Educational institutions struggle with fragmented digital operations — separate systems for attendance, 
                finance, communication, and administration. No unified platform exists that connects all stakeholders 
                (administrators, teachers, students, parents) in a secure, scalable way.
              </p>
            </div>
            <div>
              <h3 className="text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1.5 sm:mb-2">The Solution</h3>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                EduFlow is a multi-tenant SaaS platform that unifies institution operations into a single, 
                scalable system. Built with modern full-stack architecture, it serves multiple institutions 
                from a single codebase while maintaining complete data isolation and role-based access.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
            {architectureHighlights.map((item, i) => (
              <div
                key={i}
                className="p-3 sm:p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60 hover:border-violet-500/30 transition-colors duration-300"
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
                  "Comprehensive test coverage (unit, integration, E2E)",
                  "Security hardening & vulnerability scanning",
                  "Performance optimization & Lighthouse audits",
                  "Error monitoring & logging infrastructure",
                  "CI/CD pipeline with automated testing",
                  "Docker containerization for consistent deployments",
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
