// @flow strict

function FeatureCard({ icon, title, description, items }) {
  return (
    <div className="rounded-xl border border-gray-800 bg-[#0d1224]/60 p-4 sm:p-5 lg:p-6 hover:border-violet-500/20 transition-colors duration-300">
      {icon && <div className="text-violet-400 mb-3 sm:mb-4">{icon}</div>}
      {title && (
        <h3 className="text-white font-semibold text-sm sm:text-base mb-2 sm:mb-3">{title}</h3>
      )}
      {description && (
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{description}</p>
      )}
      {items && items.length > 0 && (
        <ul className="space-y-1.5 sm:space-y-2">
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

export default FeatureCard;