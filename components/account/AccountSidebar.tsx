"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import { accountMenu } from "@/lib/accountData";

export default function AccountSidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const name = user?.name || "ضيف مجاز";

  return (
    <aside className="hidden lg:flex flex-col w-[280px] shrink-0">
      <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-6">
        <div className="flex items-center gap-3.5">
          <span className="w-14 h-14 rounded-full bg-[#0B3D2E] text-[#FFFDF9] flex items-center justify-center text-[22px] font-bold shrink-0">
            {name.trim().charAt(0)}
          </span>
          <div className="min-w-0">
            <span className="block text-[15px] font-bold text-[#2B211B] truncate">{name}</span>
            <span className="block text-[12.5px] text-[#8A7B6E] mt-0.5">
              {user?.phone ? `+966 ${user.phone}` : "عضو مجاز"}
            </span>
          </div>
        </div>
      </div>

      <nav className="mt-4 rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-3">
        <ul className="flex flex-col gap-1">
          {accountMenu.map((item) => {
            const active =
              item.key === "overview"
                ? pathname === "/account"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            const cls = active
              ? "bg-[#F3ECE0] text-[#2B211B]"
              : "text-[#5c5349] hover:bg-[#F8F4EE]";
            return (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 h-12 px-4 rounded-2xl text-[15px] font-semibold cursor-pointer transition-colors ${cls}`}
                >
                  <span
                    className={`w-6 h-6 flex items-center justify-center text-[20px] ${
                      active ? "text-[#8A6A4F]" : "text-[#A99C8E]"
                    }`}
                  >
                    <i className={item.icon}></i>
                  </span>
                  <span className="flex-1">{item.label}</span>
                  {active && (
                    <span className="w-4 h-4 flex items-center justify-center text-[16px] text-[#C2A06B]">
                      <i className="ri-arrow-left-s-line"></i>
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-2 pt-2 border-t border-[#EFE7DB]">
          <button
            type="button"
            onClick={logout}
            className="w-full flex items-center gap-3 h-12 px-4 rounded-2xl text-[15px] font-semibold text-[#B4552F] hover:bg-[#FBEFE9] cursor-pointer transition-colors"
          >
            <span className="w-6 h-6 flex items-center justify-center text-[20px]">
              <i className="ri-logout-box-r-line"></i>
            </span>
            تسجيل الخروج
          </button>
        </div>
      </nav>
    </aside>
  );
}