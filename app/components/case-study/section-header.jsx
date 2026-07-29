// @flow strict

function SectionHeader({ label, title, description }) {
  return (
    <div className="mb-8 sm:mb-12">
      <div className="flex items-center justify-start relative mb-6 sm:mb-8">
        <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-3 sm:px-5 py-2 sm:py-3 text-base sm:text-xl rounded-md">
          {label}
        </span>
        <span className="w-full h-[2px] bg-[#1a1443]"></span>
      </div>
      {title && (
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-gray-400 max-w-3xl text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;