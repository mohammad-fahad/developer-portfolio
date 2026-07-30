// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="relative z-50 my-16 lg:my-28">
      <div className="flex items-center justify-start relative mb-8 sm:mb-12">
        <span className="bg-[var(--section-header-bg)] absolute left-0 w-fit text-[var(--text-primary)] px-3 sm:px-5 py-2 sm:py-3 text-base sm:text-xl rounded-md">
          ABOUT
        </span>
        <span className="w-full h-[2px] bg-[var(--section-header-bg)]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-16">
        <div className="lg:col-span-3 order-2 lg:order-1">
          <p className="text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2 sm:mb-3">
            Who I am
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6">
            Engineer focused on building products that scale
          </h2>
          <div className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed space-y-3 sm:space-y-4">
            <p>{personalData?.description}</p>
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-center order-1 lg:order-2 mb-4 lg:mb-0">
          <div className="relative group w-full max-w-[320px] sm:max-w-none">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-violet-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border-color)]">
              <Image
                src={personalData?.profile}
                width={373}
                height={280}
                loading="lazy"
                alt="Mohammad Fahad"
                className="w-full h-auto rounded-2xl transition-all duration-700 grayscale hover:grayscale-0 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
