"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import type { ProductCardData } from "@/components/product/ProductCard";
import { useCart } from "@/components/cart/CartContext";
import cartStyles from "@/components/cart/cart.module.css";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5 text-[#D9A94E]">
      {[1, 2, 3, 4, 5].map((i) => {
        const icon =
          rating >= i ? "ri-star-fill" : rating >= i - 0.5 ? "ri-star-half-line" : "ri-star-line";
        return (
          <span key={i} className="w-4 h-4 flex items-center justify-center text-[16px]">
            <i className={icon}></i>
          </span>
        );
      })}
    </span>
  );
}

export default function QuickViewModal({
  product,
  onClose,
}: {
  product: ProductCardData;
  onClose: () => void;
}) {
  const gallery = [product.image, product.hover];
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [color, setColor] = useState(product.colors[0]?.name ?? "");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const savings = product.oldPrice - product.price;
  const desc = product.desc ?? "جلد طبيعي بتطريز ذهبي يدوي";

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 200);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (!mounted) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center p-0 md:p-6 transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{ backgroundColor: "rgba(43,33,27,0.5)" }}
        onClick={handleClose}
      ></div>

      <div
        className={`relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-[900px] overflow-y-auto md:rounded-[24px] bg-[#FFFDF9] shadow-2xl transition-all duration-300 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <button
          type="button"
          aria-label="إغلاق"
          onClick={handleClose}
          className="absolute top-4 left-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur text-xl text-[#2B211B] hover:text-[#B8913A] transition-colors cursor-pointer"
        >
          <i className="ri-close-line"></i>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-4 lg:p-5">
            <div className="relative aspect-[4/5] rounded-[18px] overflow-hidden bg-[#F6F1E8]">
              <img
                src={gallery[activeImg]}
                alt={product.name ? `${product.name} - سوق مجاز` : "منتج من سوق مجاز"}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3 flex items-center gap-2.5">
              {gallery.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  aria-label={`صورة ${i + 1}`}
                  className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-colors cursor-pointer ${
                    activeImg === i ? "border-[#C2A06B]" : "border-transparent"
                  }`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 lg:p-8 text-right">
            <span className="text-[12px] tracking-[0.2em] text-[#C2A06B] font-semibold">
              {product.collection}
            </span>
            <h2 className="mt-2 text-[22px] lg:text-[26px] font-bold text-[#2B211B]">
              {product.name}
            </h2>

            <div className="mt-3 flex items-center gap-2">
              <Stars rating={product.rating} />
              <span className="text-[13px] text-[#8A7B6E]">
                {product.rating} ({product.reviews})
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3 flex-wrap">
              <span className="text-[24px] font-bold text-[#2B211B] whitespace-nowrap">{product.price} ر.س</span>
              <span className="text-[15px] text-[#A99C8E] line-through whitespace-nowrap">
                {product.oldPrice} ر.س
              </span>
              <span className="text-[13px] font-semibold text-[#3F7A4A] bg-[#E9F5EE] px-2.5 py-1 rounded-full">
                وفّر {savings} ر.س
              </span>
            </div>

            <p className="mt-4 text-[14px] leading-7 text-[#8A7B6E]">{desc}</p>

            {product.colors.length > 0 && (
              <div className="mt-5">
                <p className="text-[13px] font-semibold text-[#2B211B] mb-2.5">
                  اللون: <span className="font-normal text-[#8A7B6E]">{color}</span>
                </p>
                <div className="flex items-center gap-2.5">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      aria-label={c.name}
                      onClick={() => setColor(c.name)}
                      className={`w-7 h-7 rounded-full border transition-all cursor-pointer ${
                        color === c.name
                          ? "border-[#C2A06B] ring-2 ring-[#C2A06B]/40"
                          : "border-[#E0D6C8]"
                      }`}
                      style={{ backgroundColor: c.swatch }}
                    ></button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-5 flex items-center gap-4">
              <div className="flex items-center h-11 rounded-full border border-[#E8DFD3] overflow-hidden">
                <button
                  type="button"
                  aria-label="زيادة"
                  onClick={() => setQty((q) => q + 1)}
                  className="w-11 h-11 flex items-center justify-center text-xl text-[#2B211B] hover:text-[#B8913A] cursor-pointer"
                >
                  <i className="ri-add-line"></i>
                </button>
                <span className="w-10 text-center text-[16px] font-semibold text-[#2B211B]">
                  {qty}
                </span>
                <button
                  type="button"
                  aria-label="إنقاص"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-xl text-[#2B211B] hover:text-[#B8913A] cursor-pointer"
                >
                  <i className="ri-subtract-line"></i>
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                addItem(
                  {
                    id: product.name,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    color,
                  },
                  qty
                );
                setAdded(true);
                setTimeout(() => setAdded(false), 1500);
              }}
              className={`mt-5 w-full h-[48px] rounded-full ${added ? "bg-[#3F7A4A]" : "bg-[#8A6A4F] hover:bg-[#6F5440]"} text-[#FFFDF9] text-[15px] font-bold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap ${added ? cartStyles.pop : ""}`}
            >
              <span className="w-5 h-5 flex items-center justify-center text-[18px]">
                <i className={added ? `ri-check-line ${cartStyles.check}` : "ri-shopping-bag-3-line"}></i>
              </span>
              {added ? "تمت الإضافة" : "أضف للسلة"}
            </button>

            <Link
              href="/product"
              onClick={handleClose}
              className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#8A6A4F] hover:text-[#B8913A] transition-colors cursor-pointer"
            >
              عرض التفاصيل الكاملة
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-left-line"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}