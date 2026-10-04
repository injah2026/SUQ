"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "./CartContext";
import styles from "./cart.module.css";

export default function CartToast() {
  const { toast, dismissToast, setOpen } = useCart();

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(dismissToast, 3000);
    return () => clearTimeout(t);
  }, [toast, dismissToast]);

  if (!toast) return null;
  const { item } = toast;

  return (
    <div
      dir="rtl"
      className={`fixed z-[80] left-3 right-3 bottom-[86px] lg:bottom-auto lg:right-auto lg:left-6 lg:top-[190px] lg:w-[352px] rounded-[20px] border border-[#E8DFD3] bg-[#FFFDF9] shadow-[0_30px_70px_-30px_rgba(43,33,27,.45)] p-3.5 ${styles.toastLg}`}
      role="status"
    >
      <div className="flex items-start gap-3">
        <img
          src={item.image}
          alt={item.name}
          className="w-14 h-14 rounded-xl object-cover shrink-0"
        />

        <div className="flex-1 min-w-0 text-right">
          <p className="flex items-center gap-1.5 text-[12px] font-semibold text-[#3F7A4A]">
            <span className="w-4 h-4 flex items-center justify-center text-[14px]">
              <i className="ri-checkbox-circle-fill"></i>
            </span>
            تمت الإضافة إلى السلة
          </p>
          <p className="mt-0.5 text-[14px] font-semibold text-[#2B211B] truncate">{item.name}</p>
          <p className="text-[13px] font-bold text-[#8A6A4F]">{item.price} ر.س</p>

          <div className="mt-2 flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                dismissToast();
                setOpen(true);
              }}
              className="h-7 px-3 rounded-full bg-[#8A6A4F] text-[#FFFDF9] text-[12px] font-semibold whitespace-nowrap cursor-pointer hover:bg-[#6F5440] transition-colors"
            >
              عرض السلة
            </button>
            <Link
              href="/checkout"
              onClick={dismissToast}
              className="h-7 px-3 inline-flex items-center rounded-full border border-[#8A6A4F]/40 text-[#8A6A4F] text-[12px] font-semibold whitespace-nowrap cursor-pointer hover:bg-[#8A6A4F]/10 transition-colors"
            >
              إتمام الطلب
            </Link>
          </div>
        </div>

        <button
          type="button"
          aria-label="إغلاق"
          onClick={dismissToast}
          className="w-7 h-7 -mt-1 -me-1 flex items-center justify-center rounded-full text-lg text-[#8A7B6E] hover:text-[#2B211B] hover:bg-[#F1E9DE] transition-colors cursor-pointer shrink-0"
        >
          <i className="ri-close-line"></i>
        </button>
      </div>
    </div>
  );
}