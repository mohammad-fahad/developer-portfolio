// @flow strict

function DecisionCard({ title, decision, why, impact, items }) {
  return (
    <div className="rounded-xl border border-gray-800 bg-[#0d1224]/60 p-4 sm:p-5 lg:p-6">
      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 sm:mt-2 flex-shrink-0" />
        <div>
          <h3 className="text-white font-semibold text-sm sm:text-base">{title}</h3>
        </div>
      </div>

      {decision && (
        <div className="mb-3 sm:mb-4">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1 sm:mb-1.5">Decision</p>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{decision}</p>
        </div>
      )}

      {why && (
        <div className="mb-3 sm:mb-4">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1 sm:mb-1.5">Why</p>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{why}</p>
        </div>
      )}

      {impact && (
        <div className="mb-3 sm:mb-4">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1 sm:mb-1.5">Impact</p>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{impact}</p>
        </div>
      )}

      {items && items.length > 0 && (
        <ul className="space-y-1.5 sm:space-y-2 mt-2 sm:mt-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
              <span className="w-1 h-1 rounded-full bg-violet-400 mt-1.5 sm:mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DecisionCard;