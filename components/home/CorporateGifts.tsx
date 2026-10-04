import { corporateLogos } from "@/lib/homeData";
import Reveal from "./Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function CorporateGifts() {
  return (
    <section className="w-full bg-[#FFFDF9] border-y border-[#E8DFD3]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 text-center">
        <Reveal>
          <SectionLabel align="center">مجاز للأعمال</SectionLabel>
          <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] font-semibold text-[#2B211B]">
            هدايا مجاز للشركات والمناسبات
          </h2>
          <p className="mt-6 text-[15px] leading-8 text-[#2B211B] max-w-2xl mx-auto">
            بكجات مخصصة بتطريز اسم شركتك أو شعارك، مع تغليف فاخر وبطاقة إهداء وأسعار خاصة للكميات.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {corporateLogos.map((logo) => (
              <span
                key={logo}
                className="h-12 px-6 flex items-center justify-center rounded-full border border-[#E8DFD3] bg-[#F8F4EE] text-[14px] font-semibold text-[#8A7B6E] tracking-wide"
              >
                {logo}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10">
            <Button href="/corporate#corporate-form" icon="ri-arrow-left-line">
              اطلب عرض سعر
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}