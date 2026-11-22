"use client";

import Link from "next/link";

export default function Error({ reset }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3">
        Something went wrong
      </h1>
      <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-md mb-6">
        This section could not be loaded. You can retry, or return to the homepage.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          type="button"
          onClick={reset}
          className="px-5 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-5 py-2.5 rounded-full text-sm font-medium text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-violet-500/40 hover:text-violet-300"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
