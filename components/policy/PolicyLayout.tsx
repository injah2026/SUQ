"use client";

import { useEffect, useState } from "react";
import type { Policy } from "@/lib/policyData";

export default function PolicyLayout({ policy }: { policy: Policy }) {
  const [active, setActive] = useState(policy.sections[0]?.id ?? "");
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
    );
    policy.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [policy.sections]);

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="lg:hidden mb-7">
        <button
          type="button"
          onClick={() => setTocOpen((v) => !v)}
          className="w-full flex items-center justify-between gap-4 rounded-2xl bg-[#FFFDF9] border border-[#E8DFD3] px-5 h-14 cursor-pointer"
        >
          <span className="flex items-center gap-2.5 text-[15px] font-semibold text-[#2B211B]">
            <span className="w-5 h-5 flex items-center justify-center text-[18px] text-[#8A6A4F]">
              <i className="ri-list-check-2"></i>
            </span>
            محتويات الصفحة
          </span>
          <span className={`w-5 h-5 flex items-center justify-center text-xl text-[#8A6A4F] transition-transform duration-300 ${tocOpen ? "rotate-180" : ""}`}>
            <i className="ri-arrow-down-s-line"></i>
          </span>
        </button>
        {tocOpen && (
          <ol className="mt-2 rounded-2xl bg-[#FFFDF9] border border-[#E8DFD3] p-3 flex flex-col gap-1">
            {policy.sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setTocOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-[14px] text-[#4A3F37] hover:bg-[#F8F4EE] hover:text-[#94742A] transition-colors"
                >
                  {i + 1}. {s.heading}
                </a>
              </li>
            ))}
          </ol>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-14 items-start">
        <aside className="hidden lg:block sticky top-28">
          <div className="rounded-[22px] bg-[#FFFDF9] border border-[#E8DFD3] p-6">
            <h3 className="font-heading text-[17px] text-[#2B211B] mb-4">محتويات الصفحة</h3>
            <ol className="flex flex-col gap-1">
              {policy.sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`block px-3 py-2.5 rounded-xl text-[14px] leading-6 transition-colors ${
                      active === s.id
                        ? "bg-[#F1E6D2] text-[#1F1712] font-semibold"
                        : "text-[#4A3F37] hover:bg-[#F8F4EE] hover:text-[#1F1712]"
                    }`}
                  >
                    {i + 1}. {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        <article className="min-w-0 max-w-[760px]">
          {policy.sections.map((s) => (
            <div key={s.id} id={s.id} className="scroll-mt-32 mb-10 last:mb-0">
              <h2 className="font-heading text-[22px] lg:text-[27px] font-semibold text-[#2B211B]">
                {s.heading}
              </h2>
              <div className="mt-4 flex flex-col gap-4">
                {s.body.map((p) => (
                  <p key={p} className="text-[15.5px] lg:text-[16px] leading-9 text-[#5A4E43]">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="flex flex-col gap-3 mt-1">
                    {s.list.map((li) => (
                      <li key={li} className="flex items-start gap-3 text-[15.5px] leading-8 text-[#5A4E43]">
                        <span className="mt-1.5 w-5 h-5 shrink-0 flex items-center justify-center text-[18px] text-[#C2A06B]">
                          <i className="ri-checkbox-circle-line"></i>
                        </span>
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}