"use client";
import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

function ScreenshotGallery({ screenshots }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goToPrev = () => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1));
  const goToNext = () => setSelectedIndex((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0));

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {screenshots.map((screenshot, i) => (
          <button
            key={screenshot.id}
            onClick={() => openLightbox(i)}
            className="group relative rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-primary)]/60 hover:border-violet-500/30 hover:shadow-violet-500/5 transition-all duration-300 text-left"
          >
            <div className="aspect-[4/3] relative overflow-hidden bg-[var(--bg-darker)]">
              <Image
                src={screenshot.image}
                alt={screenshot.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/60 via-transparent to-transparent" />
            </div>
            <div className="p-3 sm:p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] sm:text-xs font-medium text-violet-400 bg-violet-500/10 px-1.5 py-0.5 rounded-full border border-violet-500/20">
                  {screenshot.category}
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mb-0.5">{screenshot.title}</h3>
              <p className="text-[10px] sm:text-xs text-[var(--text-muted)] leading-relaxed">{screenshot.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--bg-darker)]/90 backdrop-blur-xl p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-[var(--bg-primary)]/80 text-[var(--text-primary)] hover:bg-[var(--bg-primary)] transition-all duration-200 z-10"
            aria-label="Close lightbox"
          >
            <FiX size={20} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[var(--bg-primary)]/80 text-[var(--text-primary)] hover:bg-[var(--bg-primary)] transition-all duration-200 z-10"
            aria-label="Previous image"
          >
            <FiChevronLeft size={24} />
          </button>

          <div
            className="relative max-w-4xl w-full max-h-[80vh] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video relative">
              <Image
                src={screenshots[selectedIndex].image}
                alt={screenshots[selectedIndex].title}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
            </div>
            <div className="p-4 bg-[var(--bg-primary)]/90 backdrop-blur-md border-t border-[var(--border-color)]">
              <h3 className="text-sm sm:text-base font-semibold text-[var(--text-primary)] mb-0.5">
                {screenshots[selectedIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                {screenshots[selectedIndex].description}
              </p>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[var(--bg-primary)]/80 text-[var(--text-primary)] hover:bg-[var(--bg-primary)] transition-all duration-200 z-10"
            aria-label="Next image"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  );
}

export default ScreenshotGallery;
