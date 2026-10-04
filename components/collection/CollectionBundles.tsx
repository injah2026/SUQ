"use client";

import { useState } from "react";
import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { useCart } from "@/components/cart/CartContext";
import cartStyles from "@/components/cart/cart.module.css";
import type { Bundle } from "@/lib/collectionData";

function BundleCard({ bundle }: { bundle: Bundle }) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  return (
    <div className="group h-full flex flex-col rounded-2xl bg-[#FFFDF9] border border-[#E8DFD3] overflow-hidden hover:-translate-y-1 hover:shadow-[0_45px_80px_-45px_rgba(43,33,27,.35)] transition-all duration-500">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={bundle.image}
          alt={bundle.name ? `${bundle.name} - بكج موفّر من سوق مجاز` : "بكج موفّر من سوق مجاز"}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute top-3.5 right-3.5 text-[12px] font-semibold px-3 py-1.5 rounded-full bg-[#C2A06B] text-[#0B3D2E]">
          بكج موفّر
        </span>
      </div>
      <div className="flex flex-col flex-1 p-5 text-right">
        <h3 className="font-heading text-[18px] font-semibold text-[#2B211B]">{bundle.name}</h3>
        <ul className="mt-3 flex flex-col gap-2">
          {bundle.contents.map((c) => (
            <li key={c} className="flex items-center gap-2 text-[13px] text-[#6B5D52]">
              <span className="w-3.5 h-3.5 flex items-center justify-center text-[12px] text-[#C2A06B]">
                <i className="ri-checkbox-circle-line"></i>
              </span>
              {c}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-4">
          <div className="text-[20px] font-bold text-[#2B211B]">{bundle.price} ر.س</div>
          <button
            type="button"
            onClick={() => {
              addItem({ id: bundle.name, name: bundle.name, price: bundle.price, image: bundle.image });
              setAdded(true);
              setTimeout(() => setAdded(false), 1500);
            }}
            className={`mt-3 w-full h-[44px] rounded-full ${added ? "bg-[#3F7A4A]" : "bg-[#8A6A4F] hover:bg-[#6F5440]"} text-[#FFFDF9] text-[15px] font-bold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap ${added ? cartStyles.pop : ""}`}
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

export default function CollectionBundles({ bundles }: { bundles: Bundle[] }) {
  return (
    <section className="w-full bg-[#FFFDF9] border-y border-[#E8DFD3]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <Reveal>
          <div className="text-center mb-10">
            <SectionLabel align="center">بكجات جاهزة</SectionLabel>
            <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] font-semibold text-[#2B211B]">
              اكمل إطلالتك
            </h2>
          </div>
        </Reveal>

        <div data-product-shop className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
          {bundles.map((b, i) => (
            <Reveal key={b.name} delay={i * 80} className="h-full">
              <BundleCard bundle={b} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}