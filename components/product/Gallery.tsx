"use client";

import { useRef, useState } from "react";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  const [active, setActive] = useState(0);
  const touchX = useRef<number | null>(null);

  const go = (dir: number) =>
    setActive((i) => (i + dir + galleryImages.length) % galleryImages.length);

  return (
    <div className="w-full">
      <div
        className="relative w-full aspect-square overflow-hidden rounded-2xl bg-[#FFFDF9] border border-[#E8DFD3] shadow-[0_40px_80px_-55px_rgba(43,33,27,.45)] group"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const d = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(d) > 45) go(d > 0 ? -1 : 1);
          touchX.current = null;
        }}
      >
        <img
          src={galleryImages[active].src}
          alt={galleryImages[active].alt ? `${galleryImages[active].alt} - سوق مجاز` : "صورة المنتج - سوق مجاز"}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
        <button
          onClick={() => go(1)}
          aria-label="السابق"
          className="hidden lg:flex absolute top-1/2 right-5 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-[#FFFDF9]/90 backdrop-blur text-xl text-[#2B211B] hover:bg-[#8A6A4F] hover:text-[#FFFDF9] transition-colors cursor-pointer"
        >
          <i className="ri-arrow-right-s-line"></i>
        </button>
        <button
          onClick={() => go(-1)}
          aria-label="التالي"
          className="hidden lg:flex absolute top-1/2 left-5 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-[#FFFDF9]/90 backdrop-blur text-xl text-[#2B211B] hover:bg-[#8A6A4F] hover:text-[#FFFDF9] transition-colors cursor-pointer"
        >
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 lg:hidden flex gap-1.5">
          {galleryImages.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-6 bg-[#C2A06B]" : "w-1.5 bg-white/80"
              }`}
            ></span>
          ))}
        </div>
      </div>

      <div className="mt-5 flex lg:grid lg:grid-cols-6 gap-3.5 overflow-x-auto no-scrollbar">
        {galleryImages.map((img, i) => (
          <button
            key={img.alt}
            onClick={() => setActive(i)}
            className={`shrink-0 w-20 h-20 lg:w-full lg:h-auto lg:aspect-square rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer ${
              i === active
                ? "border-[#C2A06B] shadow-[0_10px_25px_-15px_rgba(194,160,107,.9)]"
                : "border-[#E8DFD3] opacity-70 hover:opacity-100 hover:border-[#C2A06B]/50"
            }`}
          >
            <img src={img.src} alt={img.alt ? `${img.alt} - سوق مجاز` : "صورة المنتج - سوق مجاز"} loading="lazy" decoding="async" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}