function DecisionCard({ title, decision, why, impact }) {
  return (
    <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60 p-4 sm:p-5">
      <h3 className="text-[var(--text-primary)] font-semibold text-sm sm:text-base mb-3 sm:mb-4">{title}</h3>
      <div className="space-y-2 sm:space-y-3">
        <div>
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-0.5 sm:mb-1">Decision</p>
          <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed">{decision}</p>
        </div>
        <div>
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-0.5 sm:mb-1">Why</p>
          <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed">{why}</p>
        </div>
        <div>
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-0.5 sm:mb-1">Impact</p>
          <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed">{impact}</p>
        </div>
      </div>
    </div>
  );
}

export default DecisionCard;
