"use client";

import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [raised, setRaised] = useState(false);

  useEffect(() => {
    const check = () => {
      const el = document.querySelector("[data-sticky-cta]") as HTMLElement | null;
      if (!el) {
        setRaised(false);
        return;
      }
      const visible = el.offsetParent !== null && el.getBoundingClientRect().height > 0;
      setRaised(visible && window.innerWidth < 1024);
    };
    check();
    const t = setTimeout(check, 600);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <a
      href="https://wa.me/966500000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      className={`group fixed left-4 sm:left-6 z-50 flex items-center cursor-pointer transition-all duration-300 ${
        raised ? "bottom-[92px]" : "bottom-6"
      }`}
    >
      <span className="relative w-12 h-12 sm:w-[60px] sm:h-[60px] flex items-center justify-center rounded-full bg-[#25D366] text-white text-[26px] sm:text-[32px] shadow-[0_14px_30px_-10px_rgba(37,211,102,.85)] transition-transform duration-300 group-hover:scale-105">
        <i className="ri-whatsapp-fill"></i>
      </span>
      <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-full bg-white px-4 py-2 text-[13px] text-[#2B211B] border border-[#E8DFD3] shadow-[0_12px_28px_-16px_rgba(43,33,27,.6)] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 hidden sm:block">
        تحتاج مساعدة؟ كلّمنا
      </span>
    </a>
  );
}