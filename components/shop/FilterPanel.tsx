"use client";

import PriceRange from "./PriceRange";
import { MAX_PRICE, colorOptions, collectionOptions, categoryChips } from "@/lib/shopData";
import type { ProductColor } from "@/components/product/ProductCard";

function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="w-full flex items-center justify-between cursor-pointer group"
    >
      <span className="text-[14px] text-[#2B211B] group-hover:text-[#8A6A4F] transition-colors">
        {label}
      </span>
      <span
        className={`relative w-10 h-6 rounded-full transition-colors duration-300 ${
          checked ? "bg-[#8A6A4F]" : "bg-[#E0D6C8]"
        }`}
      >
        <span
          className={`absolute top-0.5 w-5 h-5 rounded-full bg-[#FFFDF9] shadow-sm transition-all duration-300 ${
            checked ? "left-0.5" : "left-[18px]"
          }`}
        ></span>
      </span>
    </button>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="py-5 border-b border-[#EFE7DB] last:border-0">
      <h3 className="font-heading text-[15px] text-[#2B211B] mb-4">{title}</h3>
      {children}
    </div>
  );
}

export default function FilterPanel({
  category,
  onCategory,
  priceMin,
  priceMax,
  onPrice,
  selectedColors,
  onToggleColor,
  selectedCollections,
  onToggleCollection,
  inStock,
  onInStock,
  onSale,
  onSaleChange,
  onReset,
}: {
  category: string;
  onCategory: (c: string) => void;
  priceMin: number;
  priceMax: number;
  onPrice: (min: number, max: number) => void;
  selectedColors: string[];
  onToggleColor: (name: string) => void;
  selectedCollections: string[];
  onToggleCollection: (name: string) => void;
  inStock: boolean;
  onInStock: (v: boolean) => void;
  onSale: boolean;
  onSaleChange: (v: boolean) => void;
  onReset: () => void;
}) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between pb-4 border-b border-[#EFE7DB]">
        <span className="font-heading text-[17px] text-[#2B211B]">الفلاتر</span>
        <button
          type="button"
          onClick={onReset}
          className="text-[13px] text-[#8A6A4F] hover:text-[#6F5440] transition-colors cursor-pointer"
        >
          مسح الكل
        </button>
      </div>

      <Block title="الفئة">
        <div className="flex flex-col gap-3">
          {categoryChips.map((c) => {
            const active = category === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => onCategory(c)}
                className="flex items-center gap-3 cursor-pointer group text-right"
              >
                <span
                  className={`w-[18px] h-[18px] rounded-full border flex items-center justify-center text-[13px] transition-colors ${
                    active ? "bg-[#8A6A4F] border-[#8A6A4F] text-[#FFFDF9]" : "border-[#CFC2B2]"
                  }`}
                >
                  {active && <i className="ri-check-line"></i>}
                </span>
                <span className="text-[14px] text-[#6B5D52] group-hover:text-[#8A6A4F] transition-colors">
                  {c}
                </span>
              </button>
            );
          })}
        </div>
      </Block>

      <Block title="السعر">
        <PriceRange min={0} max={MAX_PRICE} valueMin={priceMin} valueMax={priceMax} onChange={onPrice} />
      </Block>

      <Block title="اللون">
        <div className="flex flex-wrap gap-2.5">
          {colorOptions.map((c: ProductColor) => {
            const active = selectedColors.includes(c.name);
            return (
              <button
                key={c.name}
                type="button"
                onClick={() => onToggleColor(c.name)}
                title={c.name}
                className={`flex items-center gap-2 h-9 ps-2 pe-3 rounded-full border transition-colors cursor-pointer ${
                  active
                    ? "border-[#C2A06B] bg-[#F6EFE2]"
                    : "border-[#E8DFD3] hover:border-[#C2A06B]"
                }`}
              >
                <span
                  className="w-4 h-4 rounded-full border border-[#D8CCBC]"
                  style={{ backgroundColor: c.swatch }}
                ></span>
                <span className="text-[13px] text-[#6B5D52] whitespace-nowrap">{c.name}</span>
              </button>
            );
          })}
        </div>
      </Block>

      <Block title="المجموعة">
        <div className="flex flex-col gap-3">
          {collectionOptions.map((c) => {
            const active = selectedCollections.includes(c);
            return (
              <button
                key={c}
                type="button"
                onClick={() => onToggleCollection(c)}
                className="flex items-center gap-3 cursor-pointer group text-right"
              >
                <span
                  className={`w-[18px] h-[18px] rounded-[5px] border flex items-center justify-center text-[13px] transition-colors ${
                    active ? "bg-[#8A6A4F] border-[#8A6A4F] text-[#FFFDF9]" : "border-[#CFC2B2]"
                  }`}
                >
                  {active && <i className="ri-check-line"></i>}
                </span>
                <span className="text-[14px] text-[#6B5D52] group-hover:text-[#8A6A4F] transition-colors">
                  {c}
                </span>
              </button>
            );
          })}
        </div>
      </Block>

      <Block title="خصائص">
        <div className="flex flex-col gap-4">
          <Toggle checked={inStock} onChange={onInStock} label="متوفر فقط" />
          <Toggle checked={onSale} onChange={onSaleChange} label="عليه خصم" />
        </div>
      </Block>
    </div>
  );
}