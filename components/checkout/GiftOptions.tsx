"use client";

export type GiftValue = { isGift: boolean; message: string; hidePrice: boolean };

const MAX = 500;

export default function GiftOptions({
  value,
  onChange,
}: {
  value: GiftValue;
  onChange: (v: GiftValue) => void;
}) {
  return (
    <section className="rounded-[24px] border border-[#E8DFD3] bg-[#FFFDF9] p-5 lg:p-6 text-right">
      <button
        type="button"
        onClick={() => onChange({ ...value, isGift: !value.isGift })}
        className="w-full flex items-center gap-3 cursor-pointer"
      >
        <span
          className={`w-6 h-6 rounded-md border flex items-center justify-center text-[15px] transition-colors ${
            value.isGift ? "bg-[#8A6A4F] border-[#8A6A4F] text-[#FFFDF9]" : "border-[#C2A06B]/60 text-transparent"
          }`}
        >
          <i className="ri-check-line"></i>
        </span>
        <span className="w-6 h-6 flex items-center justify-center text-[20px] text-[#C2A06B]">
          <i className="ri-gift-2-line"></i>
        </span>
        <span className="flex-1">
          <span className="block text-[15.5px] font-bold text-[#2B211B]">هذا الطلب هدية</span>
          <span className="block mt-0.5 text-[12.5px] text-[#8A7B6E]">
            نغلّفه بشكل فاخر ونرفق بطاقة إهداء باسمك
          </span>
        </span>
      </button>

      {value.isGift && (
        <div className="mt-5 pt-5 border-t border-[#E8DFD3] space-y-4">
          <label className="block">
            <span className="block mb-2 text-[13.5px] font-semibold text-[#2B211B]">
              رسالة الهدية
            </span>
            <textarea
              value={value.message}
              maxLength={MAX}
              onChange={(e) => onChange({ ...value, message: e.target.value.slice(0, MAX) })}
              rows={3}
              placeholder="اكتب رسالتك هنا.. سنرفقها على بطاقة إهداء أنيقة"
              className="w-full rounded-xl bg-[#FBF8F2] border border-[#E8DFD3] px-4 py-3 text-[14.5px] leading-7 text-[#2B211B] placeholder:text-[#A99C8E] outline-none focus:border-[#C2A06B] transition-colors resize-none"
            ></textarea>
            <span className="mt-1.5 block text-[12px] text-[#A99C8E] text-left">
              {value.message.length}/{MAX}
            </span>
          </label>

          <button
            type="button"
            onClick={() => onChange({ ...value, hidePrice: !value.hidePrice })}
            className="w-full flex items-center gap-3 cursor-pointer"
          >
            <span
              className={`w-6 h-6 rounded-md border flex items-center justify-center text-[15px] transition-colors ${
                value.hidePrice ? "bg-[#8A6A4F] border-[#8A6A4F] text-[#FFFDF9]" : "border-[#C2A06B]/60 text-transparent"
              }`}
            >
              <i className="ri-check-line"></i>
            </span>
            <span className="flex-1 text-[14px] text-[#2B211B]">
              إخفاء السعر من الفاتورة المرفقة
            </span>
          </button>
        </div>
      )}
    </section>
  );
}