import { clientLogos } from "@/lib/corporateData";

export default function ClientLogos() {
  return (
    <section className="w-full border-y border-[#E8DFD3] bg-[#FFFDF9]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-9 lg:py-12">
        <p className="text-center text-[13px] tracking-[0.3em] text-[#A99C8E] mb-7">
          شركاء يثقون بمجاز
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 lg:gap-x-16 gap-y-6">
          {clientLogos.map((name) => (
            <div key={name} className="flex items-center gap-2.5 opacity-80">
              <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#8A6A4F]/10 text-[18px] text-[#8A6A4F]">
                <i className="ri-building-4-line"></i>
              </span>
              <span className="text-[16px] lg:text-[17px] font-semibold text-[#2B211B]">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}