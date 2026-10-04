"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./topbar.module.css";

const announcements = [
  "شحن مجاني للطلبات فوق 300 ر.س",
  "توصيل سريع خلال 3 أيام عمل",
  "تغليف هدايا فاخر مجانًا",
  "تطريز ذهبي يدوي لكل قطعة",
];

const regions = [
  "العربية · السعودية",
  "English · Saudi Arabia",
  "العربية · الإمارات",
];

export default function AnnouncementBar({ transparent = false }: { transparent?: boolean }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((v) => (v + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`w-full text-[13px] ${
        transparent
          ? "text-[#FFFDF9] border-b border-[#FFFDF9]/12"
          : "bg-[#2B211B] text-[#F8F4EE] border-b border-transparent"
      }`}
      style={transparent ? { backgroundColor: "rgba(20,16,13,0.6)" } : undefined}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 h-[38px] flex items-center justify-between gap-4">
        <div className="hidden sm:block h-full overflow-hidden">
          <p key={index} className={`h-full flex items-center tracking-wide ${styles.fade}`}>
            {announcements[index]}
          </p>
        </div>

        <div className="flex items-center h-full">
          <Link
            href="/track-order"
            className="flex items-center gap-2 h-full px-3 hover:text-[#D9BE83] transition-colors cursor-pointer whitespace-nowrap"
          >
            <span className="w-4 h-4 flex items-center justify-center text-[#C2A06B]">
              <i className="ri-truck-line"></i>
            </span>
            تتبع طلبك
          </Link>

          <span className="w-px h-4 bg-white/20"></span>

          <Link
            href="/contact"
            className="flex items-center gap-2 h-full px-3 hover:text-[#D9BE83] transition-colors cursor-pointer whitespace-nowrap"
          >
            <span className="w-4 h-4 flex items-center justify-center text-[#C2A06B]">
              <i className="ri-customer-service-2-line"></i>
            </span>
            خدمة العملاء
          </Link>

          <span className="w-px h-4 bg-white/20"></span>

          <div className="relative h-full">
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-1.5 h-full px-3 hover:text-[#D9BE83] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span className="w-4 h-4 flex items-center justify-center text-[#C2A06B]">
                <i className="ri-global-line"></i>
              </span>
              <span>{regions[0]}</span>
              <span className={`w-4 h-4 flex items-center justify-center transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
                <i className="ri-arrow-down-s-line"></i>
              </span>
            </button>
            {open && (
              <div className="absolute left-0 top-[38px] z-50 w-56 rounded-xl bg-[#FFFDF9] text-[#2B211B] shadow-2xl py-2 border border-[#E8DFD3]">
                {regions.map((item) => (
                  <button
                    key={item}
                    onClick={() => setOpen(false)}
                    className="w-full text-right px-4 py-2 text-[13px] hover:bg-[#F8F4EE] hover:text-[#8A6A4F] cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}