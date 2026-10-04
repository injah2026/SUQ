"use client";

import { useCart } from "./CartContext";
import { GIFT_WRAP_FEE } from "@/lib/cartData";

export default function GiftWrapToggle() {
  const { giftWrap, setGiftWrap } = useCart();

  return (
    <button
      type="button"
      onClick={() => setGiftWrap(!giftWrap)}
      className={`w-full flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-right transition-colors cursor-pointer ${
        giftWrap ? "border-[#C2A06B] bg-[#FBF8F2]" : "border-[#E8DFD3] bg-white/50 hover:border-[#C2A06B]/70"
      }`}
    >
      <span
        className={`w-6 h-6 flex items-center justify-center rounded-md border text-[15px] transition-colors ${
          giftWrap ? "bg-[#8A6A4F] border-[#8A6A4F] text-[#FFFDF9]" : "border-[#C2A06B]/60 text-transparent"
        }`}
      >
        <i className="ri-check-line"></i>
      </span>
      <span className="w-5 h-5 flex items-center justify-center text-[20px] text-[#C2A06B]">
        <i className="ri-gift-2-line"></i>
      </span>
      <span className="flex-1 text-[14.5px] font-semibold text-[#2B211B]">
        تغليف هدية فاخر مع بطاقة إهداء
      </span>
      <span className="text-[14px] font-bold text-[#8A6A4F]">+{GIFT_WRAP_FEE} ر.س</span>
    </button>
  );
}