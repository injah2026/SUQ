"use client";

import { shippingMethods } from "@/lib/checkoutData";

export default function ShippingStep({
  value,
  onChange,
  onNext,
  freeShip,
}: {
  value: string;
  onChange: (v: string) => void;
  onNext: () => void;
  freeShip: boolean;
}) {
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        {shippingMethods.map((m) => {
          const active = value === m.id;
          const free = m.id === "pickup" || freeShip;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => onChange(m.id)}
              className={`w-full flex items-center gap-4 rounded-2xl border p-4 text-right transition-colors cursor-pointer ${
                active ? "border-[#C2A06B] bg-[#FBF8F2]" : "border-[#E8DFD3] bg-white/60 hover:border-[#C2A06B]/60"
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                  active ? "border-[#8A6A4F] bg-[#8A6A4F]" : "border-[#C2A06B]/60"
                }`}
              >
                {active && <span className="w-2 h-2 rounded-full bg-[#FFFDF9]"></span>}
              </span>
              <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#F1F6F2] text-[22px] text-[#0B3D2E] shrink-0">
                <i className={m.icon}></i>
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-[15px] font-bold text-[#2B211B]">{m.name}</span>
                <span className="block mt-0.5 text-[13px] text-[#8A7B6E]">{m.eta}</span>
              </span>
              <span className="text-[15px] font-bold whitespace-nowrap text-[#8A6A4F]">
                {free ? "مجاني" : `${m.fee} ر.س`}
              </span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={onNext}
        className="w-full sm:w-auto h-12 px-8 rounded-full bg-[#8A6A4F] text-[#FFFDF9] text-[15px] font-bold whitespace-nowrap cursor-pointer transition-colors hover:bg-[#6F5440]"
      >
        متابعة إلى الدفع
      </button>
    </div>
  );
}