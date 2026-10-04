"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "./CartContext";
import CartLineItem from "./CartLineItem";
import FreeShippingBar from "./FreeShippingBar";
import GiftWrapToggle from "./GiftWrapToggle";
import { GIFT_WRAP_FEE } from "@/lib/cartData";
import glass from "@/components/ui/glass.module.css";

export default function CartDrawer() {
  const { items, open, setOpen, subtotal, count, giftWrap } = useCart();
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const total = subtotal + (giftWrap ? GIFT_WRAP_FEE : 0);

  function go(path: string) {
    setOpen(false);
    router.push(path);
  }

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        aria-hidden={!open}
        className={`fixed inset-0 z-[65] bg-[#2B211B]/35 transition-opacity duration-400 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      ></div>

      <aside
        className={`fixed inset-0 sm:inset-auto sm:top-4 sm:bottom-4 sm:left-4 z-[70] w-full sm:w-[90%] sm:max-w-[420px] rounded-none sm:rounded-[28px] flex flex-col overflow-hidden transition-transform duration-500 ease-out ${glass.glass} ${
          open ? "translate-x-0" : "pointer-events-none -translate-x-[115%]"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-6 h-[76px] border-b border-[#E2D3BB]/60">
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-5 flex items-center justify-center text-[20px] text-[#8A6A4F]">
              <i className="ri-shopping-bag-3-line"></i>
            </span>
            <h2 className="font-heading text-[20px] font-semibold text-[#2B211B]">سلة التسوق</h2>
            {count > 0 && (
              <span className="text-[12px] font-bold text-[#FFFDF9] bg-[#C2A06B] rounded-full px-2.5 py-1">
                {count}
              </span>
            )}
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="إغلاق"
            className="w-11 h-11 flex items-center justify-center text-2xl text-[#2B211B] hover:text-[#8A6A4F] transition-colors cursor-pointer"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar px-6 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <span className="w-16 h-16 flex items-center justify-center text-[44px] text-[#C2A06B]/70">
                <i className="ri-shopping-bag-3-line"></i>
              </span>
              <p className="mt-5 text-[16px] font-semibold text-[#2B211B]">سلتك فارغة</p>
              <p className="mt-1.5 text-[14px] text-[#8A7B6E]">
                أضف قطعة من مجموعتنا لتبدأ رحلة الأناقة
              </p>
              <button
                onClick={() => go("/shop")}
                className="mt-6 h-11 px-7 rounded-full bg-[#8A6A4F] text-[#FFFDF9] text-[15px] font-bold inline-flex items-center gap-2 whitespace-nowrap cursor-pointer hover:bg-[#6F5440] transition-colors"
              >
                <span className="w-5 h-5 flex items-center justify-center text-[18px]">
                  <i className="ri-store-3-line"></i>
                </span>
                ابدأ التسوق
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              <FreeShippingBar subtotal={subtotal} />
              <ul className="flex flex-col gap-5">
                {items.map((item) => (
                  <li key={item.id}>
                    <CartLineItem item={item} />
                  </li>
                ))}
              </ul>
              <GiftWrapToggle />
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 pt-5 pb-6 border-t border-[#E2D3BB]/60">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[14px] text-[#8A7B6E]">
                <span>المجموع الجزئي</span>
                <span className="text-[#2B211B] font-semibold">{subtotal} ر.س</span>
              </div>
              {giftWrap && (
                <div className="flex items-center justify-between text-[14px] text-[#8A7B6E]">
                  <span>تغليف الهدية</span>
                  <span className="text-[#2B211B] font-semibold">{GIFT_WRAP_FEE} ر.س</span>
                </div>
              )}
            </div>
            <div className="mt-3 pt-3 border-t border-[#E2D3BB]/60 flex items-center justify-between">
              <span className="text-[15px] font-bold text-[#2B211B]">الإجمالي</span>
              <span className="text-[20px] font-bold text-[#2B211B]">{total} ر.س</span>
            </div>
            <p className="mt-1.5 flex items-center gap-2 text-[12.5px] text-[#8A7B6E]">
              <span className="w-4 h-4 flex items-center justify-center text-[#C2A06B]">
                <i className="ri-truck-line"></i>
              </span>
              الشحن يُحسب في صفحة الدفع
            </p>
            <button
              onClick={() => go("/checkout")}
              className="mt-4 w-full h-12 rounded-full bg-[#8A6A4F] text-[#FFFDF9] text-[15px] font-bold inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer hover:bg-[#6F5440] transition-colors"
            >
              إتمام الطلب
            </button>
            <button
              onClick={() => go("/cart")}
              className="mt-3 w-full h-11 rounded-full border border-[#8A6A4F]/40 text-[#8A6A4F] text-[14px] font-semibold whitespace-nowrap cursor-pointer hover:bg-[#8A6A4F]/10 transition-colors"
            >
              عرض السلة
            </button>
          </div>
        )}
      </aside>
    </>
  );
}