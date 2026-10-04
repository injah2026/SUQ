import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { worksGallery } from "@/lib/customData";

export default function WorksGallery() {
  return (
    <section id="works" className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <Reveal>
        <div className="text-center mb-10 lg:mb-14 max-w-2xl mx-auto">
          <SectionLabel align="center">من ورشتنا</SectionLabel>
          <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] font-semibold text-[#2B211B]">
            أعمال سابقة
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[#8A7B6E]">
            لمحات من أسماء وشعارات طرّزناها بأيدينا لعملائنا.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {worksGallery.map((w, i) => (
          <Reveal key={w.caption} delay={(i % 4) * 60}>
            <div className="group relative rounded-2xl overflow-hidden bg-[#FFFDF9] border border-[#E8DFD3]">
              <div className="aspect-square overflow-hidden">
                <img
                  src={w.src}
                  alt={w.caption ? `${w.caption} - تصميم سوق مجاز` : "تصميم مخصص من سوق مجاز"}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#2B211B]/80 via-[#2B211B]/30 to-transparent">
                <span className="text-[13px] font-semibold text-[#FFFDF9]">{w.caption}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}