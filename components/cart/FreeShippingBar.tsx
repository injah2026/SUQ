import { FREE_SHIPPING_THRESHOLD } from "@/lib/cartData";

export default function FreeShippingBar({ subtotal }: { subtotal: number }) {
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const done = remaining === 0;

  return (
    <div className="rounded-2xl bg-[#FBF8F2] border border-[#EFE3CC] px-4 py-3.5">
      <p className="flex items-center gap-2 text-[13.5px] text-[#2B211B] text-right">
        <span className="w-5 h-5 flex items-center justify-center text-[18px] text-[#C2A06B] shrink-0">
          <i className={done ? "ri-checkbox-circle-fill" : "ri-truck-line"}></i>
        </span>
        {done ? (
          <span className="font-semibold">حصلت على الشحن المجاني ✦</span>
        ) : (
          <span>
            باقي <span className="font-bold text-[#8A6A4F]">{remaining} ر.س</span> على الشحن المجاني
          </span>
        )}
      </p>
      <div className="mt-3 h-1.5 w-full rounded-full bg-[#E8DFD3] overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-l from-[#C2A06B] to-[#8A6A4F] transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}