"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useAuth } from "./AuthProvider";
import AuthFlow from "./AuthFlow";

export default function AuthModal() {
  const { open, closeAuth, user, logout } = useAuth();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[80] flex items-stretch sm:items-center justify-center p-0 sm:p-4 transition-opacity duration-300 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-[#2B211B]/45" onClick={closeAuth}></div>

      <div
        className={`relative w-full h-full sm:h-auto sm:max-w-[440px] max-h-none sm:max-h-[90vh] overflow-y-auto no-scrollbar rounded-none sm:rounded-[28px] bg-[#FFFDF9] border-0 sm:border border-[#E8DFD3] p-6 sm:p-8 shadow-[0_40px_90px_-40px_rgba(43,33,27,.5)] transition-all duration-300 ${
          open ? "translate-y-0 scale-100" : "translate-y-3 scale-95"
        }`}
      >
        <button
          type="button"
          onClick={closeAuth}
          aria-label="إغلاق"
          className="absolute top-5 left-5 w-9 h-9 flex items-center justify-center rounded-full text-2xl text-[#8A7B6E] hover:bg-[#F6F1E8] hover:text-[#2B211B] transition-colors cursor-pointer"
        >
          <i className="ri-close-line"></i>
        </button>

        {user ? (
          <div className="text-right pt-4">
            <span className="w-16 h-16 rounded-full bg-[#F6F1E8] flex items-center justify-center text-[32px] text-[#8A6A4F]">
              <i className="ri-user-3-line"></i>
            </span>
            <h2 className="mt-5 font-heading text-[24px] font-semibold text-[#2B211B]">
              مرحبًا، {user.name}
            </h2>
            {user.phone && <p className="mt-2 text-[14px] text-[#8A7B6E]" dir="ltr">{`+966 ${user.phone}`}</p>}
            {user.email && <p className="mt-1 text-[14px] text-[#8A7B6E]">{user.email}</p>}

            <div className="mt-6 space-y-3">
              <Link
                href="/wishlist"
                onClick={closeAuth}
                className="flex items-center gap-3 rounded-2xl border border-[#E8DFD3] bg-[#FBF8F2] px-4 py-4 cursor-pointer hover:border-[#C2A06B] transition-colors"
              >
                <span className="w-6 h-6 flex items-center justify-center text-[20px] text-[#8A6A4F]">
                  <i className="ri-heart-3-line"></i>
                </span>
                <span className="flex-1 text-[14.5px] text-[#2B211B]">مفضلتك</span>
                <span className="w-5 h-5 flex items-center justify-center text-[18px] text-[#A99C8E]">
                  <i className="ri-arrow-left-s-line"></i>
                </span>
              </Link>
              <Link
                href="/account/orders"
                onClick={closeAuth}
                className="flex items-center gap-3 rounded-2xl border border-[#E8DFD3] bg-[#FBF8F2] px-4 py-4 cursor-pointer hover:border-[#C2A06B] transition-colors"
              >
                <span className="w-6 h-6 flex items-center justify-center text-[20px] text-[#8A6A4F]">
                  <i className="ri-truck-line"></i>
                </span>
                <span className="flex-1 text-[14.5px] text-[#2B211B]">طلباتي</span>
                <span className="w-5 h-5 flex items-center justify-center text-[18px] text-[#A99C8E]">
                  <i className="ri-arrow-left-s-line"></i>
                </span>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => {
                logout();
                closeAuth();
              }}
              className="mt-6 w-full h-[52px] rounded-full border border-[#E8DFD3] text-[#8A6A4F] text-[15px] font-bold whitespace-nowrap cursor-pointer transition-colors hover:bg-[#F6F1E8]"
            >
              تسجيل الخروج
            </button>
          </div>
        ) : (
          <div className="pt-4">
            <AuthFlow compact />
          </div>
        )}
      </div>
    </div>
  );
}