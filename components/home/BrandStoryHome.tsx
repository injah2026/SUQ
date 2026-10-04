import { homeBrandStory } from "@/lib/homeData";
import Reveal from "./Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

export default function BrandStoryHome() {
  return (
    <section id="story" className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <Reveal className="w-full">
          <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden border border-[#E8DFD3] shadow-[0_40px_80px_-55px_rgba(43,33,27,.45)] group">
            <img
              src={homeBrandStory.image}
              alt={homeBrandStory.title ? `${homeBrandStory.title} - سوق مجاز` : "حكاية سوق مجاز"}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="w-full">
          <div className="max-w-xl">
            <SectionLabel>حكاية مجاز</SectionLabel>
            <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] font-semibold text-[#2B211B]">
              {homeBrandStory.title}
            </h2>
            <p className="mt-6 text-[15px] lg:text-[16px] leading-8 text-[#2B211B]">
              {homeBrandStory.text}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}