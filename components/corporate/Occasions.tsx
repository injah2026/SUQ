import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { occasions } from "@/lib/corporateData";

export default function Occasions() {
  return (
    <section className="w-full bg-[#FBF8F2] border-y border-[#EFE3CC]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <Reveal>
          <div className="text-center mb-10 lg:mb-14 max-w-2xl mx-auto">
            <SectionLabel align="center">لكل مناسبة هدية</SectionLabel>
            <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] font-semibold text-[#2B211B]">
              مناسبات نخدمها
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {occasions.map((o, i) => (
            <Reveal key={o.title} delay={i * 60}>
              <div className="group h-full rounded-2xl overflow-hidden bg-[#FFFDF9] border border-[#E8DFD3]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={o.image}
                    alt={o.title ? `هدايا ${o.title} من سوق مجاز` : "مناسبة هدايا من سوق مجاز"}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-[18px] font-semibold text-[#2B211B]">{o.title}</h3>
                  <p className="mt-2 text-[14px] leading-7 text-[#8A7B6E]">{o.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}