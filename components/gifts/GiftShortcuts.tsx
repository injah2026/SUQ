"use client";

import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { giftShortcuts, filterGifts, type GiftFilterKey } from "@/lib/giftsData";

export default function GiftShortcuts({
  active,
  onSelect,
}: {
  active: GiftFilterKey;
  onSelect: (key: GiftFilterKey) => void;
}) {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <Reveal>
        <div className="text-center mb-9">
          <SectionLabel align="center">اختر بسرعة</SectionLabel>
          <h2 className="mt-0 font-heading text-[26px] lg:text-[34px] font-semibold text-[#2B211B]">
            من أين نبدأ؟
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {giftShortcuts.map((s, i) => {
          const isActive = active === s.key;
          return (
            <Reveal key={s.key} delay={i * 70} className="h-full">
              <button
                type="button"
                onClick={() => onSelect(s.key)}
                className={`surface-dark group relative w-full h-[280px] rounded-2xl overflow-hidden text-right cursor-pointer border transition-all duration-500 ${
                  isActive
                    ? "border-[#C2A06B] shadow-[0_45px_80px_-45px_rgba(43,33,27,.5)]"
                    : "border-[#E8DFD3] hover:-translate-y-1 hover:shadow-[0_45px_80px_-45px_rgba(43,33,27,.4)]"
                }`}
              >
                <img
                  src={s.image}
                  alt={s.label ? `هدايا ${s.label} من سوق مجاز` : "فئة هدايا من سوق مجاز"}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A120C]/90 via-[#1A120C]/45 to-[#1A120C]/10"></div>

                <div className="relative h-full flex flex-col justify-end p-5 text-right">
                  <span className="w-11 h-11 rounded-full bg-[#FFFDF9]/90 flex items-center justify-center text-[22px] text-[#8A6A4F] mb-3">
                    <i className={s.icon}></i>
                  </span>
                  <h3 className="text-[17px] font-bold text-[#FFFDF9]">{s.label}</h3>
                  <p className="mt-1.5 text-[13px] leading-6 text-[#FFFDF9]/90">{s.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-[12px] font-semibold text-[#E3C78A]">
                    {filterGifts(s.key).length} منتج
                    <span className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-arrow-left-line"></i>
                    </span>
                  </span>
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}