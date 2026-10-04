"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ShopBanner from "./ShopBanner";
import CategoryChips from "./CategoryChips";
import FilterPanel from "./FilterPanel";
import ShopToolbar from "./ShopToolbar";
import ProductCard from "@/components/product/ProductCard";
import Button from "@/components/ui/Button";
import Reveal from "@/components/home/Reveal";
import { categoryChips, categoryMeta, shopProducts, MAX_PRICE } from "@/lib/shopData";

const PAGE = 12;

export default function ShopView() {
  const searchParams = useSearchParams();
  const paramCategory = searchParams.get("category");
  const [category, setCategory] = useState(
    paramCategory && categoryChips.includes(paramCategory) ? paramCategory : "الكل"
  );
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(MAX_PRICE);
  const [colors, setColors] = useState<string[]>([]);
  const [collections, setCollections] = useState<string[]>([]);
  const [inStock, setInStock] = useState(false);
  const [onSale, setOnSale] = useState(false);
  const [sort, setSort] = useState("best");
  const [visible, setVisible] = useState(PAGE);
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    if (paramCategory && categoryChips.includes(paramCategory)) {
      setCategory(paramCategory);
    }
  }, [paramCategory]);

  useEffect(() => {
    setVisible(PAGE);
  }, [category, priceMin, priceMax, colors, collections, inStock, onSale, sort]);

  useEffect(() => {
    document.body.style.overflow = filterOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [filterOpen]);

  const filtered = useMemo(() => {
    const list = shopProducts.filter((p) => {
      if (category !== "الكل" && p.category !== category) return false;
      if (p.price < priceMin || p.price > priceMax) return false;
      if (colors.length && !p.colors.some((c) => colors.includes(c.name))) return false;
      if (collections.length && !collections.includes(p.collection)) return false;
      if (inStock && !(p.stock && p.stock > 0)) return false;
      if (onSale && !(p.oldPrice > p.price)) return false;
      return true;
    });

    return [...list].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "newest") return b.added - a.added;
      return b.sold - a.sold;
    });
  }, [category, priceMin, priceMax, colors, collections, inStock, onSale, sort]);

  const meta = categoryMeta[category] ?? categoryMeta["الكل"];
  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const reset = () => {
    setCategory("الكل");
    setPriceMin(0);
    setPriceMax(MAX_PRICE);
    setColors([]);
    setCollections([]);
    setInStock(false);
    setOnSale(false);
  };

  const filterProps = {
    category,
    onCategory: setCategory,
    priceMin,
    priceMax,
    onPrice: (min: number, max: number) => {
      setPriceMin(min);
      setPriceMax(max);
    },
    selectedColors: colors,
    onToggleColor: (name: string) =>
      setColors((c) => (c.includes(name) ? c.filter((x) => x !== name) : [...c, name])),
    selectedCollections: collections,
    onToggleCollection: (name: string) =>
      setCollections((c) => (c.includes(name) ? c.filter((x) => x !== name) : [...c, name])),
    inStock,
    onInStock: setInStock,
    onSale,
    onSaleChange: setOnSale,
    onReset: reset,
  };

  return (
    <main className="w-full pb-28 md:pb-16 lg:pb-24">
      <ShopBanner title={meta.title} subtitle={meta.subtitle} image={meta.image} />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <CategoryChips categories={categoryChips} active={category} onSelect={setCategory} />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 pb-6">
          <aside className="hidden lg:block w-[260px] shrink-0">
            <FilterPanel {...filterProps} />
          </aside>

          <div className="flex-1 min-w-0">
            <ShopToolbar
              count={filtered.length}
              sort={sort}
              onSort={setSort}
              onOpenFilters={() => setFilterOpen(true)}
            />

            {shown.length > 0 ? (
              <div
                data-product-shop
                className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 items-stretch pt-7"
              >
                {shown.map((p, i) => (
                  <Reveal key={p.name} delay={i * 40} className="h-full">
                    <ProductCard product={p} />
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="py-24 text-center">
                <span className="w-14 h-14 mx-auto flex items-center justify-center rounded-full border border-[#C2A06B]/40 text-2xl text-[#C2A06B]">
                  <i className="ri-search-eye-line"></i>
                </span>
                <p className="mt-5 text-[16px] font-semibold text-[#2B211B]">لا توجد منتجات مطابقة</p>
                <p className="mt-2 text-[14px] text-[#8A7B6E]">جرّب تعديل الفلاتر أو اختيار فئة أخرى.</p>
                <div className="mt-6 flex justify-center">
                  <Button variant="secondary" onClick={reset}>
                    مسح الفلاتر
                  </Button>
                </div>
              </div>
            )}

            {hasMore && (
              <div className="mt-10 lg:mt-12 flex flex-col items-center gap-3">
                <Button variant="secondary" icon="ri-add-line" onClick={() => setVisible((v) => v + PAGE)}>
                  عرض المزيد
                </Button>
                <span className="text-[13px] text-[#8A7B6E]">
                  عرضت {Math.min(visible, filtered.length)} من {filtered.length} منتج
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {filterOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-[#2B211B]/45" onClick={() => setFilterOpen(false)}></div>
          <div className="absolute inset-y-0 right-0 w-[86%] max-w-[360px] bg-[#FFFDF9] shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-5 h-16 border-b border-[#E8DFD3]">
              <h3 className="font-heading text-[18px] text-[#2B211B]">الفلاتر</h3>
              <button
                type="button"
                aria-label="إغلاق"
                onClick={() => setFilterOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full text-xl text-[#2B211B] hover:bg-[#F8F4EE] cursor-pointer"
              >
                <i className="ri-close-line"></i>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-5">
              <FilterPanel {...filterProps} />
            </div>
            <div className="p-5 border-t border-[#E8DFD3]">
              <Button className="w-full" onClick={() => setFilterOpen(false)}>
                عرض النتائج
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}