"use client";

import { useState } from "react";
import Link from "next/link";
import { navEntries, megaColumns, giftLinks, featuredProduct } from "@/lib/nav";

function MegaMenu({ open }: { open: boolean }) {
  return (
    <div
      className={`absolute left-0 right-0 top-full bg-white border-b border-[#E8DFD3] shadow-[0_34px_70px_-40px_rgba(43,33,27,.35)] transition-all duration-300 z-50 ${
        open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
      }`}
    >
      <span className="block w-full h-[2px] bg-[#B8913A]"></span>
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-5">
        {megaColumns.map((col, idx) => (
          <div key={col.title} className={`p-10 ${idx > 0 ? "border-l border-[#E8DFD3]" : ""}`}>
            <h3 className="text-[13px] font-bold text-[#B8913A] tracking-[0.05em] select-none">
              {col.title}
            </h3>
            <span className="block mt-2.5 w-6 h-[2px] bg-[#B8913A]"></span>
            <ul className="mt-4 flex flex-col gap-3.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="inline-block text-[15px] font-normal text-[#2B211B] hover:text-[#B8913A] hover:-translate-x-1 transition-all duration-200 cursor-pointer"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/shop"
              className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#B8913A] hover:text-[#8A6A4F] transition-colors cursor-pointer whitespace-nowrap"
            >
              عرض الكل
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-left-line"></i>
              </span>
            </Link>
          </div>
        ))}

        <div className="p-10 border-l border-[#E8DFD3]">
          <Link
            href={featuredProduct.href}
            className="group/feat block rounded-2xl overflow-hidden border border-[#E8DFD3] hover:border-[#C2A06B] transition-colors cursor-pointer"
          >
            <div className="relative w-full h-[200px] bg-[#F6F1E8]">
              <img
                src={featuredProduct.image}
                alt={featuredProduct.name ? `${featuredProduct.name} - سوق مجاز` : "منتج مميز من سوق مجاز"}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain p-5 transition-transform duration-500 group-hover/feat:scale-105"
              />
              <span className="absolute top-3 right-3 text-[11px] px-2.5 py-1 rounded-full bg-[#C2A06B] text-[#FFFDF9]">
                {featuredProduct.badge}
              </span>
            </div>
            <div className="p-4 text-right">
              <h4 className="text-[15px] font-medium text-[#2B211B]">{featuredProduct.name}</h4>
              <p className="mt-1 text-[14px] font-semibold text-[#8A6A4F]">{featuredProduct.price}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] text-[#B8913A] whitespace-nowrap">
                تسوّق الآن
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-arrow-left-line"></i>
                </span>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function DesktopNav({ light = false }: { light?: boolean }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <nav
      className="w-full h-full flex items-center"
      onMouseLeave={() => setOpen(null)}
    >
      <ul
        className="w-full h-full flex items-center justify-center gap-9 px-6 lg:px-12 transition-all duration-300 ease-out"
      >
        {navEntries.map((item) => {
          if (item.type === "badge") {
            return (
              <li key={item.key} className="shrink-0">
                <Link
                  href={item.href}
                  className="inline-flex items-center h-7 px-3.5 rounded-full bg-[#006C35] text-white text-[13px] font-medium whitespace-nowrap cursor-pointer hover:bg-[#005a2c] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            );
          }

          const hasMenu = item.type === "mega" || item.type === "dropdown";
          const isOpen = open === item.key;

          return (
            <li key={item.key} className="relative shrink-0">
              {hasMenu ? (
                <button
                  onMouseEnter={() => setOpen(item.key)}
                  onClick={() => setOpen(isOpen ? null : item.key)}
                  className={`relative inline-flex items-center gap-1.5 text-[15px] font-medium hover:text-[#B8913A] transition-colors cursor-pointer whitespace-nowrap after:absolute after:-bottom-1 after:right-0 after:h-[1.5px] after:w-0 after:bg-[#B8913A] hover:after:w-full after:transition-all after:duration-300 ${
                    isOpen ? "text-[#B8913A] after:w-full" : light ? "text-[#FFFDF9]" : "text-[#2B211B]"
                  }`}
                >
                  {item.label}
                  <span className={`w-4 h-4 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <i className="ri-arrow-down-s-line"></i>
                  </span>
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`relative inline-flex items-center gap-1.5 text-[15px] font-medium ${light ? "text-[#FFFDF9]" : "text-[#2B211B]"} hover:text-[#B8913A] transition-colors cursor-pointer whitespace-nowrap after:absolute after:-bottom-1 after:right-0 after:h-[1.5px] after:w-0 after:bg-[#B8913A] hover:after:w-full after:transition-all after:duration-300`}
                >
                  {item.label}
                </Link>
              )}

              {item.type === "dropdown" && (
                <div
                  className={`absolute top-full right-0 pt-3 transition-all duration-300 ${
                    isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="w-56 rounded-2xl bg-white border border-[#E8DFD3] shadow-[0_28px_56px_-30px_rgba(43,33,27,.35)] p-2">
                    {giftLinks.map((l) => (
                      <Link
                        key={l.label}
                        href={l.href}
                        className="block px-4 py-2.5 rounded-xl text-[15px] text-[#2B211B] hover:bg-[#F8F4EE] hover:text-[#B8913A] transition-colors cursor-pointer"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <MegaMenu open={open === "shop"} />
    </nav>
  );
}