import SectionLabel from "@/components/ui/SectionLabel";

export default function CorporateContact() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
      <div className="surface-dark rounded-[28px] bg-[#2B211B] px-8 lg:px-14 py-10 lg:py-12 flex flex-col lg:flex-row items-center justify-between gap-7 text-center lg:text-right">
        <div>
          <SectionLabel tone="dark">فريق الأعمال</SectionLabel>
          <h3 className="mt-0 font-heading text-[24px] lg:text-[30px] font-semibold text-[#FFFDF9]">
            عندك متطلبات خاصة؟
          </h3>
          <p className="mt-3 text-[15px] leading-8 text-[#FFFDF9]/90 max-w-xl">
            تحدّث مباشرة مع مستشار الهدايا لدينا لتصميم بكج مخصص يناسب مناسبتك وميزانيتك.
          </p>
        </div>
        <a
          href="https://wa.me/966500000000"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-3 h-[52px] px-7 rounded-full bg-[#25D366] text-white text-[15px] font-bold whitespace-nowrap hover:bg-[#1EBE5A] transition-colors cursor-pointer"
        >
          <span className="w-5 h-5 flex items-center justify-center text-[20px]">
            <i className="ri-whatsapp-fill"></i>
          </span>
          تحدث مع مستشار الهدايا
        </a>
      </div>
    </section>
  );
}