"use client";

import { useState } from "react";
import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ProductCard from "@/components/product/ProductCard";
import { finderQuestions, suggestGifts } from "@/lib/giftsData";
import type { ShopProduct } from "@/lib/shopData";

export default function GiftFinder() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<ShopProduct[] | null>(null);

  const ready = finderQuestions.every((q) => answers[q.key]);

  return (
    <section id="gift-finder" className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <Reveal>
        <div className="text-center mb-9">
          <SectionLabel align="center">أداة ذكية</SectionLabel>
          <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] font-semibold text-[#2B211B]">
            ابحث عن هديتك
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[#6B5D52] max-w-2xl mx-auto">
            ثلاث أسئلة سريعة فقط، ونعرض لك الاقتراحات الأنسب.
          </p>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-6 lg:p-9 shadow-[0_40px_90px_-70px_rgba(43,33,27,.5)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {finderQuestions.map((q) => (
              <div key={q.key}>
                <p className="text-[14px] font-bold text-[#2B211B] mb-3">{q.label}</p>
                <div className="flex flex-wrap gap-2">
                  {q.options.map((opt) => {
                    const isActive = answers[q.key] === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setAnswers((a) => ({ ...a, [q.key]: opt }))}
                        className={`h-[38px] px-4 rounded-full text-[13.5px] font-medium border transition-colors cursor-pointer whitespace-nowrap ${
                          isActive
                            ? "bg-[#8A6A4F] border-[#8A6A4F] text-[#FFFDF9]"
                            : "bg-[#F8F4EE] border-[#E8DFD3] text-[#2B211B] hover:border-[#C2A06B]"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-between">
            <p className="text-[13.5px] text-[#8A7B6E]">
              {ready ? "جاهزون لعرض الاقتراحات المناسبة لك" : "اختر خيارًا من كل سؤال لعرض الاقتراحات"}
            </p>
            <button
              type="button"
              disabled={!ready}
              onClick={() => setResults(suggestGifts(answers))}
              className={`h-[48px] px-8 rounded-full text-[15px] font-bold inline-flex items-center justify-center gap-2.5 transition-colors whitespace-nowrap ${
                ready
                  ? "bg-[#8A6A4F] text-[#FFFDF9] hover:bg-[#6F5440] cursor-pointer"
                  : "bg-[#E3D9CB] text-[#A99C8E] cursor-not-allowed"
              }`}
            >
              <span className="w-5 h-5 flex items-center justify-center text-[18px]">
                <i className="ri-magic-line"></i>
              </span>
              اعرض الاقتراحات
            </button>
          </div>
        </div>
      </Reveal>

      {results && (
        <div className="mt-12">
          <Reveal>
            <div className="flex items-end justify-between gap-6 mb-8">
              <div>
                <SectionLabel>النتيجة</SectionLabel>
                <h3 className="mt-0 font-heading text-[22px] lg:text-[28px] font-semibold text-[#2B211B]">
                  {results.length > 0 ? "اقتراحاتنا لك" : "لم نجد اقتراحًا مطابقًا"}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  setAnswers({});
                  setResults(null);
                }}
                className="text-[14px] font-semibold text-[#8A6A4F] hover:text-[#6F5440] transition-colors cursor-pointer whitespace-nowrap"
              >
                ابدأ من جديد
              </button>
            </div>
          </Reveal>

          {results.length > 0 && (
            <div data-product-shop className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 items-stretch">
              {results.map((p, i) => (
                <Reveal key={p.name} delay={i * 50} className="h-full">
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}