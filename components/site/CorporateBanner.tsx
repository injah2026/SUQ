import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export default function CorporateBanner() {
  return (
    <section className="w-full bg-[#F8F4EE]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="w-full rounded-2xl border border-[#E8DFD3] bg-[#FFFDF9] shadow-[0_40px_80px_-65px_rgba(43,33,27,.5)] px-8 lg:px-12 py-8 lg:py-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6">
          <div className="flex items-center gap-5 text-center lg:text-right">
            <span className="hidden lg:block w-1.5 h-12 rounded-full bg-[#C2A06B]"></span>
            <div>
              <SectionLabel>مجاز للأعمال</SectionLabel>
              <h2 className="mt-0 font-heading text-[22px] lg:text-[28px] leading-tight font-semibold text-[#2B211B]">
                هدايا مجاز للشركات والمناسبات
              </h2>
            </div>
          </div>
          <Button href="/corporate" icon="ri-arrow-left-line" className="shrink-0">
            اطلب عرض سعر
          </Button>
        </div>
      </div>
    </section>
  );
}