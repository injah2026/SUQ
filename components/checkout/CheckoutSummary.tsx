"use client";

import { useCart } from "@/components/cart/CartContext";
import CouponField from "@/components/cart/CouponField";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/cartData";

type Props = {
  giftWrapFee: number;
  discount: number;
  couponLabel: string;
  shipping: number;
  vat: number;
  total: number;
  onApplyCoupon: (code: string) => { ok: boolean; msg: string };
  onPay: () => void;
};

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between text-[14px]">
      <span className="text-[#8A7B6E]">{label}</span>
      <span className={`font-semibold ${accent ? "text-[#0B3D2E]" : "text-[#2B211B]"}`}>{value}</span>
    </div>
  );
}

export default function CheckoutSummary({
  giftWrapFee,
  discount,
  couponLabel,
  shipping,
  vat,
  total,
  onApplyCoupon,
  onPay,
}: Props) {
  const { items, subtotal, count } = useCart();
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-6 lg:sticky lg:top-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-heading text-[20px] font-semibold text-[#2B211B]">ملخّص الطلب</h2>
        <span className="text-[13px] font-bold text-[#FFFDF9] bg-[#C2A06B] rounded-full px-3 py-1">
          {count} قطعة
        </span>
      </div>

      <ul className="flex flex-col divide-y divide-[#EFE3CC] mb-5 max-h-[280px] overflow-auto no-scrollbar">
        {items.map((item) => (
          <li key={item.id} className="py-3.5 first:pt-0 flex items-center gap-3">
            <span className="relative w-14 h-16 rounded-xl overflow-hidden bg-[#F6F1E8] shrink-0">
              <img src={item.image} alt={item.name ? `${item.name} - سوق مجاز` : "منتج من سوق مجاز"} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              <span className="absolute -top-1 -end-1 w-5 h-5 rounded-full bg-[#2B211B] text-[#FFFDF9] text-[11px] font-bold flex items-center justify-center">
                {item.qty}
              </span>
            </span>
            <span className="flex-1 min-w-0 text-right">
              <span className="block text-[13.5px] font-semibold text-[#2B211B] leading-6 truncate">
                {item.name}
              </span>
              {item.color && <span className="block text-[12px] text-[#8A7B6E]">{item.color}</span>}
            </span>
            <span className="text-[14px] font-bold text-[#2B211B] whitespace-nowrap">
              {item.price * item.qty} ر.س
            </span>
          </li>
        ))}
      </ul>

      <div className="mb-5">
        <CouponField onApply={onApplyCoupon} />
      </div>

      <div className="space-y-3">
        <Row label="المجموع الجزئي" value={`${subtotal} ر.س`} />
        {giftWrapFee > 0 && <Row label="تغليف الهدية" value={`${giftWrapFee} ر.س`} />}
        {discount > 0 && <Row label={couponLabel || "الخصم"} value={`- ${discount} ر.س`} accent />}
        <Row label="الشحن" value={shipping === 0 ? "مجاني" : `${shipping} ر.س`} />
        <Row label="ضريبة القيمة المضافة (15%)" value={`${vat} ر.س`} />
      </div>

      <div className="mt-5 pt-5 border-t border-[#E8DFD3] flex items-center justify-between">
        <span className="text-[16px] font-bold text-[#2B211B]">الإجمالي</span>
        <span className="font-heading text-[26px] font-bold text-[#8A6A4F]">{total} ر.س</span>
      </div>

      {remaining > 0 && (
        <p className="mt-4 flex items-center gap-2 text-[12.5px] text-[#8A7B6E]">
          <span className="w-4 h-4 flex items-center justify-center text-[15px] text-[#C2A06B]">
            <i className="ri-truck-line"></i>
          </span>
          باقي {remaining} ر.س على الشحن المجاني
        </p>
      )}

      <button
        type="button"
        onClick={onPay}
        className="mt-6 w-full h-14 rounded-full bg-[#0B3D2E] text-[#FFFDF9] text-[16px] font-bold inline-flex items-center justify-center gap-3 whitespace-nowrap cursor-pointer transition-colors hover:bg-[#0f5140]"
      >
        <span className="w-5 h-5 flex items-center justify-center text-[19px]">
          <i className="ri-lock-2-line"></i>
        </span>
        ادفع الآن
      </button>

      <div className="mt-4 flex items-center justify-center gap-2 text-[12.5px] text-[#8A7B6E]">
        <span className="w-4 h-4 flex items-center justify-center text-[15px] text-[#C2A06B]">
          <i className="ri-shield-check-line"></i>
        </span>
        دفع آمن ومشفّر بالكامل
      </div>
    </div>
  );
}