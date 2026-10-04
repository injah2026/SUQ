import { brandStory } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";

export default function BrandStory() {
  return (
    <section className="w-full bg-[#F8F4EE]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden border border-[#E8DFD3] shadow-[0_40px_80px_-55px_rgba(43,33,27,.45)] group">
            <img
              src={brandStory.image}
              alt="من إرث البشت والسدو السعودي - سوق مجاز"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
          </div>

          <div className="max-w-[480px]">
            <SectionLabel>حكاية مجاز</SectionLabel>
            <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] leading-[1.2] font-semibold text-[#2B211B]">
              من إرث البشت.. صُنعت لك
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-[#2B211B]">
              في كل غرزة ذهبية حكاية صناعة سعودية توارثتها الأيدي جيلًا بعد جيل.
            </p>
            <p className="mt-3 text-[15px] leading-8 text-[#2B211B]">
              نصنع قطعًا محدودة تجمع بين دفء التراث وهدوء الحداثة، لتكون هدية تليق بمن تحب.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}