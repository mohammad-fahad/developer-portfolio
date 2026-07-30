// @flow strict

"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function ScreenshotGallery({ screenshots = [] }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    const cardWidth = el.clientWidth * 0.85 + 16;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(idx, screenshots.length - 1));
  }, [screenshots.length]);

  const scrollTo = useCallback((direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth * 0.85 + 16;
    el.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

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
    <div className="space-y-4 sm:space-y-6">
      {/* Desktop grid */}
      <div className="hidden sm:grid sm:grid-cols-2 gap-5 sm:gap-6">
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
                sizes="(max-width: 1024px) 50vw, 600px"
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

      {/* Mobile snap-scroll carousel */}
      <div className="relative sm:hidden">
        {/* Navigation hints */}
        {canScrollLeft && (
          <button
            onClick={() => scrollTo("prev")}
            className="absolute left-0 top-1/3 z-10 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0a0f1e]/90 border border-gray-700 flex items-center justify-center text-gray-300 backdrop-blur-sm"
            aria-label="Previous screenshot"
          >
            <FiChevronLeft size={16} />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scrollTo("next")}
            className="absolute right-0 top-1/3 z-10 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0a0f1e]/90 border border-gray-700 flex items-center justify-center text-gray-300 backdrop-blur-sm"
            aria-label="Next screenshot"
          >
            <FiChevronRight size={16} />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {screenshots.map((screenshot, index) => (
            <figure
              key={index}
              className="snap-center shrink-0 w-[85vw] first:pl-0 last:pr-0"
            >
              <div className="rounded-xl border border-gray-800 bg-[#0d1224]/60 overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0a0f1e]">
                  <Image
                    src={screenshot.image}
                    alt={screenshot.alt || screenshot.title || `EduFlow screenshot ${index + 1}`}
                    fill
                    sizes="85vw"
                    className="object-cover"
                  />
                </div>
                {(screenshot.title || screenshot.description) && (
                  <figcaption className="p-3.5 border-t border-gray-800/80">
                    {screenshot.title && (
                      <h3 className="text-white text-sm font-semibold mb-1">
                        {screenshot.title}
                      </h3>
                    )}
                    {screenshot.description && (
                      <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                        {screenshot.description}
                      </p>
                    )}
                  </figcaption>
                )}
              </div>
            </figure>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-1.5 mt-3">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                const cardWidth = el.clientWidth * 0.85 + 16;
                el.scrollTo({ left: index * cardWidth, behavior: "smooth" });
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 bg-violet-500"
                  : "w-1.5 bg-gray-600"
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScreenshotGallery;