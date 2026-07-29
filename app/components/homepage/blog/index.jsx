"use client";
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';
import { useEffect, useState } from 'react';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/medium");
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlogs();
  }, []);

  const displayedBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <div id="blogs" className="relative z-50 my-16 lg:my-28">
      {/* Section header */}
      <div className="flex items-center justify-start relative mb-8 sm:mb-12">
        <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-3 sm:px-5 py-2 sm:py-3 text-base sm:text-xl rounded-md">
          WRITING
        </span>
        <span className="w-full h-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="mb-6 sm:mb-10">
        <p className="text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2 sm:mb-3">
          Thoughts & writing
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
          Articles on engineering and product development
        </h2>
        <p className="text-gray-400 mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base">
          I write about SaaS architecture, full-stack development, and building production-grade software.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 lg:gap-5">
        {displayedBlogs.map((blog, i) => (
          <BlogCard blog={blog} key={i} />
        ))}
      </div>

      {blogs.length > 3 && (
        <div className="flex justify-center mt-6 sm:mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-gray-300 bg-gray-800/40 rounded-lg border border-gray-700/50 hover:border-violet-500/30 hover:text-violet-300 transition-all duration-300"
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