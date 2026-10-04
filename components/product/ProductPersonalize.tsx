export default function ProductPersonalize({
  personalized,
  onTogglePersonal,
  name,
  onName,
  gift,
  onGift,
}: {
  personalized: boolean;
  onTogglePersonal: (v: boolean) => void;
  name: string;
  onName: (v: string) => void;
  gift: boolean;
  onGift: (v: boolean) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      <label className="flex items-start gap-3 cursor-pointer select-none rounded-xl border border-[#E8DFD3] bg-[#FFFDF9] p-3.5">
        <input
          type="checkbox"
          checked={personalized}
          onChange={(e) => onTogglePersonal(e.target.checked)}
          className="mt-0.5 w-5 h-5 accent-[#8A6A4F] cursor-pointer"
        />
        <span className="text-[14px] text-[#2B211B]">
          أضف اسمك بتطريز ذهبي <span className="font-semibold text-[#8A6A4F]">(+30 ر.س)</span>
        </span>
      </label>

      {personalized && (
        <input
          value={name}
          onChange={(e) => onName(e.target.value)}
          maxLength={20}
          placeholder="اكتب الاسم المراد تطريزه"
          className="w-full h-11 rounded-xl border border-[#E8DFD3] bg-[#FFFDF9] px-4 text-[14px] text-[#2B211B] placeholder:text-[#A99C8E] outline-none focus:border-[#C2A06B] transition-colors"
        />
      )}

      <label className="flex items-center gap-3 cursor-pointer select-none rounded-xl border border-[#E8DFD3] bg-[#FFFDF9] p-3.5">
        <input
          type="checkbox"
          checked={gift}
          onChange={(e) => onGift(e.target.checked)}
          className="w-5 h-5 accent-[#8A6A4F] cursor-pointer"
        />
        <span className="text-[14px] text-[#2B211B]">
          تغليف هدية فاخر + بطاقة إهداء <span className="font-semibold text-[#3F7A4A]">(مجانًا)</span>
        </span>
      </label>
    </div>
  );
}