import Link from "next/link";
import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { aboutCta } from "@/lib/aboutData";

export default function AboutCta() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
      <Reveal>
        <div className="surface-dark relative w-full rounded-[28px] overflow-hidden border border-[#E8DFD3] min-h-[340px] lg:min-h-[400px] flex items-center">
          <img
            src={aboutCta.image}
            alt={aboutCta.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#1A120C]/88 via-[#1A120C]/55 to-[#1A120C]/15"></div>

          <div className="relative w-full px-4 sm:px-6 lg:px-8 py-14 flex justify-end">
            <div className="max-w-xl text-right">
              <SectionLabel tone="dark">{aboutCta.label}</SectionLabel>
              <h2 className="mt-0 font-heading text-[28px] lg:text-[42px] font-semibold text-[#FFFDF9]">
                {aboutCta.title}
              </h2>
              <p className="mt-4 text-[15px] lg:text-[16px] leading-8 text-[#FFFDF9]/90">
                {aboutCta.text}
              </p>
              <Link
                href="/shop"
                className="mt-8 h-[52px] px-8 rounded-full bg-[#C2A06B] text-[#0B3D2E] text-[15px] font-bold inline-flex items-center justify-center gap-2.5 whitespace-nowrap cursor-pointer hover:bg-[#D9BC85] transition-colors"
              >
                اكتشف مجموعاتنا
                <span className="w-5 h-5 flex items-center justify-center text-[18px]">
                  <i className="ri-arrow-left-line"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}