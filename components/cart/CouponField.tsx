"use client";

import { useState } from "react";

type ApplyResult = { ok: boolean; msg: string };

export default function CouponField({
  onApply,
}: {
  onApply: (code: string) => ApplyResult;
}) {
  const [code, setCode] = useState("");
  const [result, setResult] = useState<ApplyResult | null>(null);

  return (
    <div className="rounded-2xl bg-[#FFFDF9] border border-[#E8DFD3] p-5">
      <span className="block text-[14px] font-semibold text-[#2B211B] mb-3">كود الخصم</span>
      <div className="flex gap-2.5">
        <input
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          placeholder="أدخل كود الخصم"
          className="flex-1 h-12 rounded-xl bg-[#FBF8F2] border border-[#E8DFD3] px-4 text-[15px] text-[#2B211B] placeholder:text-[#A99C8E] outline-none focus:border-[#C2A06B] transition-colors"
        />
        <button
          type="button"
          onClick={() => setResult(onApply(code))}
          className="h-12 px-6 rounded-xl bg-[#2B211B] text-[#FFFDF9] text-[14px] font-bold whitespace-nowrap cursor-pointer hover:bg-[#3a2e26] transition-colors"
        >
          تطبيق
        </button>
      </div>
      {result && (
        <p className={`mt-3 text-[13px] ${result.ok ? "text-[#0B3D2E]" : "text-red-600"}`}>
          {result.msg}
        </p>
      )}
    </div>
  );
}