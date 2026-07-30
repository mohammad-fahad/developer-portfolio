// @flow strict

import Image from "next/image";

function ScreenshotGallery({ screenshots = [] }) {
  const isEmpty = screenshots.length === 0;

  if (isEmpty) {
    return (
      <div className="rounded-xl border border-dashed border-gray-700 bg-[#0d1224]/40 p-8 sm:p-12 lg:p-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-12 h-12 mx-auto mb-4 rounded-lg border border-gray-700 bg-gray-800/40 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-500">
              <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="7.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M2 13l4-3 3 2 3-4 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-white font-semibold text-sm sm:text-base mb-2">Screenshots coming soon</h3>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            Product screenshots will be added as the platform progresses through production milestones.
            Visual documentation of core workflows, dashboards, and interfaces will accompany future releases.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
      {screenshots.map((screenshot, index) => (
        <figure
          key={index}
          className="group rounded-xl border border-gray-800 bg-[#0d1224]/60 overflow-hidden transition-all duration-300 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5"
        >
          <div className="relative aspect-video w-full overflow-hidden bg-[#0a0f1e]">
            <Image
              src={screenshot.image}
              alt={screenshot.alt || screenshot.title || `EduFlow screenshot ${index + 1}`}
              fill
              priority={index === 0}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              className="object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          {(screenshot.title || screenshot.description) && (
            <figcaption className="p-4 sm:p-5 border-t border-gray-800/80">
              {screenshot.title && (
                <h3 className="text-white text-sm sm:text-base font-semibold mb-1.5">
                  {screenshot.title}
                </h3>
              )}
              {screenshot.description && (
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {screenshot.description}
                </p>
              )}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

export default ScreenshotGallery;