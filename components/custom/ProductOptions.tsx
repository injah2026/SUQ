"use client";

import type { CustomProduct } from "@/lib/customData";

type Props = {
  products: CustomProduct[];
  value: string;
  onChange: (id: string) => void;
};

export default function ProductOptions({ products, value, onChange }: Props) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {products.map((p) => {
        const active = value === p.id;
        return (
          <button
            key={p.id}
            type="button"
            onClick={() => onChange(p.id)}
            className={`text-right rounded-2xl overflow-hidden border bg-[#FFFDF9] cursor-pointer transition-all ${
              active
                ? "border-[#C2A06B] ring-2 ring-[#C2A06B]/25 shadow-[0_20px_40px_-30px_rgba(43,33,27,.6)]"
                : "border-[#E8DFD3] hover:border-[#C2A06B]/70"
            }`}
          >
            <div className="relative aspect-square overflow-hidden">
              <img src={p.image} alt={p.name ? `${p.name} - سوق مجاز` : "خيار تصميم من سوق مجاز"} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              {active && (
                <span className="absolute top-2 left-2 w-6 h-6 flex items-center justify-center rounded-full bg-[#8A6A4F] text-[#FFFDF9] text-[14px]">
                  <i className="ri-check-line"></i>
                </span>
              )}
            </div>
            <div className="p-3">
              <span className="block text-[13px] lg:text-[14px] font-semibold text-[#2B211B]">
                {p.name}
              </span>
              <span className="mt-1 block text-[12px] text-[#8A6A4F] font-bold">
                {p.price} ر.س
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}