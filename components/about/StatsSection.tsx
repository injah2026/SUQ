"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { stats } from "@/lib/aboutData";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, seen };
}

function CountUp({ value, suffix, start }: { value: number; suffix: string; start: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const duration = 1600;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);

  return (
    <span suppressHydrationWarning={true}>
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const { ref, seen } = useInView<HTMLDivElement>();

  return (
    <section className="surface-dark w-full bg-[#0B3D2E]">
      <div ref={ref} className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="text-center mb-12">
          <SectionLabel tone="dark" align="center">مجاز بالأرقام</SectionLabel>
          <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] font-semibold text-[#FFFDF9]">
            حرفة تكبر عامًا بعد عام
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-[36px] lg:text-[52px] font-bold text-[#C2A06B] leading-none">
                <CountUp value={s.value} suffix={s.suffix} start={seen} />
              </p>
              <span className="mt-4 block mx-auto w-8 h-px bg-[#C2A06B]/40"></span>
              <p className="mt-4 text-[14px] lg:text-[15px] text-[#FFFDF9]/90">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}