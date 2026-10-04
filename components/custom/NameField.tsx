"use client";

import { fontStyles } from "@/lib/customData";

type Props = {
  value: string;
  onChange: (v: string) => void;
  fontKey: string;
};

export default function NameField({ value, onChange, fontKey }: Props) {
  const activeFont = fontStyles.find((f) => f.key === fontKey)?.cls ?? "font-heading";

  return (
    <div>
      <input
        value={value}
        maxLength={12}
        onChange={(e) => onChange(e.target.value.slice(0, 12))}
        placeholder="اكتب الاسم أو الحروف"
        className="w-full h-[52px] rounded-2xl bg-[#FBF8F2] border border-[#E3D2AE] px-5 text-[16px] text-[#2B211B] placeholder:text-[#A99C8E] focus:outline-none focus:border-[#C2A06B] transition-colors"
      />
      <div className="mt-3 flex items-center justify-between">
        <span className="text-[12px] text-[#A99C8E]">{value.length}/12 حرفًا</span>
        {value.trim() && (
          <span className={`text-[15px] text-[#8A6A4F] ${activeFont}`}>{value}</span>
        )}
      </div>
    </div>
  );
}