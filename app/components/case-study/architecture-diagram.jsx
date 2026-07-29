// @flow strict

const layers = [
  { label: "Users", items: ["Students", "Teachers", "Parents", "Admins", "Finance"], color: "violet" },
  { label: "Authentication", items: ["Supabase Auth", "JWT Sessions", "OAuth"], color: "blue" },
  { label: "Application", items: ["Next.js App Router", "Server Actions", "API Routes"], color: "emerald" },
  { label: "RBAC + Permission Engine", items: ["Role Hierarchy", "Granular Permissions", "Row-Level Security"], color: "amber" },
  { label: "Business Logic", items: ["Academic", "Finance", "Communication", "Workflows"], color: "violet" },
  { label: "Data Layer", items: ["Prisma ORM", "Migrations", "Validation"], color: "blue" },
  { label: "Database", items: ["PostgreSQL", "Multi-tenant Schema", "Isolation"], color: "emerald" },
];

const colorMap = {
  violet: {
    border: "border-violet-500/20",
    bg: "bg-violet-500/5",
    dot: "bg-violet-400",
    text: "text-violet-300",
  },
  blue: {
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
    dot: "bg-blue-400",
    text: "text-blue-300",
  },
  emerald: {
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
    dot: "bg-emerald-400",
    text: "text-emerald-300",
  },
  amber: {
    border: "border-amber-500/20",
    bg: "bg-amber-500/5",
    dot: "bg-amber-400",
    text: "text-amber-300",
  },
};

function ArchitectureDiagram() {
  return (
    <div className="rounded-xl border border-gray-800 bg-[#0d1224]/80 p-4 sm:p-6 lg:p-8">
      <h3 className="text-white font-semibold text-sm sm:text-base mb-6 sm:mb-8">
        System Architecture
      </h3>
      <div className="flex flex-col items-center gap-0">
        {layers.map((layer, i) => {
          const colors = colorMap[layer.color];
          return (
            <div key={layer.label} className="w-full">
              <div className={`rounded-lg border ${colors.border} ${colors.bg} p-3 sm:p-4`}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 min-w-[140px] sm:min-w-[160px]">
                    <span className={`w-2 h-2 rounded-full ${colors.dot} flex-shrink-0`} />
                    <span className={`text-xs sm:text-sm font-semibold ${colors.text}`}>
                      {layer.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-gray-300 bg-gray-800/60 rounded-md border border-gray-700/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {i < layers.length - 1 && (
                <div className="flex justify-center py-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-600">
                    <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArchitectureDiagram;