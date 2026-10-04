"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "gold" | "outlineLight";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  icon?: string;
  iconPos?: "start" | "end";
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
};

const base =
  "h-[48px] px-7 rounded-full text-[15px] font-bold inline-flex items-center justify-center gap-2.5 whitespace-nowrap cursor-pointer transition-colors duration-300";

const variants: Record<Variant, string> = {
  primary: "bg-[#8A6A4F] text-[#FFFDF9] hover:bg-[#6F5440]",
  secondary:
    "border-[1.5px] border-[#2B211B] text-[#2B211B] hover:bg-[#2B211B] hover:text-[#FFFDF9]",
  gold: "bg-[#C2A06B] text-[#0B3D2E] hover:bg-[#D9BC85]",
  outlineLight:
    "border-[1.5px] border-[#FFFDF9] text-[#FFFDF9] bg-transparent hover:bg-[#FFFDF9] hover:text-[#2B211B]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  icon,
  iconPos = "end",
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const content = (
    <>
      {icon && iconPos === "start" && (
        <span className="w-5 h-5 flex items-center justify-center text-[18px]">
          <i className={icon}></i>
        </span>
      )}
      <span>{children}</span>
      {icon && iconPos === "end" && (
        <span className="w-5 h-5 flex items-center justify-center text-[18px]">
          <i className={icon}></i>
        </span>
      )}
    </>
  );

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {content}
    </button>
  );
}