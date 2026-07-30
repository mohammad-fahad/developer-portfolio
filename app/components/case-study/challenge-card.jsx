function ChallengeCard({ title, challenge, approach, impact }) {
  return (
    <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60 p-4 sm:p-5">
      <h3 className="text-[var(--text-primary)] font-semibold text-sm sm:text-base mb-3 sm:mb-4">{title}</h3>
      <div className="space-y-2 sm:space-y-3">
        <div>
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-400 mb-0.5 sm:mb-1">Challenge</p>
          <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed">{challenge}</p>
        </div>
        <div>
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-blue-400 mb-0.5 sm:mb-1">Approach</p>
          <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed">{approach}</p>
        </div>
        <div>
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-0.5 sm:mb-1">Impact</p>
          <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed">{impact}</p>
        </div>
      </div>
    </div>
  );
}

export default ChallengeCard;
