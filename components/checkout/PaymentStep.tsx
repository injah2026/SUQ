"use client";

import { paymentMethods } from "@/lib/checkoutData";

export default function PaymentStep({
  value,
  onChange,
  onPay,
  total,
}: {
  value: string;
  onChange: (v: string) => void;
  onPay: () => void;
  total: number;
}) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {paymentMethods.map((m) => {
          const active = value === m.id;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => onChange(m.id)}
              className={`relative flex items-center gap-3 rounded-2xl border p-4 text-right transition-colors cursor-pointer ${
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

              <span className="w-16 h-10 shrink-0 flex items-center justify-center rounded-lg bg-white border border-[#E8DFD3] p-2">
                {m.logo && (
                  <img src={m.logo} alt={m.name} className="w-full h-full object-contain" loading="lazy" decoding="async" />
                )}
              </span>

              <span className="flex-1 min-w-0">
                <span className="block text-[14.5px] font-bold text-[#2B211B] whitespace-nowrap">
                  {m.name}
                </span>
                <span className="block mt-0.5 text-[12.5px] text-[#8A7B6E]">{m.note}</span>
              </span>

              {m.badge && (
                <span className="absolute top-3 end-3 text-[11px] font-bold text-[#0B3D2E] bg-[#E5F0E8] rounded-full px-2.5 py-0.5">
                  {m.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={onPay}
        className="w-full h-14 rounded-full bg-[#0B3D2E] text-[#FFFDF9] text-[17px] font-bold inline-flex items-center justify-center gap-3 whitespace-nowrap cursor-pointer transition-colors hover:bg-[#0f5140]"
      >
        <span className="w-5 h-5 flex items-center justify-center text-[19px]">
          <i className="ri-lock-2-line"></i>
        </span>
        ادفع الآن · {total} ر.س
      </button>

      <p className="flex items-center justify-center gap-2 text-[12.5px] text-[#8A7B6E]">
        <span className="w-4 h-4 flex items-center justify-center text-[15px] text-[#C2A06B]">
          <i className="ri-shield-check-line"></i>
        </span>
        بياناتك محمية بتشفير آمن ولا نحتفظ بمعلومات بطاقتك.
      </p>
    </div>
  );
}