// @flow strict

function ChallengeCard({ title, challenge, approach, impact }) {
  return (
    <div className="rounded-xl border border-gray-800 bg-[#0d1224]/60 p-4 sm:p-5 lg:p-6">
      <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 sm:mt-2 flex-shrink-0" />
        <h3 className="text-white font-semibold text-sm sm:text-base">{title}</h3>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {challenge && (
          <div>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1 sm:mb-1.5">Challenge</p>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{challenge}</p>
          </div>
        )}

        {approach && (
          <div>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1 sm:mb-1.5">Approach</p>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{approach}</p>
          </div>
        )}

        {impact && (
          <div>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1 sm:mb-1.5">Impact</p>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{impact}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChallengeCard;