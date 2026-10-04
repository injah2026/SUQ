import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { packages } from "@/lib/corporateData";

export default function CorporatePackages() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <Reveal>
        <div className="text-center mb-10 lg:mb-14 max-w-2xl mx-auto">
          <SectionLabel align="center">بكجات الشركات</SectionLabel>
          <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] font-semibold text-[#2B211B]">
            اختر البكج المناسب
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[#8A7B6E]">
            أسعار تبدأ من القيم المذكورة وتتحسن مع زيادة الكمية.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
        {packages.map((p, i) => (
          <Reveal key={p.name} delay={i * 60} className="h-full">
            <div
              className={`relative h-full flex flex-col rounded-[24px] border p-8 ${
                p.featured
                  ? "bg-[#2B211B] border-[#2B211B] text-[#FFFDF9] shadow-[0_50px_90px_-60px_rgba(43,33,27,.8)]"
                  : "bg-[#FFFDF9] border-[#E8DFD3] text-[#2B211B]"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 right-8 px-4 py-1.5 rounded-full bg-[#C2A06B] text-[#0B3D2E] text-[12px] font-bold">
                  الأكثر طلبًا
                </span>
              )}
              <h3 className="font-heading text-[22px] font-semibold">{p.name}</h3>
              <span className={`mt-2 text-[13px] ${p.featured ? "text-[#FFFDF9]/90" : "text-[#8A7B6E]"}`}>
                {p.min}
              </span>
              <div className="mt-5 flex items-end gap-2">
                <span className="text-[13px] opacity-70">يبدأ من</span>
                <span
                  className={`font-heading text-[34px] font-bold leading-none ${
                    p.featured ? "text-[#E3C78A]" : "text-[#8A6A4F]"
                  }`}
                >
                  {p.price}
                </span>
                <span className="text-[14px] mb-0.5">ر.س / قطعة</span>
              </div>

              <ul className="mt-6 space-y-3.5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] leading-6">
                    <span
                      className={`w-5 h-5 mt-0.5 flex items-center justify-center text-[16px] ${
                        p.featured ? "text-[#E3C78A]" : "text-[#C2A06B]"
                      }`}
                    >
                      <i className="ri-check-line"></i>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="#corporate-form"
                  className={`h-[48px] px-7 rounded-full text-[15px] font-bold inline-flex items-center justify-center gap-2.5 whitespace-nowrap cursor-pointer transition-colors duration-300 w-full ${
                    p.featured
                      ? "bg-[#C2A06B] text-[#0B3D2E] hover:bg-[#D9BC85]"
                      : "bg-[#8A6A4F] text-[#FFFDF9] hover:bg-[#6F5440]"
                  }`}
                >
                  اطلب هذا البكج
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}