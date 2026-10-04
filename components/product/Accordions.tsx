"use client";

import { useState } from "react";
import { accordionItems } from "@/lib/data";

export default function Accordions() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="w-full rounded-2xl bg-[#FFFDF9] border border-[#E8DFD3] shadow-[0_30px_60px_-50px_rgba(43,33,27,.4)] overflow-hidden">
      {accordionItems.map((item, i) => (
        <div key={item.title} className={i !== 0 ? "border-t border-[#E8DFD3]" : ""}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-8 lg:px-12 py-5 text-right cursor-pointer transition-colors hover:bg-[#F8F4EE]"
          >
            <span className="font-heading text-lg lg:text-[22px] font-semibold text-[#2B211B]">
              {item.title}
            </span>
            <span className={`w-9 h-9 flex items-center justify-center text-xl rounded-full transition-colors ${open === i ? "bg-[#8A6A4F] text-[#FFFDF9]" : "text-[#C2A06B]"}`}>
              <i className={open === i ? "ri-subtract-line" : "ri-add-line"}></i>
            </span>
          </button>
          {open === i && (
            <p className="px-8 lg:px-12 pb-7 text-[15px] leading-8 text-[#2B211B] max-w-3xl">
              {item.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}