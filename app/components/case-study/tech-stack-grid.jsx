const techCategories = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js App Router", description: "Server components, layouts, streaming" },
      { name: "TypeScript", description: "End-to-end type safety" },
      { name: "TailwindCSS", description: "Utility-first styling" },
      { name: "React Query", description: "Server state management" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Next.js API Routes", description: "REST API endpoints" },
      { name: "Prisma ORM", description: "Type-safe database access" },
      { name: "PostgreSQL", description: "Relational database" },
      { name: "Supabase Auth", description: "Authentication & session" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Docker", description: "Containerized deployments" },
      { name: "GitHub Actions", description: "CI/CD automation" },
      { name: "Vercel", description: "Hosting & edge functions" },
      { name: "Sentry", description: "Error monitoring" },
    ],
  },
  {
    category: "Quality",
    items: [
      { name: "Jest", description: "Unit & integration testing" },
      { name: "React Testing Library", description: "Component testing" },
      { name: "Playwright", description: "E2E testing" },
      { name: "Lighthouse CI", description: "Performance auditing" },
    ],
  },
];

function TechStackGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {techCategories.map((category, i) => (
        <div
          key={i}
          className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60 p-3 sm:p-4"
        >
          <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mb-2 sm:mb-3">
            {category.category}
          </h3>
          <div className="space-y-2 sm:space-y-2.5">
            {category.items.map((item, j) => (
              <div key={j} className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-violet-400 mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm font-medium text-[var(--text-secondary)]">{item.name}</p>
                  <p className="text-[10px] sm:text-[11px] text-[var(--text-muted)]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TechStackGrid;
