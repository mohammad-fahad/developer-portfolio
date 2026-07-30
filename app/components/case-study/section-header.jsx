function SectionHeader({ label, title, description }) {
  return (
    <div className="mb-8 sm:mb-12">
      <div className="flex items-center justify-start relative mb-6 sm:mb-8">
        <span className="bg-[var(--section-header-bg)] absolute left-0 w-fit text-[var(--text-primary)] px-3 sm:px-5 py-2 sm:py-3 text-base sm:text-xl rounded-md">
          {label}
        </span>
        <span className="w-full h-[2px] bg-[var(--section-header-bg)]"></span>
      </div>
      {title && (
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-[var(--text-muted)] max-w-3xl text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
