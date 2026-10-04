"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShow(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px 12% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const safeDelay = Math.min(delay, 160);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${safeDelay}ms` }}
      className={`transition-all duration-[350ms] ease-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      } ${className}`}
    >
      {children}
    </div>
  );
}