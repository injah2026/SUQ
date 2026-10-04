"use client";

import Button from "@/components/ui/Button";
import cartStyles from "@/components/cart/cart.module.css";

type Props = {
  productName: string;
  basePrice: number;
  embroideryFee: number;
  fontExtra: number;
  total: number;
  canAdd: boolean;
  added: boolean;
  onAdd: () => void;
};

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-[14px]">
      <span className="text-[#8A7B6E]">{label}</span>
      <span className="text-[#2B211B] font-semibold">{value} ر.س</span>
    </div>
  );
}

export default function PriceSummary({
  productName,
  basePrice,
  embroideryFee,
  fontExtra,
  total,
  canAdd,
  added,
  onAdd,
}: Props) {
  return (
    <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-6">
      <h3 className="font-heading text-[18px] font-semibold text-[#2B211B] mb-4">ملخّص السعر</h3>
      <div className="space-y-3">
        <Row label={productName} value={String(basePrice)} />
        <Row label="التطريز اليدوي" value={String(embroideryFee)} />
        {fontExtra > 0 && <Row label="الخط الإنجليزي" value={String(fontExtra)} />}
      </div>
      <div className="mt-4 pt-4 border-t border-[#E8DFD3] flex items-center justify-between">
        <span className="text-[15px] font-bold text-[#2B211B]">الإجمالي</span>
        <span className="font-heading text-[24px] font-bold text-[#8A6A4F]">{total} ر.س</span>
      </div>

      <div className="mt-5">
        {added ? (
          <button
            type="button"
            className={`w-full h-[48px] px-7 rounded-full bg-[#3F7A4A] text-[#FFFDF9] text-[15px] font-bold inline-flex items-center justify-center gap-2.5 whitespace-nowrap ${cartStyles.pop}`}
          >
            <span className="w-5 h-5 flex items-center justify-center text-[18px]">
              <i className={`ri-check-line ${cartStyles.check}`}></i>
            </span>
            تمت الإضافة
          </button>
        ) : (
          <Button
            icon={canAdd ? "ri-shopping-bag-3-line" : "ri-pencil-line"}
            className={`w-full ${!canAdd ? "opacity-50 pointer-events-none" : ""}`}
            onClick={onAdd}
          >
            أضف للسلة بتصميمك
          </Button>
        )}
      </div>
      <p className="mt-3 text-center text-[13px] text-[#8A7B6E]">
        {canAdd ? "سيتم تأكيد التفاصيل معك قبل التنفيذ" : "اكتب الاسم أولًا لإتمام الإضافة"}
      </p>
    </div>
  );
}