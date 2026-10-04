import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  tone?: "light" | "dark";
  align?: "start" | "center";
  className?: string;
};

export default function SectionLabel({
  children,
  tone = "light",
  align = "start",
  className = "",
}: Props) {
  const gold = tone === "dark" ? "#E3C78A" : "#94742A";

  return (
    <div
      className={`flex items-center gap-2.5 mb-3 ${
        align === "center" ? "justify-center" : ""
      } ${className}`}
    >
      <span
        className="h-px w-5 shrink-0 rounded-full"
        style={{ backgroundColor: gold }}
        aria-hidden="true"
      ></span>
      <span
        className="text-[14px] font-semibold whitespace-nowrap"
        style={{ color: gold, letterSpacing: "0.02em" }}
      >
        {children}
      </span>
    </div>
  );
}