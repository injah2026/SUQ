"use client";

import { useWishlist } from "@/components/wishlist/WishlistContext";
import cartStyles from "@/components/cart/cart.module.css";
import { productInquiryUrl } from "@/lib/whatsapp";

const PRODUCT_ID = "حقيبة شموخ البشت";

export default function ProductPurchase({
  qty,
  setQty,
  onAdd,
  onBuy,
  added,
  price,
}: {
  qty: number;
  setQty: (n: number) => void;
  onAdd: () => void;
  onBuy: () => void;
  added: boolean;
  price: number;
}) {
  const { has, toggle } = useWishlist();
  const wished = has(PRODUCT_ID);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="flex items-center h-12 rounded-full border border-[#E8DFD3] bg-[#FFFDF9] overflow-hidden">
          <button
            type="button"
            aria-label="تقليل"
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="w-12 h-12 flex items-center justify-center text-xl text-[#2B211B] hover:text-[#B8913A] transition-colors cursor-pointer"
          >
            <i className="ri-subtract-line"></i>
          </button>
          <span className="w-10 text-center text-[16px] font-bold text-[#2B211B]">{qty}</span>
          <button
            type="button"
            aria-label="زيادة"
            onClick={() => setQty(qty + 1)}
            className="w-12 h-12 flex items-center justify-center text-xl text-[#2B211B] hover:text-[#B8913A] transition-colors cursor-pointer"
          >
            <i className="ri-add-line"></i>
          </button>
        </div>

        <button
          type="button"
          aria-label={wished ? "إزالة من المفضلة" : "أضف إلى المفضلة"}
          onClick={() => toggle(PRODUCT_ID)}
          className={`w-12 h-12 flex items-center justify-center rounded-full border text-[21px] transition-colors cursor-pointer ${
            wished
              ? "border-[#B4552F] text-[#B4552F]"
              : "border-[#E8DFD3] text-[#2B211B] hover:border-[#C2A06B] hover:text-[#B8913A]"
          }`}
        >
          <i className={wished ? "ri-heart-3-fill" : "ri-heart-3-line"}></i>
        </button>
      </div>

      <button
        type="button"
        onClick={onAdd}
        className={`w-full h-[52px] rounded-full ${added ? "bg-[#3F7A4A]" : "bg-[#8A6A4F] hover:bg-[#6F5440]"} text-[#FFFDF9] text-[16px] font-bold inline-flex items-center justify-center gap-2.5 transition-colors cursor-pointer whitespace-nowrap ${added ? cartStyles.pop : ""}`}
      >
        <span className="w-5 h-5 flex items-center justify-center text-[19px]">
          <i className={added ? `ri-check-line ${cartStyles.check}` : "ri-shopping-bag-3-line"}></i>
        </span>
        {added ? "تمت الإضافة" : "أضف إلى السلة"}
      </button>

      <button
        type="button"
        onClick={onBuy}
        className="w-full h-[48px] rounded-full border-[1.5px] border-[#2B211B] text-[#2B211B] text-[15px] font-bold inline-flex items-center justify-center hover:bg-[#2B211B] hover:text-[#FFFDF9] transition-colors cursor-pointer whitespace-nowrap"
      >
        اشترِ الآن
      </button>

      <a
        href={productInquiryUrl(PRODUCT_ID, price)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-[48px] rounded-full border-[1.5px] border-[#94742A] text-[#94742A] text-[15px] font-bold inline-flex items-center justify-center gap-2 hover:bg-[#94742A] hover:text-[#FFFDF9] transition-colors cursor-pointer whitespace-nowrap"
      >
        <span className="w-5 h-5 flex items-center justify-center text-[19px]">
          <i className="ri-whatsapp-line"></i>
        </span>
        اسأل عن هذا المنتج
      </a>
    </div>
  );
}