function FeatureCard({ icon, title, items }) {
  return (
    <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60 p-3 sm:p-4 hover:border-violet-500/20 transition-colors duration-300">
      <div className="text-violet-400 mb-2 sm:mb-3">{icon}</div>
      <h3 className="text-[var(--text-primary)] font-semibold text-xs sm:text-sm mb-2 sm:mb-3">{title}</h3>
      <ul className="space-y-1 sm:space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="text-[var(--text-muted)] text-[11px] sm:text-xs leading-relaxed flex items-start gap-1.5">
            <span className="w-0.5 h-0.5 rounded-full bg-violet-400 mt-1.5 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeatureCard;
