"use client";

import { useState } from "react";

export type NewUserValue = { name: string; email: string; birthdate: string };

const inputCls =
  "w-full h-[52px] rounded-xl border border-[#E8DFD3] bg-[#FBF8F2] px-4 text-[15px] text-[#2B211B] placeholder:text-[#A99C8E] outline-none focus:border-[#C2A06B] transition-colors";

export default function NewUserForm({
  value,
  onChange,
  onSubmit,
}: {
  value: NewUserValue;
  onChange: (v: NewUserValue) => void;
  onSubmit: () => void;
}) {
  const [touched, setTouched] = useState(false);
  const valid = value.name.trim().length >= 2;

  return (
    <div className="text-right">
      <span className="inline-flex items-center gap-2 rounded-full bg-[#E5F0E8] px-4 h-8 text-[13px] font-semibold text-[#0B3D2E]">
        <span className="w-4 h-4 flex items-center justify-center text-[16px]">
          <i className="ri-sparkling-2-line"></i>
        </span>
        حساب جديد
      </span>

      <h1 className="mt-5 font-heading text-[30px] lg:text-[36px] font-semibold text-[#2B211B]">
        خلّينا نتعرّف عليك
      </h1>
      <p className="mt-3 text-[14.5px] leading-7 text-[#8A7B6E]">
        خطوة أخيرة بسيطة ونكون جاهزين لخدمتك.
      </p>

      <div className="mt-8 space-y-4">
        <label className="block">
          <span className="mb-2 block text-[13.5px] font-semibold text-[#2B211B]">
            الاسم<span className="text-[#B4552F]"> *</span>
          </span>
          <input
            value={value.name}
            onChange={(e) => onChange({ ...value, name: e.target.value })}
            placeholder="اكتب اسمك هنا"
            className={inputCls}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-[13.5px] font-semibold text-[#2B211B]">
            البريد الإلكتروني <span className="text-[12px] font-normal text-[#A99C8E]">(اختياري)</span>
          </span>
          <input
            type="email"
            value={value.email}
            onChange={(e) => onChange({ ...value, email: e.target.value })}
            placeholder="name@email.com"
            className={inputCls}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-[13.5px] font-semibold text-[#2B211B]">
            تاريخ الميلاد <span className="text-[12px] font-normal text-[#A99C8E]">(اختياري)</span>
          </span>
          <input
            type="date"
            value={value.birthdate}
            onChange={(e) => onChange({ ...value, birthdate: e.target.value })}
            className={`${inputCls} text-right`}
          />
          <span className="mt-2 flex items-center gap-2 text-[12.5px] text-[#8A6A4F]">
            <span className="w-4 h-4 flex items-center justify-center text-[16px]">
              <i className="ri-gift-2-line"></i>
            </span>
            لنفاجئك بهدية في يومك
          </span>
        </label>
      </div>

      {touched && !valid && (
        <p className="mt-4 text-[13px] text-[#B4552F]">الرجاء إدخال الاسم للمتابعة</p>
      )}

      <button
        type="button"
        onClick={() => {
          setTouched(true);
          if (valid) onSubmit();
        }}
        className="mt-7 w-full h-[52px] rounded-full bg-[#0B3D2E] text-[#FFFDF9] text-[15px] font-bold whitespace-nowrap cursor-pointer transition-colors hover:bg-[#0f5140]"
      >
        إنشاء حسابي
      </button>

      <p className="mt-6 text-center text-[12.5px] leading-6 text-[#A99C8E]">
        بياناتك محفوظة بأمان ولن نشاركها مع أي طرف آخر.
      </p>
    </div>
  );
}