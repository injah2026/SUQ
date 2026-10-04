"use client";

import { useCart, type CartItem } from "./CartContext";

export default function CartLineItem({ item }: { item: CartItem }) {
  const { updateQty, removeItem } = useCart();

  return (
    <div className="flex gap-4">
      <div className="w-24 h-28 rounded-2xl overflow-hidden bg-[#F6F1E8] shrink-0">
        <img src={item.image} alt={item.name ? `${item.name} - سوق مجاز` : "منتج من سوق مجاز"} loading="lazy" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 flex flex-col text-right min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[15px] font-semibold text-[#2B211B] leading-6">{item.name}</h3>
          <button
            onClick={() => removeItem(item.id)}
            aria-label="إزالة"
            className="w-6 h-6 flex items-center justify-center text-[18px] text-[#A99C8E] hover:text-[#B4552F] transition-colors cursor-pointer shrink-0"
          >
            <i className="ri-delete-bin-6-line"></i>
          </button>
        </div>

        {item.color && (
          <span className="mt-1.5 text-[13px] text-[#8A7B6E]">اللون: {item.color}</span>
        )}

        <span className="mt-2 text-[15px] font-bold text-[#8A6A4F]">{item.price} ر.س</span>

        <div className="mt-auto pt-3 flex items-center justify-between gap-3">
          <div className="flex items-center border border-[#E2D3BB] rounded-full overflow-hidden bg-white/60 w-fit">
            <button
              onClick={() => updateQty(item.id, item.qty - 1)}
              aria-label="تقليل"
              className="w-8 h-8 flex items-center justify-center text-base text-[#2B211B] hover:bg-[#8A6A4F] hover:text-[#FFFDF9] transition-colors cursor-pointer"
            >
              <i className="ri-subtract-line"></i>
            </button>
            <span className="w-9 text-center text-[13px] font-bold text-[#2B211B]">{item.qty}</span>
            <button
              onClick={() => updateQty(item.id, item.qty + 1)}
              aria-label="زيادة"
              className="w-8 h-8 flex items-center justify-center text-base text-[#2B211B] hover:bg-[#8A6A4F] hover:text-[#FFFDF9] transition-colors cursor-pointer"
            >
              <i className="ri-add-line"></i>
            </button>
          </div>
          <span className="text-[15px] font-bold text-[#2B211B]">
            {item.price * item.qty} ر.س
          </span>
        </div>
      </div>
    </div>
  );
}