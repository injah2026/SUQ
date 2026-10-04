"use client";

import { threadColors, fontStyles } from "@/lib/customData";

type Props = {
  thread: string;
  fontKey: string;
  onThread: (name: string) => void;
  onFont: (key: string) => void;
};

export default function StylePicker({ thread, fontKey, onThread, onFont }: Props) {
  return (
    <div className="space-y-7">
      <div>
        <span className="block text-[14px] font-semibold text-[#2B211B] mb-3">لون الخيط</span>
        <div className="flex items-center gap-4 flex-wrap">
          {threadColors.map((t) => (
            <button
              key={t.name}
              type="button"
              onClick={() => onThread(t.name)}
              className="flex flex-col items-center gap-1.5 cursor-pointer"
            >
              <span
                className={`w-9 h-9 rounded-full border-2 transition-all ${
                  thread === t.name
                    ? "border-[#C2A06B] ring-2 ring-[#C2A06B]/30"
                    : "border-[#E3D2AE]"
                }`}
                style={{ backgroundColor: t.hex }}
              ></span>
              <span className="text-[12px] text-[#2B211B]/70">{t.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <span className="block text-[14px] font-semibold text-[#2B211B] mb-3">نمط الخط</span>
        <div className="flex flex-wrap gap-2">
          {fontStyles.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => onFont(f.key)}
              className={`h-[44px] px-5 rounded-full text-[15px] font-semibold border whitespace-nowrap cursor-pointer transition-colors ${
                fontKey === f.key
                  ? "bg-[#8A6A4F] text-[#FFFDF9] border-[#8A6A4F]"
                  : "bg-[#FFFDF9] text-[#2B211B] border-[#E3D2AE] hover:border-[#C2A06B]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}