import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { aboutHero } from "@/lib/aboutData";

export default function AboutHero() {
  return (
    <section className="surface-dark relative w-full h-[62vh] min-h-[520px] overflow-hidden bg-[#1A120C]">
      <img
        src={aboutHero.image}
        alt="حكاية مجاز - إرث البشت والسدو السعودي"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-[#1A120C]/90 via-[#1A120C]/55 to-[#1A120C]/10"></div>

      <div className="relative h-full w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end">
        <Reveal className="max-w-2xl text-right">
          <SectionLabel tone="dark">{aboutHero.label}</SectionLabel>
          <h1 className="mt-0 font-heading text-[34px] lg:text-[54px] leading-[1.15] font-semibold text-[#FFFDF9]">
            {aboutHero.title}
          </h1>
          <p className="mt-5 text-[16px] lg:text-[18px] leading-9 text-[#FFFDF9]/90 max-w-xl ms-auto lg:ms-0">
            {aboutHero.text}
          </p>
        </Reveal>
      </div>
    </section>
  );
}