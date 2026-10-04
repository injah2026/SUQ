"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/home/Reveal";
import Button from "@/components/ui/Button";
import { shopProducts, categoryChips } from "@/lib/shopData";

export default function SearchView() {
  const params = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(params.get("q") ?? "");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return shopProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.collection.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [query]);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.replace(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  const hasQuery = query.trim().length > 0;
  const suggestions = categoryChips.filter((c) => c !== "الكل").slice(0, 6);

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 lg:py-16">
      <form onSubmit={submit} className="max-w-2xl mx-auto">
        <div className="relative">
          <span className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-[18px] text-[#A99C8E]">
            <i className="ri-search-line"></i>
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن حقيبة، مسبحة، كوب، أو مجموعة"
            className="w-full h-14 rounded-full bg-[#FFFDF9] border border-[#E8DFD3] pr-14 pl-16 text-[15px] text-[#2B211B] placeholder:text-[#A99C8E] outline-none focus:border-[#C2A06B] transition-colors shadow-[0_20px_50px_-45px_rgba(43,33,27,.6)]"
          />
          <button
            type="submit"
            className="absolute left-2 top-1/2 -translate-y-1/2 h-11 px-5 rounded-full bg-[#8A6A4F] text-[#FFFDF9] text-[14px] font-semibold whitespace-nowrap cursor-pointer hover:bg-[#6F5440] transition-colors"
          >
            ابحث
          </button>
        </div>
      </form>

      {!hasQuery && (
        <div className="mt-12">
          <h2 className="font-heading text-[22px] font-semibold text-[#2B211B] text-center">
            ابحث في مجموعات مجاز
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setQuery(s)}
                className="h-[44px] px-5 rounded-full bg-[#FFFDF9] border border-[#E8DFD3] text-[14.5px] text-[#8A7B6E] hover:border-[#C2A06B] hover:text-[#8A6A4F] transition-colors cursor-pointer whitespace-nowrap"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {hasQuery && results.length > 0 && (
        <>
          <p className="mt-10 text-[14.5px] text-[#8A7B6E]">
            عرض {results.length} نتيجة عن «{query}»
          </p>
          <div
            data-product-shop
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 items-stretch pt-6"
          >
            {results.map((p, i) => (
              <Reveal key={p.name} delay={i * 40} className="h-full">
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </>
      )}

      {hasQuery && results.length === 0 && (
        <div className="py-24 text-center">
          <span className="w-16 h-16 mx-auto flex items-center justify-center rounded-full border border-[#C2A06B]/40 text-3xl text-[#C2A06B]">
            <i className="ri-search-eye-line"></i>
          </span>
          <p className="mt-6 text-[17px] font-semibold text-[#2B211B]">لا توجد نتائج عن «{query}»</p>
          <p className="mt-2 text-[14.5px] text-[#8A7B6E]">
            جرّب كلمة أخرى، أو تصفّح مجموعاتنا كاملة.
          </p>
          <div className="mt-7 flex justify-center">
            <Link
              href="/shop"
              className="h-[48px] px-7 rounded-full bg-[#8A6A4F] text-[#FFFDF9] text-[15px] font-bold inline-flex items-center justify-center gap-2.5 whitespace-nowrap hover:bg-[#6F5440] transition-colors cursor-pointer"
            >
              ابدأ التسوق
              <span className="w-5 h-5 flex items-center justify-center text-[18px]">
                <i className="ri-arrow-left-line"></i>
              </span>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}