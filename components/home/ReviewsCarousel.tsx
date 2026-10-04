"use client";

import { useRef } from "react";
import { reviews } from "@/lib/homeData";
import Reveal from "./Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ReviewsCarousel() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.offsetWidth * 0.6, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#FFFDF9] border-y border-[#E8DFD3]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <SectionLabel>آراء العملاء</SectionLabel>
              <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] font-semibold text-[#2B211B]">
                قالوا عن مجاز
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => scroll(1)}
                aria-label="السابق"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-[#E8DFD3] text-xl text-[#2B211B] hover:bg-[#8A6A4F] hover:text-[#FFFDF9] transition-colors cursor-pointer"
              >
                <i className="ri-arrow-right-line"></i>
              </button>
              <button
                onClick={() => scroll(-1)}
                aria-label="التالي"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-[#E8DFD3] text-xl text-[#2B211B] hover:bg-[#8A6A4F] hover:text-[#FFFDF9] transition-colors cursor-pointer"
              >
                <i className="ri-arrow-left-line"></i>
              </button>
            </div>
          </div>
        </Reveal>

        <div
          ref={ref}
          className="flex gap-5 lg:gap-7 overflow-x-auto no-scrollbar snap-x snap-mandatory"
        >
          {reviews.map((r) => (
            <div
              key={r.name}
              className="shrink-0 snap-start w-[85%] sm:w-[48%] lg:w-[31.5%] rounded-2xl bg-[#F8F4EE] border border-[#E8DFD3] p-8 flex flex-col"
            >
              <span className="flex items-center gap-1 text-[#C2A06B] text-lg">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i} className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-star-fill"></i>
                  </span>
                ))}
              </span>
              <p className="mt-5 text-[15px] leading-8 text-[#2B211B] flex-1">“{r.text}”</p>
              <span className="mt-6 text-[14px] font-semibold text-[#2B211B]">{r.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}