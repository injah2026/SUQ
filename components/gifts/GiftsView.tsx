"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ProductCard from "@/components/product/ProductCard";
import GiftsHero from "./GiftsHero";
import GiftShortcuts from "./GiftShortcuts";
import GiftBundlesSection from "./GiftBundlesSection";
import GiftFinder from "./GiftFinder";
import GiftWrapping from "./GiftWrapping";
import { filterGifts, giftFilterLabels, type GiftFilterKey } from "@/lib/giftsData";

const validKeys: GiftFilterKey[] = ["all", "ready", "him", "her", "under200"];

export default function GiftsView() {
  const searchParams = useSearchParams();
  const param = searchParams.get("filter");
  const [active, setActive] = useState<GiftFilterKey>(
    param && validKeys.includes(param as GiftFilterKey) ? (param as GiftFilterKey) : "all"
  );

  useEffect(() => {
    if (param && validKeys.includes(param as GiftFilterKey)) {
      setActive(param as GiftFilterKey);
    }
  }, [param]);

  const products = filterGifts(active);

  const select = (key: GiftFilterKey) => {
    setActive(key);
    document.getElementById("gift-products")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="w-full pb-24 md:pb-0">
      <GiftsHero />

      <GiftShortcuts active={active} onSelect={select} />

      <section id="gift-products" className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-9">
            <div>
              <SectionLabel>اختياراتنا</SectionLabel>
              <h2 className="mt-0 font-heading text-[24px] lg:text-[32px] font-semibold text-[#2B211B]">
                {giftFilterLabels[active]}
              </h2>
              <p className="mt-2 text-[14px] text-[#8A7B6E]">{products.length} منتج</p>
            </div>
            {active !== "all" && (
              <button
                type="button"
                onClick={() => setActive("all")}
                className="text-[14px] font-semibold text-[#8A6A4F] hover:text-[#6F5440] transition-colors cursor-pointer whitespace-nowrap"
              >
                إظهار كل الهدايا
              </button>
            )}
          </div>
        </Reveal>

        <div data-product-shop className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 items-stretch">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 40} className="h-full">
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <GiftBundlesSection />

      <GiftFinder />

      <GiftWrapping />
    </main>
  );
}