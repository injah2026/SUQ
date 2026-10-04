"use client";

import type { ReactNode } from "react";
import AccountSidebar from "./AccountSidebar";
import AccountMobileTabs from "./AccountMobileTabs";
import { useAuth } from "@/components/auth/AuthProvider";

export default function AccountShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  const { user, openAuth } = useAuth();

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-16 py-8 lg:py-14">
      {!user && (
        <div className="mb-6 rounded-[20px] bg-[#FBF3E2] border border-[#EAD9B4] px-5 py-4 flex flex-wrap items-center justify-between gap-3">
          <p className="flex items-center gap-2.5 text-[14px] text-[#7A5E22]">
            <span className="w-5 h-5 flex items-center justify-center text-[18px]">
              <i className="ri-information-line"></i>
            </span>
            سجّل دخولك لمزامنة طلباتك وعناوينك ونقاطك على كل أجهزتك.
          </p>
          <button
            type="button"
            onClick={openAuth}
            className="h-10 px-5 rounded-full bg-[#2B211B] text-[#FFFDF9] text-[14px] font-bold whitespace-nowrap cursor-pointer hover:bg-[#0B3D2E] transition-colors"
          >
            تسجيل الدخول
          </button>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
        <AccountSidebar />

        <div className="w-full min-w-0 flex-1">
          <AccountMobileTabs />

          <div className="mb-8">
            <h1 className="font-heading text-[26px] lg:text-[34px] font-semibold text-[#2B211B]">
              {title}
            </h1>
            {subtitle && <p className="mt-2 text-[14.5px] text-[#8A7B6E]">{subtitle}</p>}
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}