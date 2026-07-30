// @flow strict

import Link from "next/link";
import { FiArrowUpRight, FiLock, FiCalendar, FiUser, FiCpu } from "react-icons/fi";
import {
  BsBook,
  BsCashCoin,
  BsChatDots,
  BsPersonBadge,
} from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import CaseStudySection from "@/app/components/case-study/section-wrapper";
import SectionHeader from "@/app/components/case-study/section-header";
import ArchitectureDiagram from "@/app/components/case-study/architecture-diagram";
import TechStackGrid from "@/app/components/case-study/tech-stack-grid";
import FeatureCard from "@/app/components/case-study/feature-card";
import DecisionCard from "@/app/components/case-study/decision-card";
import ChallengeCard from "@/app/components/case-study/challenge-card";
import DevelopmentTimeline from "@/app/components/case-study/development-timeline";
import ScreenshotGallery from "@/app/components/case-study/screenshot-gallery";

export const metadata = {
  title: "EduFlow — Multi-tenant Institution Operating System | Mohammad Fahad",
  description:
    "A full-stack SaaS platform designed to help schools, madrasas, and educational institutions manage operations through role-based workflows, automation, and centralized data. Built with Next.js, TypeScript, Prisma, and PostgreSQL.",
  openGraph: {
    title: "EduFlow — Multi-tenant Institution Operating System | Mohammad Fahad",
    description:
      "A full-stack SaaS platform designed to help schools, madrasas, and educational institutions manage operations through role-based workflows, automation, and centralized data.",
    url: "/work/eduflow",
    images: [{ url: "/card.png", width: 1200, height: 630, alt: "EduFlow Case Study" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EduFlow — Multi-tenant Institution Operating System | Mohammad Fahad",
    description:
      "A full-stack SaaS platform designed to help schools, madrasas, and educational institutions manage operations through role-based workflows, automation, and centralized data.",
    images: ["/card.png"],
  },
};

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

function EduFlowCaseStudy() {
  return (
    <div className="py-8 sm:py-12 lg:py-16">
      {/* ============ HERO ============ */}
      <CaseStudySection id="hero">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Main content */}
          <div className="lg:col-span-3">
            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[10px] sm:text-xs font-medium mb-3 sm:mb-4">
                <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-violet-400" />
                CASE STUDY &bull; SAAS &bull; FULL-STACK
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3">
                <span className="bg-gradient-to-r from-[var(--text-primary)] via-violet-200 to-violet-400 bg-clip-text text-transparent">
                  EduFlow
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-[var(--text-muted)] mb-4 sm:mb-6">
                Multi-tenant Institution Operating System
              </p>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed max-w-2xl">
                A full-stack SaaS platform designed to help schools, madrasas, and educational
                institutions manage operations through role-based workflows, automation, and
                centralized data. Built from the ground up with production engineering practices.
              </p>
            </div>

            {/* Meta info */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)]/60">
                <FiUser className="text-violet-400 mb-1.5 sm:mb-2" size={14} />
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-0.5">Role</p>
                <p className="text-[var(--text-primary)] text-xs sm:text-sm font-medium">Solo Full-Stack Engineer</p>
              </div>
              <div className="p-3 sm:p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)]/60">
                <FiCalendar className="text-violet-400 mb-1.5 sm:mb-2" size={14} />
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-0.5">Timeline</p>
                <p className="text-[var(--text-primary)] text-xs sm:text-sm font-medium">In Development</p>
              </div>
              <div className="p-3 sm:p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)]/60">
                <FiCpu className="text-violet-400 mb-1.5 sm:mb-2" size={14} />
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-0.5">Stack</p>
                <p className="text-[var(--text-primary)] text-xs sm:text-sm font-medium">Next.js + Prisma + PostgreSQL</p>
              </div>
              <div className="p-3 sm:p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)]/60">
                <FiLock className="text-violet-400 mb-1.5 sm:mb-2" size={14} />
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-0.5">Repository</p>
                <p className="text-[var(--text-primary)] text-xs sm:text-sm font-medium">Private</p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="https://edu-flow-one-pearl.vercel.app/"
              target="_blank"
              className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-violet-500 rounded-full hover:from-violet-500 hover:to-violet-400 transition-all duration-300 shadow-lg shadow-violet-500/20"
            >
              <BiWorld size={14} />
              View Website
              <FiArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Sidebar summary */}
          <div className="lg:col-span-2">
            <div className="p-4 sm:p-5 lg:p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/80 lg:sticky lg:top-24">
              <h3 className="text-[var(--text-primary)] font-semibold text-xs sm:text-sm mb-3 sm:mb-4">At a Glance</h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {[
                  "Multi-tenant architecture with institution-level data isolation",
                  "Role-based access control with 8 hierarchical roles",
                  "Unified academic, financial, and communication workflows",
                  "Production-grade security, testing, and CI/CD pipeline",
                  "Built with Next.js App Router, TypeScript, Prisma, PostgreSQL",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <span className="w-1 h-1 rounded-full bg-violet-400 mt-1.5 sm:mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* ============ PRODUCT OVERVIEW ============ */}
      <CaseStudySection id="overview">
        <SectionHeader
          label="PRODUCT OVERVIEW"
          title="A unified operating system for educational institutions"
          description="EduFlow replaces fragmented digital tools with a single, cohesive platform that connects every stakeholder in an educational institution."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Problem */}
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60 p-4 sm:p-5 lg:p-6">
            <h3 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-red-400 mb-3 sm:mb-4">The Problem</h3>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              Educational institutions often rely on disconnected tools for:
            </p>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                "Attendance tracking — paper-based or siloed systems",
                "Student records — scattered across spreadsheets and files",
                "Fee management — manual collection with limited transparency",
                "Communication — fragmented across WhatsApp, email, and notice boards",
                "Staff workflows — no centralized system for teachers and administrators",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-muted)]">
                  <span className="w-1 h-1 rounded-full bg-red-400/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60 p-4 sm:p-5 lg:p-6">
            <h3 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3 sm:mb-4">The Solution</h3>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              A unified SaaS operating system that brings everything together:
            </p>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                "Single platform for attendance, records, fees, and communication",
                "Role-specific dashboards for each stakeholder type",
                "Real-time data synchronization across all modules",
                "Automated workflows reducing manual administrative work",
                "Scalable architecture serving multiple institutions from one codebase",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-muted)]">
                  <span className="w-1 h-1 rounded-full bg-emerald-400/60 mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CaseStudySection>

      <SectionDivider />

      {/* ============ ARCHITECTURE ============ */}
      <CaseStudySection id="architecture">
        <SectionHeader
          label="ARCHITECTURE"
          title="System architecture and data flow"
          description="Designed for multi-tenancy, security, and scalability from day one."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          <div className="lg:col-span-3">
            <ArchitectureDiagram />
          </div>
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60 p-4 sm:p-5">
              <h3 className="text-[var(--text-primary)] font-semibold text-xs sm:text-sm mb-2 sm:mb-3">Multi-tenancy</h3>
              <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed">
                Each institution operates in an isolated tenant context. Data is scoped by
                institution ID at the database level, with Row-Level Security policies ensuring
                tenants can never access data from other institutions.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60 p-4 sm:p-5">
              <h3 className="text-[var(--text-primary)] font-semibold text-xs sm:text-sm mb-2 sm:mb-3">Institution Isolation</h3>
              <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed">
                Shared infrastructure with isolated data per institution. Each tenant has their
                own configuration, user base, academic structure, and financial records.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60 p-4 sm:p-5">
              <h3 className="text-[var(--text-primary)] font-semibold text-xs sm:text-sm mb-2 sm:mb-3">Role Hierarchy</h3>
              <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed">
                Permission-driven access control with 8 hierarchical roles. Each role has
                granular permissions that can be customized per institution.
              </p>
            </div>
          </div>
        </div>
      </CaseStudySection>

      <SectionDivider />

      {/* ============ ENGINEERING DECISIONS ============ */}
      <CaseStudySection id="engineering">
        <SectionHeader
          label="ENGINEERING DECISIONS"
          title="Key architectural and engineering choices"
          description="Every decision was made with production reliability, scalability, and maintainability in mind."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <DecisionCard
            title="Multi-Tenant Architecture"
            decision="Designed institution-level data isolation using tenant-scoped database queries and Row-Level Security policies."
            why="Allows multiple schools to use one platform securely without risk of data leakage between tenants."
            impact="Enables scalable onboarding of new institutions without infrastructure changes."
          />
          <DecisionCard
            title="RBAC Permission System"
            decision="Built a hierarchical role system instead of hardcoded dashboards. Roles include Super Admin, Institution Owner, Admin, Moderator, Finance, Teacher, Parent, and Student."
            why="Educational institutions have complex organizational structures that require flexible, granular access control."
            impact="Each user sees exactly what they need — no more, no less. New roles can be added without code changes."
          />
          <DecisionCard
            title="TypeScript Throughout"
            decision="Full end-to-end type safety from database schema (Prisma) through API layer to UI components."
            why="Catches errors at compile time rather than runtime. Critical for a platform handling sensitive educational and financial data."
            impact="Reduced runtime errors, improved developer experience, and safer refactoring."
          />
          <DecisionCard
            title="Server Actions + API Routes"
            decision="Used Next.js Server Actions for form mutations and API Routes for external integrations, with consistent validation on both layers."
            why="Server Actions provide tight integration with the App Router while API Routes offer standard REST endpoints for external consumers."
            impact="Unified data flow with consistent validation, error handling, and type safety."
          />
          <DecisionCard
            title="Security Hardening"
            decision="Implemented CSRF protection, rate limiting, input validation, secure session management, and SQL injection prevention at every layer."
            why="Educational platforms handle sensitive student data and financial transactions — security is non-negotiable."
            impact="Defense-in-depth approach ensures multiple layers of protection against common attack vectors."
          />
          <DecisionCard
            title="Testing & CI/CD Strategy"
            decision="Comprehensive testing across unit, integration, and E2E levels with automated CI/CD pipeline."
            why="Production SaaS requires confidence that changes don't break existing functionality across the multi-tenant system."
            impact="Automated quality gates catch regressions before deployment, enabling confident iteration."
          />
        </div>
      </CaseStudySection>

      {/* ============ TECHNICAL CHALLENGES ============ */}
      <CaseStudySection id="challenges">
        <SectionHeader
          label="TECHNICAL CHALLENGES"
          title="Engineering problems solved during development"
          description="Each challenge required careful architectural thinking and deliberate trade-offs."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <ChallengeCard
            title="Multi-Tenant Data Isolation"
            challenge="Multiple institutions use one SaaS platform while keeping data securely separated. A data leak between tenants would be catastrophic."
            approach="Designed institution ownership boundaries with tenant-aware database queries, Row-Level Security policies, and middleware-level tenant context injection."
            impact="Created a scalable foundation for supporting multiple organizations from a single codebase with zero data leakage risk."
          />
          <ChallengeCard
            title="Flexible RBAC System"
            challenge="Different institution roles require completely different workflows and data access. Hardcoded dashboards would not scale across diverse institution types."
            approach="Built a permission-driven access control system with 8 hierarchical roles, each with granular permissions configurable per institution."
            impact="Allowed future role expansion without code changes. Each user sees exactly the interface and data their role permits."
          />
          <ChallengeCard
            title="Production Reliability"
            challenge="Moving from prototype quality to production readiness required systematic engineering discipline across testing, security, and deployment."
            approach="Added comprehensive validation at every layer, unit and integration tests, CI/CD automation, error monitoring, and security hardening."
            impact="Improved maintainability and deployment confidence. Changes can be shipped rapidly with automated quality gates."
          />
          <ChallengeCard
            title="Complex Business Workflows"
            challenge="Education platforms combine academic, financial, and communication systems that must work together seamlessly while remaining maintainable."
            approach="Separated business domains into modular systems with clear boundaries, shared through a common data layer and event-driven communication."
            impact="Made future feature expansion easier. New modules can be added without disrupting existing workflows."
          />
        </div>
      </CaseStudySection>

      <SectionDivider />

      {/* ============ FEATURE SHOWCASE ============ */}
      <CaseStudySection id="features">
        <SectionHeader
          label="FEATURE SHOWCASE"
          title="Capabilities across the platform"
          description="EduFlow provides end-to-end functionality for every aspect of institution management."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <FeatureCard
            icon={<BsBook size={18} />}
            title="Academic Management"
            items={[
              "Student enrollment and records",
              "Teacher assignment and scheduling",
              "Attendance tracking with reports",
              "Class and section management",
              "Academic calendar and timetables",
            ]}
          />
          <FeatureCard
            icon={<BsCashCoin size={18} />}
            title="Financial Operations"
            items={[
              "Fee structure and collection",
              "Payment tracking and receipts",
              "Transaction history and audit logs",
              "Financial reporting and analytics",
              "Discount and scholarship management",
            ]}
          />
          <FeatureCard
            icon={<BsChatDots size={18} />}
            title="Communication"
            items={[
              "Notice board for announcements",
              "In-app notification system",
              "Email notifications",
              "Push notifications",
              "Role-targeted messaging",
            ]}
          />
          <FeatureCard
            icon={<BsPersonBadge size={18} />}
            title="User Experience"
            items={[
              "Parent portal for student progress",
              "Teacher workflow dashboards",
              "Role-specific views and actions",
              "Student self-service portal",
              "Admin control panel",
            ]}
          />
        </div>
      </CaseStudySection>

      <SectionDivider />

      {/* ============ DEVELOPMENT JOURNEY ============ */}
      <CaseStudySection id="journey">
        <SectionHeader
          label="DEVELOPMENT JOURNEY"
          title="Evolution of the platform"
          description="EduFlow progressed through distinct phases, each building on the previous to create a production-grade system."
        />
        <DevelopmentTimeline />
      </CaseStudySection>

      <SectionDivider />

      {/* ============ TECHNOLOGY STACK ============ */}
      <CaseStudySection id="tech-stack">
        <SectionHeader
          label="TECHNOLOGY STACK"
          title="Tools and technologies powering EduFlow"
          description="Modern, production-grade stack chosen for performance, developer experience, and scalability."
        />
        <TechStackGrid />
      </CaseStudySection>

      <SectionDivider />

      {/* ============ SCREENSHOTS ============ */}
      <CaseStudySection id="screenshots">
        <SectionHeader
          label="SCREENSHOTS"
          title="Platform walkthrough"
          description="Production screenshots showing the core workflows and interfaces across the EduFlow platform."
        />
        <ScreenshotGallery
          screenshots={[
            {
              id: 1,
              image: "/images/work/eduflow/screenshots/owner-dashboard.webp",
              title: "Owner Dashboard",
              description:
                "Centralized SaaS command center for institution owners with operational, financial, and user insights.",
              category: "Dashboard",
            },
            {
              id: 2,
              image: "/images/work/eduflow/screenshots/attendance.webp",
              title: "Attendance Module",
              description:
                "Teacher-first attendance workflow with real-time tracking, class-wise views, and automated analytics.",
              category: "Academics",
            },
            {
              id: 3,
              image: "/images/work/eduflow/screenshots/students.webp",
              title: "Student Management",
              description:
                "Complete student lifecycle management including enrollment, records, academic tracking, and parent communication.",
              category: "Academics",
            },
            {
              id: 4,
              image: "/images/work/eduflow/screenshots/finance.webp",
              title: "Financial Operations",
              description:
                "Complete fee collection, payment verification, transaction history, and financial reporting system.",
              category: "Finance",
            },
            {
              id: 5,
              image: "/images/work/eduflow/screenshots/analytics.webp",
              title: "Analytics & Reports",
              description:
                "Data-driven institutional insights with visual dashboards, attendance trends, and financial summaries.",
              category: "Analytics",
            },
            {
              id: 6,
              image: "/images/work/eduflow/screenshots/mobile-dashboard.webp",
              title: "Mobile Dashboard",
              description:
                "Responsive mobile interface providing on-the-go access to key metrics and workflows.",
              category: "Mobile",
            },
            {
              id: 7,
              image: "/images/work/eduflow/screenshots/landing.webp",
              title: "SaaS Landing Page",
              description:
                "Modern, conversion-optimized landing page showcasing the platform value proposition.",
              category: "Marketing",
            },
          ]}
        />
      </CaseStudySection>

      {/* ============ BACK TO HOME ============ */}
      <div className="mt-12 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 border-t border-[var(--border-color)]">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-xs sm:text-sm text-[var(--text-muted)] hover:text-violet-300 transition-colors duration-300"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:-translate-x-0.5 transition-transform">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to portfolio
        </Link>
      </div>
    </div>
  );
}

export default EduFlowCaseStudy;
