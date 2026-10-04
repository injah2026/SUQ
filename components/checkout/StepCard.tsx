"use client";

import type { ReactNode } from "react";

export default function StepCard({
  index,
  title,
  summary,
  open,
  done,
  onEdit,
  children,
}: {
  index: number;
  title: string;
  summary?: string;
  open: boolean;
  done: boolean;
  onEdit: () => void;
  children: ReactNode;
}) {
  return (
    <section
      className={`rounded-[24px] border bg-[#FFFDF9] transition-colors ${
        open ? "border-[#C2A06B]" : "border-[#E8DFD3]"
      }`}
    >
      <button
        type="button"
        onClick={onEdit}
        className="w-full flex items-center gap-4 p-5 lg:p-6 text-right cursor-pointer"
      >
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center text-[14px] font-bold shrink-0 ${
            done
              ? "bg-[#0B3D2E] text-[#FFFDF9]"
              : open
              ? "bg-[#8A6A4F] text-[#FFFDF9]"
              : "bg-[#EFE3CC] text-[#8A7B6E]"
          }`}
        >
          {done ? <i className="ri-check-line"></i> : index}
        </span>

        <span className="flex-1 min-w-0">
          <span className="block text-[16px] font-bold text-[#2B211B]">{title}</span>
          {!open && summary && (
            <span className="block mt-0.5 text-[13px] text-[#8A7B6E] truncate">{summary}</span>
          )}
        </span>

        {!open && done && (
          <span className="text-[13px] font-semibold text-[#C2A06B] whitespace-nowrap">تعديل</span>
        )}
      </button>

      {open && <div className="px-5 lg:px-6 pb-6">{children}</div>}
    </section>
  );
}