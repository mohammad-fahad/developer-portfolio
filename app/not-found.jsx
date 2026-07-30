import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 mb-4">
          <span className="text-2xl font-bold text-violet-400">404</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-2">
          Page Not Found
        </h1>
        <p className="text-[var(--text-muted)] max-w-md mx-auto text-sm sm:text-base">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
      </div>
      <Link
        href="/"
        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 text-white font-medium text-sm transition-all duration-300 hover:from-violet-500 hover:to-violet-400 hover:shadow-lg hover:shadow-violet-500/25"
      >
        <FiArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
        Back to Home
      </Link>
    </div>
  );
}
