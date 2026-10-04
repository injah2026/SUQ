"use client";

import Link from "next/link";
import PaymentLogos from "@/components/product/PaymentLogos";

type Props = {
  subtotal: number;
  giftWrapFee: number;
  discount: number;
  couponLabel: string;
  shipping: number;
  total: number;
};

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between text-[14px]">
      <span className="text-[#8A7B6E]">{label}</span>
      <span className={`font-semibold ${accent ? "text-[#0B3D2E]" : "text-[#2B211B]"}`}>{value}</span>
    </div>
  );
}

export default function OrderSummary({
  subtotal,
  giftWrapFee,
  discount,
  couponLabel,
  shipping,
  total,
}: Props) {
  return (
    <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-6 lg:sticky lg:top-28">
      <h2 className="font-heading text-[20px] font-semibold text-[#2B211B] mb-5">ملخّص الطلب</h2>

      <div className="space-y-3">
        <Row label="المجموع الجزئي" value={`${subtotal} ر.س`} />
        {giftWrapFee > 0 && <Row label="تغليف الهدية" value={`${giftWrapFee} ر.س`} />}
        {discount > 0 && <Row label={couponLabel || "الخصم"} value={`- ${discount} ر.س`} accent />}
        <Row label="الشحن" value={shipping === 0 ? "مجاني" : `${shipping} ر.س`} />
      </div>

      <div className="mt-5 pt-5 border-t border-[#E8DFD3] flex items-center justify-between">
        <span className="text-[16px] font-bold text-[#2B211B]">الإجمالي</span>
        <span className="font-heading text-[26px] font-bold text-[#8A6A4F]">{total} ر.س</span>
      </div>

      <Link
        href="/checkout"
        className="mt-6 w-full h-12 rounded-full bg-[#8A6A4F] text-[#FFFDF9] text-[15px] font-bold inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer hover:bg-[#6F5440] transition-colors"
      >
        <span className="w-5 h-5 flex items-center justify-center text-[18px]">
          <i className="ri-lock-line"></i>
        </span>
        إتمام الطلب
      </Link>

      <div className="mt-4 flex items-center justify-center gap-2 text-[12.5px] text-[#8A7B6E]">
        <span className="w-4 h-4 flex items-center justify-center text-[#C2A06B]">
          <i className="ri-shield-check-line"></i>
        </span>
        دفع آمن ومشفّر بالكامل
      </div>

      <div className="mt-5 pt-5 border-t border-[#E8DFD3]">
        <span className="block text-[12px] text-[#A99C8E] mb-3">طرق الدفع المتاحة</span>
        <PaymentLogos />
      </div>
    </div>
  );
}