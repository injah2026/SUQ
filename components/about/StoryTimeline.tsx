import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { storySteps } from "@/lib/aboutData";

export default function StoryTimeline() {
  return (
    <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <Reveal>
        <div className="text-center mb-14">
          <SectionLabel align="center">قصتنا</SectionLabel>
          <h2 className="mt-0 font-heading text-[26px] lg:text-[38px] font-semibold text-[#2B211B]">
            رحلة مجاز.. أربع محطات
          </h2>
        </div>
      </Reveal>

      <div className="relative">
        <span className="absolute top-2 bottom-2 start-[19px] lg:start-[23px] w-px bg-[#E2D3BB]"></span>

        <ul className="flex flex-col gap-10 lg:gap-14">
          {storySteps.map((s, i) => (
            <li key={s.key} className="relative ps-14 lg:ps-20">
              <span className="absolute start-0 top-0 w-10 lg:w-12 h-10 lg:h-12 rounded-full bg-[#0B3D2E] text-[#FFFDF9] flex items-center justify-center text-[15px] lg:text-[17px] font-bold border-4 border-[#F8F4EE]">
                {i + 1}
              </span>

              <Reveal delay={i * 60}>
                <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-5 lg:p-6 shadow-[0_30px_70px_-55px_rgba(43,33,27,.5)]">
                  <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-6 items-center">
                    <div className="w-full aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden bg-[#F6F1E8] border border-[#EFE7DB]">
                      <img
                        src={s.image}
                        alt={s.label ? `${s.label} - حكاية سوق مجاز` : "محطة من حكاية سوق مجاز"}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-2 text-[12px] font-bold text-[#8A6A4F] bg-[#F3ECE0] px-3.5 py-1.5 rounded-full">
                        <span className="w-3.5 h-3.5 flex items-center justify-center text-[14px]">
                          <i className="ri-bookmark-3-line"></i>
                        </span>
                        {s.label}
                      </span>
                      <h3 className="mt-4 font-heading text-[21px] lg:text-[24px] font-semibold text-[#2B211B]">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-[14.5px] lg:text-[15.5px] leading-8 text-[#8A7B6E]">
                        {s.text}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}