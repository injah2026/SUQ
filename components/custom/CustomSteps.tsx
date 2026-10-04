import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { customSteps } from "@/lib/customData";

export default function CustomSteps() {
  return (
    <section className="w-full bg-[#FBF8F2] border-y border-[#EFE3CC]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <Reveal>
          <div className="text-center mb-10 lg:mb-14">
            <SectionLabel align="center">كيف تعمل الخدمة</SectionLabel>
            <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] font-semibold text-[#2B211B]">
              ثلاث خطوات فقط
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {customSteps.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="relative h-full rounded-2xl bg-[#FFFDF9] border border-[#E8DFD3] p-7 text-center">
                <span className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-[#8A6A4F]/10 font-heading text-[24px] font-bold text-[#8A6A4F]">
                  {s.n}
                </span>
                <h3 className="mt-5 font-heading text-[20px] font-semibold text-[#2B211B]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-7 text-[#8A7B6E]">{s.desc}</p>
                {i < customSteps.length - 1 && (
                  <span className="hidden md:flex absolute top-1/2 -left-4 w-8 h-8 items-center justify-center text-[#C2A06B] text-[22px]">
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