// @flow strict

const techGroups = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", desc: "App Router, Server Actions, API Routes" },
      { name: "React", desc: "Server & Client Components, Hooks" },
      { name: "TypeScript", desc: "Strict mode, full type safety" },
      { name: "Tailwind CSS", desc: "Utility-first, dark theme" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Next.js API", desc: "Server Actions, Route Handlers" },
      { name: "Prisma", desc: "ORM, migrations, type-safe queries" },
      { name: "PostgreSQL", desc: "Relational database, RLS policies" },
      { name: "Supabase Auth", desc: "Authentication & session management" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Supabase", desc: "PostgreSQL hosting, Auth, Storage" },
      { name: "Vercel", desc: "Deployment, edge functions" },
      { name: "CI/CD", desc: "Automated testing & deployment" },
      { name: "Docker", desc: "Containerization for dev/prod" },
    ],
  },
];

function TechStackGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
      {techGroups.map((group) => (
        <div
          key={group.category}
          className="rounded-xl border border-gray-800 bg-[#0d1224]/60 p-4 sm:p-5"
        >
          <h3 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3 sm:mb-4">
            {group.category}
          </h3>
          <ul className="space-y-2.5 sm:space-y-3">
            {group.items.map((item) => (
              <li key={item.name} className="flex items-start gap-2.5 sm:gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 sm:mt-2 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium text-xs sm:text-sm">{item.name}</span>
                  <p className="text-gray-500 text-[10px] sm:text-[11px] mt-0.5">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TechStackGrid;