import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import type { CraftDetail } from "@/lib/collectionData";

export default function CraftDetails({ items }: { items: CraftDetail[] }) {
  return (
    <section className="w-full bg-[#FFFDF9] border-y border-[#E8DFD3]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <Reveal>
          <div className="text-center mb-10 lg:mb-12">
            <SectionLabel align="center">عن قرب</SectionLabel>
            <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] font-semibold text-[#2B211B]">
              تفاصيل الصنعة
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-7">
          {items.map((it, i) => (
            <Reveal key={it.caption} delay={i * 80} className="h-full">
              <div className="group h-full rounded-2xl overflow-hidden border border-[#E8DFD3] bg-[#F8F4EE]">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={it.image}
                    alt={it.caption ? `${it.caption} - سوق مجاز` : "تفاصيل الحرفة - سوق مجاز"}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center">
                  <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#2B211B]">
                    <span className="w-4 h-4 flex items-center justify-center text-[13px] text-[#C2A06B]">
                      <i className="ri-vip-diamond-line"></i>
                    </span>
                    {it.caption}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}