import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { artisans } from "@/lib/aboutData";

export default function ArtisansSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <Reveal>
        <div className="text-center mb-12">
          <SectionLabel align="center">أيادٍ تُبدع</SectionLabel>
          <h2 className="mt-0 font-heading text-[26px] lg:text-[38px] font-semibold text-[#2B211B]">
            صُنّاعنا
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-[14.5px] leading-8 text-[#8A7B6E]">
            وراء كل قطعة من مجاز صانع يحمل الحرفة كإرث، ويضع فيها جزءًا من وقته وذوقه.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {artisans.map((a, i) => (
          <Reveal key={a.name} delay={i * 80} className="h-full">
            <div className="group h-full rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] overflow-hidden transition-all duration-500 hover:shadow-[0_45px_85px_-60px_rgba(43,33,27,.55)] hover:-translate-y-1">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F6F1E8]">
                <img
                  src={a.image}
                  alt={a.name ? `${a.name} - حرفي سوق مجاز` : "حرفي من سوق مجاز"}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B]/55 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <span className="block text-[17px] font-bold text-[#FFFDF9]">{a.name}</span>
                  <span className="mt-0.5 block text-[13px] text-[#FFFDF9]/80">{a.role}</span>
                </div>
              </div>
              <div className="p-6">
                <span className="w-8 h-8 flex items-center justify-center text-[30px] text-[#C2A06B]/50">
                  <i className="ri-double-quotes-r"></i>
                </span>
                <p className="mt-2 text-[14.5px] leading-8 text-[#5c5349]">{a.quote}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}