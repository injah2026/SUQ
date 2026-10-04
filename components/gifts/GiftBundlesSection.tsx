"use client";

import { useState } from "react";
import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { useCart } from "@/components/cart/CartContext";
import cartStyles from "@/components/cart/cart.module.css";
import { giftBundlesData, type GiftBundleData } from "@/lib/giftsData";

function BundleCard({ bundle }: { bundle: GiftBundleData }) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const savings = bundle.oldPrice - bundle.price;

  return (
    <div className="group h-full flex flex-col rounded-2xl bg-[#F8F4EE] border border-[#E8DFD3] overflow-hidden hover:-translate-y-1 hover:shadow-[0_45px_80px_-45px_rgba(43,33,27,.35)] transition-all duration-500">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={bundle.image}
          alt={bundle.name ? `${bundle.name} - بكج هدايا من سوق مجاز` : "بكج هدايا من سوق مجاز"}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute top-3.5 right-3.5 text-[12px] font-semibold px-3 py-1.5 rounded-full bg-[#C2A06B] text-[#0B3D2E]">
          وفّر {savings} ر.س
        </span>
        <span className="absolute bottom-3.5 right-3.5 text-[12px] font-semibold px-3 py-1.5 rounded-full bg-[#FFFDF9]/95 text-[#2B211B]">
          {bundle.summary}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-5 text-right">
        <h3 className="font-heading text-[19px] font-semibold text-[#2B211B]">{bundle.name}</h3>

        <ul className="mt-3 flex flex-col gap-2">
          {bundle.contents.map((c) => (
            <li key={c} className="flex items-center gap-2 text-[13.5px] text-[#6B5D52]">
              <span className="w-4 h-4 flex items-center justify-center text-[13px] text-[#C2A06B]">
                <i className="ri-checkbox-circle-line"></i>
              </span>
              {c}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-[21px] font-bold text-[#2B211B] whitespace-nowrap">{bundle.price} ر.س</span>
            <span className="text-[14px] text-[#A99C8E] line-through whitespace-nowrap">{bundle.oldPrice} ر.س</span>
          </div>

          <button
            type="button"
            onClick={() => {
              addItem({
                id: bundle.name,
                name: bundle.name,
                price: bundle.price,
                image: bundle.image,
              });
              setAdded(true);
              setTimeout(() => setAdded(false), 1500);
            }}
            className={`mt-4 w-full h-[44px] rounded-full ${added ? "bg-[#3F7A4A]" : "bg-[#8A6A4F] hover:bg-[#6F5440]"} text-[#FFFDF9] text-[15px] font-bold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap ${added ? cartStyles.pop : ""}`}
          >
            <span className="w-5 h-5 flex items-center justify-center text-[18px]">
              <i className={added ? `ri-check-line ${cartStyles.check}` : "ri-shopping-bag-3-line"}></i>
            </span>
            {added ? "تمت الإضافة" : "أضف البكج للسلة"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function GiftBundlesSection() {
  return (
    <section className="w-full bg-[#FFFDF9] border-y border-[#E8DFD3]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <Reveal>
          <div className="text-center mb-10">
            <SectionLabel align="center">جاهزة للإهداء</SectionLabel>
            <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] font-semibold text-[#2B211B]">
              بكجات جاهزة
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-[#6B5D52] max-w-2xl mx-auto">
              نجهّز لك الطقم كامل داخل علبة مجاز الفاخرة مع بطاقة إهداء مذهّبة.
            </p>
          </div>
        </Reveal>

        <div data-product-shop className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {giftBundlesData.map((b, i) => (
            <Reveal key={b.name} delay={i * 70} className="h-full">
              <BundleCard bundle={b} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}