import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { howWeWork } from "@/lib/corporateData";

export default function HowWeWork() {
  return (
    <section className="w-full bg-[#FBF8F2] border-y border-[#EFE3CC]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <Reveal>
          <div className="text-center mb-10 lg:mb-14 max-w-2xl mx-auto">
            <SectionLabel align="center">من الطلب للتسليم</SectionLabel>
            <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] font-semibold text-[#2B211B]">
              كيف نعمل
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {howWeWork.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="relative h-full rounded-2xl bg-[#FFFDF9] border border-[#E8DFD3] p-7">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#8A6A4F] text-[#FFFDF9] font-heading text-[22px] font-bold">
                  {s.n}
                </span>
                <h3 className="mt-5 font-heading text-[18px] font-semibold text-[#2B211B]">{s.title}</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#8A7B6E]">{s.desc}</p>
                {i < howWeWork.length - 1 && (
                  <span className="hidden lg:flex absolute top-10 -left-3.5 w-7 h-7 items-center justify-center text-[#C2A06B] text-[20px]">
                    <i className="ri-arrow-left-line"></i>
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}