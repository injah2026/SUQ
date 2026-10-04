"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/cart/CartContext";
import { useWishlist } from "@/components/wishlist/WishlistContext";
import QuickViewModal from "@/components/product/QuickViewModal";
import cartStyles from "@/components/cart/cart.module.css";
import cardStyles from "@/components/product/card.module.css";
import { productInquiryUrl } from "@/lib/whatsapp";

export type ProductColor = { name: string; swatch: string };

export type ProductCardData = {
  name: string;
  price: number;
  oldPrice: number;
  badge: string;
  image: string;
  hover: string;
  collection: string;
  rating: number;
  reviews: number;
  colors: ProductColor[];
  stock?: number;
  desc?: string;
};

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5 text-[#D9A94E]">
      {[1, 2, 3, 4, 5].map((i) => {
        const icon =
          rating >= i ? "ri-star-fill" : rating >= i - 0.5 ? "ri-star-half-line" : "ri-star-line";
        return (
          <span key={i} className="w-4 h-4 flex items-center justify-center text-[15px]">
            <i className={icon}></i>
          </span>
        );
      })}
    </span>
  );
}

type BadgeVariant = "default" | "green" | "gold";

export default function ProductCard({
  product,
  badgeVariant = "default",
}: {
  product: ProductCardData;
  badgeVariant?: BadgeVariant;
}) {
  const [colorIdx, setColorIdx] = useState(0);
  const [added, setAdded] = useState(false);
  const [quickOpen, setQuickOpen] = useState(false);
  const { addItem } = useCart();
  const { has, toggle } = useWishlist();

  const wished = has(product.name);
  const pct =
    product.oldPrice > product.price
      ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
      : 0;

  const discountBg =
    badgeVariant === "green"
      ? "bg-[#006C35] text-[#FFFDF9]"
      : badgeVariant === "gold"
      ? "bg-[#C2A06B] text-[#3A2A16]"
      : "bg-[#B4552F] text-[#FFFDF9]";

  const tag = product.badge.includes("جديد")
    ? { label: "جديد", cls: "bg-[#006C35]/10 text-[#006C35]" }
    : product.badge.includes("مبيع")
    ? { label: "الأكثر مبيعًا", cls: "bg-[#C2A06B]/15 text-[#8A6A4F]" }
    : null;

  const mainImage = colorIdx % 2 === 0 ? product.image : product.hover;
  const altImage = colorIdx % 2 === 0 ? product.hover : product.image;
  const fallbackDesc = product.collection.includes("السدو")
    ? "جلد ناعم بنقشة السدو التراثية"
    : product.collection.includes("الإكسسوارات")
    ? "لمسة ذهبية تكمل إطلالتك"
    : product.collection.includes("الهدايا")
    ? "قطعة فاخرة جاهزة للإهداء"
    : "جلد طبيعي بتطريز ذهبي يدوي";
  const desc = product.desc ?? fallbackDesc;

  const handleAdd = () => {
    addItem(
      {
        id: product.name,
        name: product.name,
        price: product.price,
        image: product.image,
        color: product.colors[colorIdx]?.name,
      },
      1
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      <div className="group h-full flex flex-col rounded-[20px] bg-white border border-[#E3D8C8] shadow-[0_2px_10px_rgba(43,33,27,0.06)] md:hover:border-[#B8913A] md:hover:-translate-y-1 md:hover:shadow-[0_12px_28px_rgba(43,33,27,0.12)] transition-all duration-[250ms] ease-out overflow-hidden">
        <div className="relative block aspect-square overflow-hidden bg-[#F6F1E8]">
          <Link href="/product" aria-label={product.name} className="block w-full h-full cursor-pointer">
            <img
              src={mainImage}
              alt={product.name ? `${product.name} - سوق مجاز` : "منتج من سوق مجاز"}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[250ms] ease-out md:group-hover:scale-[1.06]"
            />
            <img
              src={altImage}
              alt={product.name ? `${product.name} - عرض بديل` : "منتج من سوق مجاز"}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-[250ms] ease-out md:group-hover:opacity-100 md:group-hover:scale-[1.06]"
            />
          </Link>

          {pct > 0 && (
            <span
              className={`absolute top-2.5 right-2.5 md:top-3.5 md:right-3.5 text-[11px] md:text-[12px] font-bold px-2 py-1 md:px-2.5 md:py-1.5 rounded-full whitespace-nowrap ${discountBg}`}
            >
              -{pct}%
            </span>
          )}

          <button
            type="button"
            aria-label={wished ? "إزالة من المفضلة" : "أضف إلى المفضلة"}
            onClick={() => toggle(product.name)}
            className="absolute top-2.5 left-2.5 md:top-3.5 md:left-3.5 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-[16px] md:text-[19px] shadow-[0_8px_20px_-12px_rgba(43,33,27,.6)] transition-colors cursor-pointer"
          >
            <i className={wished ? "ri-heart-3-fill text-[#B4552F]" : "ri-heart-3-line text-[#2B211B]"}></i>
          </button>

          {product.stock ? (
            <span className="md:hidden absolute bottom-2.5 right-2.5 text-[10px] font-bold px-2 py-1 rounded-full bg-[#C0392B] text-[#FFFDF9] whitespace-nowrap">
              باقي {product.stock} قطع
            </span>
          ) : null}

          <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 items-center gap-2.5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <button
              type="button"
              aria-label="نظرة سريعة"
              title="نظرة سريعة"
              onClick={() => setQuickOpen(true)}
              className="w-10 h-10 rounded-full bg-white/95 backdrop-blur flex items-center justify-center text-[18px] text-[#2B211B] shadow-[0_8px_20px_-10px_rgba(43,33,27,.7)] hover:text-[#B8913A] transition-colors cursor-pointer"
            >
              <i className="ri-eye-line"></i>
            </button>
            <button
              type="button"
              aria-label="أضف للسلة"
              title="أضف للسلة"
              onClick={handleAdd}
              className={`w-10 h-10 rounded-full ${added ? "bg-[#3F7A4A]" : "bg-[#8A6A4F] hover:bg-[#6F5440]"} flex items-center justify-center text-[18px] text-[#FFFDF9] shadow-[0_8px_20px_-10px_rgba(43,33,27,.7)] transition-colors cursor-pointer ${added ? cartStyles.pop : ""}`}
            >
              <i className={added ? `ri-check-line ${cartStyles.check}` : "ri-shopping-bag-3-line"}></i>
            </button>
          </div>
        </div>

        <div className="flex flex-col flex-1 p-3 md:p-5 text-right">
          <div className="flex items-center justify-start gap-2">
            <span className="min-w-0 text-[11px] md:text-[12px] md:tracking-[0.18em] text-[#C2A06B] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
              {product.collection}
            </span>
            {tag && (
              <span className={`hidden md:inline-flex text-[11px] font-semibold px-2 py-0.5 rounded-full ${tag.cls}`}>
                {tag.label}
              </span>
            )}
          </div>

          <h3 className={`mt-1 md:mt-1.5 text-[14px] md:text-[18px] font-semibold text-[#2B211B] leading-5 md:leading-7 ${cardStyles.name}`}>
            {product.name}
          </h3>

          <p className="hidden md:block mt-1 text-[14px] text-[#8A7B6E] truncate">{desc}</p>

          <div className="mt-1.5 md:mt-2 flex items-center gap-1.5 whitespace-nowrap">
            <span className="md:hidden flex items-center justify-center w-3.5 h-3.5 text-[12px] text-[#D9A94E]">
              <i className="ri-star-fill"></i>
            </span>
            <span className="hidden md:flex">
              <Stars rating={product.rating} />
            </span>
            <span className="text-[12px] md:text-[13px] text-[#8A7B6E] whitespace-nowrap">
              {product.rating} ({product.reviews})
            </span>
          </div>

          <div className="mt-2 md:mt-3 flex items-center justify-between gap-2 md:gap-3">
            <div className="flex items-baseline gap-1.5 md:gap-2 min-w-0">
              <span className="text-[16px] md:text-[20px] font-bold text-[#2B211B] whitespace-nowrap">
                {product.price} ر.س
              </span>
              <span className="hidden min-[380px]:inline md:inline text-[12px] md:text-[14px] text-[#A99C8E] line-through whitespace-nowrap">
                {product.oldPrice} ر.س
              </span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              {product.colors.map((c, i) => (
                <button
                  key={c.name}
                  type="button"
                  aria-label={c.name}
                  title={c.name}
                  onClick={() => setColorIdx(i)}
                  className={`w-5 h-5 rounded-full border transition-all cursor-pointer ${
                    colorIdx === i ? "border-[#C2A06B] ring-2 ring-[#C2A06B]/40" : "border-[#E0D6C8]"
                  }`}
                  style={{ backgroundColor: c.swatch }}
                ></button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex mt-3 border-t border-[#EFE7DB] pt-3 flex-col gap-1.5">
            <span className="flex items-center gap-1.5 text-[13px] text-[#6F6357]">
              <span className="w-4 h-4 flex items-center justify-center text-[#C2A06B]">
                <i className="ri-truck-line"></i>
              </span>
              يصلك خلال 2–4 أيام
            </span>
            <span className="flex items-center gap-1.5 text-[13px] text-[#6F6357]">
              <span className="w-4 h-4 flex items-center justify-center text-[#C2A06B]">
                <i className="ri-gift-line"></i>
              </span>
              تغليف هدية مجاني
            </span>
          </div>

          {product.stock ? (
            <div className="hidden md:flex mt-2.5 items-center gap-1.5 text-[13px] font-semibold text-[#C0392B]">
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-fire-line"></i>
              </span>
              باقي {product.stock} قطع فقط
            </div>
          ) : null}

          <div className="mt-auto pt-3 md:pt-4">
            <button
              type="button"
              onClick={handleAdd}
              className={`w-full h-10 md:h-[46px] rounded-full ${added ? "bg-[#3F7A4A]" : "bg-[#8A6A4F] hover:bg-[#6F5440]"} text-[#FFFDF9] text-[13px] md:text-[15px] font-bold inline-flex items-center justify-center gap-1.5 md:gap-2 transition-colors cursor-pointer whitespace-nowrap ${added ? cartStyles.pop : ""}`}
            >
              <span className="md:hidden w-4 h-4 flex items-center justify-center text-[16px]">
                <i className={added ? `ri-check-line ${cartStyles.check}` : "ri-shopping-cart-2-line"}></i>
              </span>
              <span className="hidden md:flex w-5 h-5 items-center justify-center text-[18px]">
                <i className={added ? `ri-check-line ${cartStyles.check}` : "ri-shopping-bag-3-line"}></i>
              </span>
              {added ? "تمت الإضافة" : "أضف للسلة"}
            </button>

            <a
              href={productInquiryUrl(product.name, product.price)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 flex items-center justify-center gap-1.5 text-[13px] text-[#94742A] hover:text-[#B8913A] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span className="w-4 h-4 flex items-center justify-center text-[15px]">
                <i className="ri-whatsapp-line"></i>
              </span>
              اسأل عن هذا المنتج
            </a>
          </div>
        </div>
      </div>

      {quickOpen && <QuickViewModal product={product} onClose={() => setQuickOpen(false)} />}
    </>
  );
}