function ArchitectureDiagram() {
  const layers = [
    {
      label: "Presentation Layer",
      items: ["Next.js App Router", "Server & Client Components", "TailwindCSS UI", "React Query"],
      color: "text-violet-300",
      border: "border-violet-500/20",
    },
    {
      label: "API Layer",
      items: ["Next.js API Routes", "Server Actions", "Middleware", "Rate Limiting"],
      color: "text-blue-300",
      border: "border-blue-500/20",
    },
    {
      label: "Service Layer",
      items: ["Auth Service", "Tenant Context", "Business Logic", "Validation"],
      color: "text-emerald-300",
      border: "border-emerald-500/20",
    },
    {
      label: "Data Layer",
      items: ["Prisma ORM", "PostgreSQL", "Row-Level Security", "Redis Cache"],
      color: "text-amber-300",
      border: "border-amber-500/20",
    },
  ];

  return (
    <div className="space-y-3 sm:space-y-4">
      {layers.map((layer, i) => (
        <div
          key={i}
          className={`rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/80 p-3 sm:p-4 ${i < layers.length - 1 ? "" : ""}`}
        >
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <div className="w-2 h-2 rounded-full bg-violet-400" />
            <span className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider ${layer.color}`}>
              {layer.label}
            </span>
          </div>
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {layer.items.map((item, j) => (
              <span
                key={j}
                className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-medium text-[var(--text-secondary)] bg-[var(--tag-bg)] rounded-md border border-[var(--border-light)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
      {/* Connecting arrows */}
      <div className="flex justify-center">
        <div className="flex items-center gap-1 text-[var(--text-muted)] text-[10px] sm:text-xs">
          <span className="w-16 h-px bg-[var(--text-muted)]" />
          <span>Data Flow</span>
          <span className="w-16 h-px bg-[var(--text-muted)]" />
        </div>
      </div>
    </div>
  );
}

export default ArchitectureDiagram;
