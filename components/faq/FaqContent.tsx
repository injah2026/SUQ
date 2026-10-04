"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/home/Reveal";
import { faqGroups, type FaqItem } from "@/lib/faqData";

function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  if (!items.length) {
    return (
      <div className="py-20 text-center rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3]">
        <span className="w-14 h-14 mx-auto flex items-center justify-center rounded-full border border-[#C2A06B]/40 text-2xl text-[#C2A06B]">
          <i className="ri-search-eye-line"></i>
        </span>
        <p className="mt-5 text-[16px] font-semibold text-[#2B211B]">لا توجد نتائج مطابقة</p>
        <p className="mt-2 text-[14px] text-[#8A7B6E]">جرّب كلمة أخرى أو تصفّح الأقسام أعلاه.</p>
      </div>
    );
  }

  return (
    <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] divide-y divide-[#EFE3CC] overflow-hidden">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-right px-6 py-5 cursor-pointer"
            >
              <span className="text-[15px] lg:text-[16px] font-semibold text-[#2B211B]">{item.q}</span>
              <span
                className={`shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-[#F6F1E8] text-[20px] text-[#8A6A4F] transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <i className="ri-add-line"></i>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-[14.5px] leading-8 text-[#8A7B6E]">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function FaqContent() {
  const [tab, setTab] = useState(faqGroups[0].key);
  const [query, setQuery] = useState("");

  const active = faqGroups.find((g) => g.key === tab) ?? faqGroups[0];

  const items = useMemo(() => {
    const q = query.trim();
    if (!q) return active.items;
    return faqGroups
      .flatMap((g) => g.items)
      .filter((it) => it.q.includes(q) || it.a.includes(q));
  }, [query, active]);

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <span className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-[18px] text-[#A99C8E]">
            <i className="ri-search-line"></i>
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن سؤالك هنا"
            className="w-full h-14 rounded-full bg-[#FFFDF9] border border-[#E8DFD3] pr-14 pl-5 text-[15px] text-[#2B211B] placeholder:text-[#A99C8E] outline-none focus:border-[#C2A06B] transition-colors shadow-[0_20px_50px_-45px_rgba(43,33,27,.6)]"
          />
        </div>
      </div>

      {!query && (
        <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5">
          {faqGroups.map((g) => {
            const isActive = g.key === tab;
            return (
              <button
                key={g.key}
                type="button"
                onClick={() => setTab(g.key)}
                className={`inline-flex items-center gap-2 h-[46px] px-5 rounded-full text-[14.5px] font-semibold whitespace-nowrap cursor-pointer transition-colors duration-300 ${
                  isActive
                    ? "bg-[#8A6A4F] text-[#FFFDF9]"
                    : "bg-[#FFFDF9] border border-[#E8DFD3] text-[#8A7B6E] hover:border-[#C2A06B] hover:text-[#8A6A4F]"
                }`}
              >
                <span className="w-5 h-5 flex items-center justify-center text-[18px]">
                  <i className={g.icon}></i>
                </span>
                {g.label}
              </button>
            );
          })}
        </div>
      )}

      {query && (
        <p className="mt-5 text-center text-[14px] text-[#8A7B6E]">
          نتائج البحث في كل الأقسام عن «{query}»
        </p>
      )}

      <Reveal className="mt-8 max-w-3xl mx-auto" key={query ? "search" : tab}>
        <Accordion items={items} />
      </Reveal>

      <div className="surface-dark mt-12 max-w-3xl mx-auto rounded-[24px] bg-[#2B211B] px-8 py-9 text-center">
        <h3 className="font-heading text-[22px] lg:text-[26px] font-semibold text-[#FFFDF9]">
          ما وجدت إجابتك؟
        </h3>
        <p className="mt-3 text-[15px] leading-8 text-[#FFFDF9]/90">
          فريق مجاز جاهز لمساعدتك مباشرة عبر واتساب أو من صفحة التواصل.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://wa.me/966500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 h-[48px] px-6 rounded-full bg-[#25D366] text-white text-[15px] font-bold whitespace-nowrap hover:bg-[#1EBE5A] transition-colors cursor-pointer"
          >
            <span className="w-5 h-5 flex items-center justify-center text-[20px]">
              <i className="ri-whatsapp-fill"></i>
            </span>
            تواصل عبر واتساب
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 h-[48px] px-6 rounded-full border-[1.5px] border-[#FFFDF9] text-[#FFFDF9] text-[15px] font-bold whitespace-nowrap hover:bg-[#FFFDF9] hover:text-[#2B211B] transition-colors cursor-pointer"
          >
            صفحة التواصل
          </a>
        </div>
      </div>
    </section>
  );
}