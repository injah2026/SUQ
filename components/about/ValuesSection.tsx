import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { values } from "@/lib/aboutData";

export default function ValuesSection() {
  return (
    <section className="w-full bg-[#FFFDF9] border-y border-[#E8DFD3]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <Reveal>
          <div className="text-center mb-12">
            <SectionLabel align="center">ما نؤمن به</SectionLabel>
            <h2 className="mt-0 font-heading text-[26px] lg:text-[38px] font-semibold text-[#2B211B]">
              قيمنا
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80} className="h-full">
              <div className="group h-full rounded-[24px] bg-[#FBF8F2] border border-[#EFE3CC] p-7 lg:p-8 text-center transition-all duration-500 hover:bg-[#FFFDF9] hover:border-[#C2A06B] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-55px_rgba(43,33,27,.5)]">
                <span className="mx-auto w-16 h-16 rounded-full bg-[#FFFDF9] border border-[#E8DFD3] flex items-center justify-center text-[30px] text-[#8A6A4F] transition-colors duration-500 group-hover:bg-[#0B3D2E] group-hover:text-[#FFFDF9]">
                  <i className={v.icon}></i>
                </span>
                <h3 className="mt-6 font-heading text-[22px] font-semibold text-[#2B211B]">
                  {v.title}
                </h3>
                <span className="mx-auto mt-4 block w-10 h-px bg-[#C2A06B]"></span>
                <p className="mt-5 text-[14.5px] leading-8 text-[#8A7B6E]">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}