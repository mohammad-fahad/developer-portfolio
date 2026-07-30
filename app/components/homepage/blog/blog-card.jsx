"use client";
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';

function BlogCard({ blog }) {
  return (
    <div className="group rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60 hover:border-violet-500/20 transition-all duration-300 overflow-hidden">
      <div className="h-40 sm:h-44 lg:h-48 overflow-hidden">
        {blog?.thumbnail && (
          <Image
            src={blog.thumbnail}
            height={1080}
            width={1920}
            alt={blog?.title ? blog.title : "Blog Image"}
            loading="lazy"
            className="h-full w-full object-cover group-hover:scale-105 transition-all duration-500"
          />
        )}
      </div>
      <div className="p-3 sm:p-4 lg:p-5">
        <div className="flex items-center justify-between text-[10px] sm:text-xs text-[var(--text-muted)] mb-1.5 sm:mb-2">
          <span>{timeConverter(blog.date)}</span>
          {blog.public_reactions_count > 0 && (
            <span className="flex items-center gap-1">
              <BsHeartFill size={8} className="text-pink-400" />
              {blog.public_reactions_count}
            </span>
          )}
        </div>
        <Link target="_blank" href={blog.link}>
          <h3 className="text-sm sm:text-base font-semibold text-[var(--text-primary)] mb-1.5 sm:mb-2 line-clamp-2 group-hover:text-violet-300 transition-colors duration-300">
            {blog.title}
          </h3>
        </Link>
        <p className="text-[11px] sm:text-xs text-[var(--text-muted)] line-clamp-2 mb-2 sm:mb-3 leading-relaxed">
          {blog.description}
        </p>
        <Link target="_blank" href={blog.link}>
          <span className="inline-flex items-center text-[11px] sm:text-xs font-medium text-violet-400 hover:text-violet-300 transition-colors">
            Read article &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
