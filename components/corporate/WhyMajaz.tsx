import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { whyMajaz } from "@/lib/corporateData";

export default function WhyMajaz() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <Reveal>
        <div className="text-center mb-10 lg:mb-14 max-w-2xl mx-auto">
          <SectionLabel align="center">لماذا مجاز؟</SectionLabel>
          <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] font-semibold text-[#2B211B]">
            هدايا بهوية شركتك
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {whyMajaz.map((f, i) => (
          <Reveal key={f.title} delay={i * 60}>
            <div className="h-full rounded-2xl bg-[#FFFDF9] border border-[#E8DFD3] p-6">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#8A6A4F]/10 text-[22px] text-[#8A6A4F]">
                <i className={f.icon}></i>
              </span>
              <h3 className="mt-5 font-heading text-[17px] text-[#2B211B]">{f.title}</h3>
              <p className="mt-2.5 text-[14px] leading-7 text-[#8A7B6E]">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}