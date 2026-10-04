"use client";

import { useState } from "react";
import { sortOptions } from "@/lib/shopData";

export default function ShopToolbar({
  count,
  sort,
  onSort,
  onOpenFilters,
}: {
  count: number;
  sort: string;
  onSort: (s: string) => void;
  onOpenFilters: () => void;
}) {
  const [open, setOpen] = useState(false);
  const current = sortOptions.find((s) => s.key === sort)?.label ?? sortOptions[0].label;

  return (
    <div className="flex items-center justify-between gap-4 py-4 border-b border-[#E8DFD3]">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenFilters}
          className="lg:hidden inline-flex items-center gap-2 h-11 px-4 rounded-full border border-[#E8DFD3] bg-[#FFFDF9] text-[14px] font-semibold text-[#2B211B] whitespace-nowrap cursor-pointer"
        >
          <span className="w-5 h-5 flex items-center justify-center text-[17px]">
            <i className="ri-filter-3-line"></i>
          </span>
          الفلاتر
        </button>
        <span className="text-[14px] text-[#6B5D52] whitespace-nowrap">{count} منتج</span>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-2 h-11 px-4 rounded-full border border-[#E8DFD3] bg-[#FFFDF9] text-[14px] text-[#2B211B] whitespace-nowrap cursor-pointer hover:border-[#C2A06B] transition-colors"
        >
          <span className="text-[#8A7B6E]">ترتيب حسب:</span>
          <span className="font-semibold">{current}</span>
          <span className={`w-4 h-4 flex items-center justify-center transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
            <i className="ri-arrow-down-s-line"></i>
          </span>
        </button>

        {open && (
          <>
            <div className="fixed inset-0 z-20" onClick={() => setOpen(false)}></div>
            <div className="absolute left-0 top-12 z-30 w-56 rounded-2xl bg-[#FFFDF9] border border-[#E8DFD3] shadow-[0_28px_56px_-30px_rgba(43,33,27,.35)] p-2">
              {sortOptions.map((s) => {
                const active = s.key === sort;
                return (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => {
                      onSort(s.key);
                      setOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-[14px] transition-colors cursor-pointer ${
                      active
                        ? "bg-[#F6EFE2] text-[#8A6A4F] font-semibold"
                        : "text-[#6B5D52] hover:bg-[#F8F4EE] hover:text-[#8A6A4F]"
                    }`}
                  >
                    {s.label}
                    {active && (
                      <span className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-check-line"></i>
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}