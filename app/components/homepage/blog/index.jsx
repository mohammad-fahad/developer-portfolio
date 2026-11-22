"use client";
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';
import { useEffect, useState } from 'react';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/medium", { signal: controller.signal });
        const data = await res.json();
        if (!res.ok || data.fallback) {
          setUnavailable(true);
          return;
        }
        setBlogs(Array.isArray(data.posts) ? data.posts : []);
      } catch (err) {
        if (err.name !== "AbortError") setUnavailable(true);
      }
    };
    fetchBlogs();
    return () => controller.abort();
  }, []);

  const displayedBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <div id="blogs" className="relative z-50 my-16 lg:my-28">
      <div data-reveal className="flex items-center justify-start relative mb-8 sm:mb-12">
        <span className="bg-[var(--section-header-bg)] absolute left-0 w-fit text-[var(--text-primary)] px-3 sm:px-5 py-2 sm:py-3 text-base sm:text-xl rounded-md">
          WRITING
        </span>
        <span className="w-full h-[2px] bg-[var(--section-header-bg)]"></span>
      </div>

      <div className="mb-6 sm:mb-10">
        <p className="text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2 sm:mb-3">
          Thoughts & writing
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">
          Articles on engineering and product development
        </h2>
        <p className="text-[var(--text-muted)] mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base">
          I write about SaaS architecture, full-stack development, and building production-grade software.
        </p>
      </div>

      {unavailable ? (
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60 p-5 text-sm text-[var(--text-muted)]">
          Articles are temporarily unavailable. You can read them directly on{" "}
          <a
            href="https://medium.com/@blogs-mohammadfahad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-300 hover:text-violet-200 underline underline-offset-4"
          >
            Medium
          </a>
          .
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 lg:gap-5">
          {displayedBlogs.map((blog, i) => (
            <BlogCard blog={blog} key={i} />
          ))}
        </div>
      )}

      {blogs.length > 3 && (
        <div className="flex justify-center mt-6 sm:mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-[var(--text-secondary)] bg-[var(--tag-bg)] rounded-lg border border-[var(--border-light)] hover:border-violet-500/30 hover:text-violet-300 transition-all duration-300"
          >
            {showAll ? "Show Less" : "View More Articles"}
            <FaArrowRight size={10} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Blog;
