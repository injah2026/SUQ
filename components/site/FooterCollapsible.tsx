"use client";

import { useState, type ReactNode } from "react";

export default function FooterCollapsible({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <div className="border-b border-[#C2A06B]/15 lg:border-0">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between py-4 lg:py-0 lg:cursor-default cursor-pointer"
        >
          <h4 className="font-heading text-[16px] font-semibold text-[#E3C78A]">{title}</h4>
          <span
            className={`lg:hidden w-5 h-5 flex items-center justify-center text-xl text-[#C2A06B] transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
          >
            <i className="ri-add-line"></i>
          </span>
        </button>
        <div className={`${open ? "block" : "hidden"} lg:block pb-4 lg:pb-0 lg:mt-6`}>
          {children}
        </div>
      </div>
    </div>
  );
}