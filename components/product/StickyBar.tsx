"use client";

import { useState } from "react";
import { galleryImages } from "@/lib/data";
import { useCart } from "@/components/cart/CartContext";
import cartStyles from "@/components/cart/cart.module.css";

export default function StickyBar() {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({
      id: "حقيبة شموخ البشت",
      name: "حقيبة شموخ البشت",
      price: 150,
      image: galleryImages[0].src,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div data-sticky-cta className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FFFDF9] border-t border-[#E8DFD3] px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] flex items-center gap-4">
      <div className="flex flex-col leading-tight">
        <span className="text-[18px] font-bold text-[#C2A06B]">150 ر.س</span>
        <span className="text-[11px] text-[#8A7B6E]/60 line-through">300 ر.س</span>
      </div>
      <button
        type="button"
        onClick={handleAdd}
        className={`flex-1 h-[48px] rounded-full ${added ? "bg-[#3F7A4A]" : "bg-[#8A6A4F] hover:bg-[#6F5440]"} text-[#FFFDF9] text-[15px] font-bold inline-flex items-center justify-center gap-2.5 transition-colors cursor-pointer whitespace-nowrap ${added ? cartStyles.pop : ""}`}
      >
        <span className="w-5 h-5 flex items-center justify-center text-[18px]">
          <i className={added ? `ri-check-line ${cartStyles.check}` : "ri-shopping-bag-3-line"}></i>
        </span>
        {added ? "تمت الإضافة" : "أضف إلى السلة"}
      </button>
    </div>
  );
}