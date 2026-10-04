"use client";

import { useState } from "react";
import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { customFaq } from "@/lib/customData";

export default function CustomFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-14 items-start">
        <Reveal>
          <div>
            <SectionLabel>أسئلة شائعة</SectionLabel>
            <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] font-semibold text-[#2B211B] leading-[1.2]">
              كل ما تحتاج معرفته عن التطريز
            </h2>
            <p className="mt-5 text-[15px] leading-8 text-[#8A7B6E]">
              عندك فكرة خاصة أو تصميم مخصص غير موجود في الأداة؟ أرسل لنا التفاصيل وبنفّذها لك.
            </p>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-3 h-[48px] px-6 rounded-full bg-[#25D366] text-white text-[15px] font-bold whitespace-nowrap hover:bg-[#1EBE5A] transition-colors cursor-pointer"
            >
              <span className="w-5 h-5 flex items-center justify-center text-[20px]">
                <i className="ri-whatsapp-fill"></i>
              </span>
              كلّمنا عن فكرتك
            </a>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] divide-y divide-[#EFE3CC] overflow-hidden">
            {customFaq.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-right px-6 py-5 cursor-pointer"
                  >
                    <span className="text-[15px] lg:text-[16px] font-semibold text-[#2B211B]">
                      {item.q}
                    </span>
                    <span
                      className={`w-6 h-6 flex items-center justify-center text-[20px] text-[#8A6A4F] transition-transform duration-300 ${
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
                      <p className="px-6 pb-6 text-[14px] leading-8 text-[#8A7B6E]">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}