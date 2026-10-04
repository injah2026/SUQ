"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { accountMenu } from "@/lib/accountData";

export default function AccountMobileTabs() {
  const pathname = usePathname();

  return (
    <div className="lg:hidden -mx-4 px-4 mb-6">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {accountMenu.map((item) => {
          const active =
            item.key === "overview"
              ? pathname === "/account"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`shrink-0 h-11 px-4 rounded-full text-[14px] font-semibold inline-flex items-center gap-2 whitespace-nowrap cursor-pointer transition-colors ${
                active
                  ? "bg-[#2B211B] text-[#FFFDF9]"
                  : "bg-[#FFFDF9] text-[#5c5349] border border-[#E8DFD3]"
              }`}
            >
              <span className="w-4 h-4 flex items-center justify-center text-[16px]">
                <i className={item.icon}></i>
              </span>
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}