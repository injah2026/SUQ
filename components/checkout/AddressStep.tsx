"use client";

import { useState } from "react";
import Field from "./Field";
import { cities } from "@/lib/checkoutData";

export type AddressValue = {
  city: string;
  district: string;
  street: string;
  national: string;
  extra: string;
};

export default function AddressStep({
  value,
  onChange,
  onNext,
}: {
  value: AddressValue;
  onChange: (v: AddressValue) => void;
  onNext: () => void;
}) {
  const [openCity, setOpenCity] = useState(false);
  const valid = value.city && value.district.trim() && value.street.trim() && value.national.trim();

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative text-right">
          <span className="block mb-2 text-[13.5px] font-semibold text-[#2B211B]">
            المدينة<span className="text-[#B4552F]"> *</span>
          </span>
          <button
            type="button"
            onClick={() => setOpenCity((v) => !v)}
            className="w-full h-12 rounded-xl bg-[#FBF8F2] border border-[#E8DFD3] ps-4 pe-10 text-[15px] text-right outline-none focus:border-[#C2A06B] cursor-pointer transition-colors"
          >
            <span className={value.city ? "text-[#2B211B]" : "text-[#A99C8E]"}>
              {value.city || "اختر المدينة"}
            </span>
            <span className="absolute bottom-3 end-4 w-5 h-5 flex items-center justify-center text-[18px] text-[#A99C8E] pointer-events-none">
              <i className="ri-arrow-down-s-line"></i>
            </span>
          </button>

          {openCity && (
            <ul className="absolute z-20 mt-2 w-full max-h-60 overflow-auto rounded-xl bg-[#FFFDF9] border border-[#E8DFD3] shadow-lg py-1.5">
              {cities.map((c) => (
                <li key={c}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange({ ...value, city: c });
                      setOpenCity(false);
                    }}
                    className={`w-full text-right px-4 py-2.5 text-[14.5px] cursor-pointer transition-colors hover:bg-[#F6F1E8] ${
                      value.city === c ? "text-[#8A6A4F] font-semibold" : "text-[#2B211B]"
                    }`}
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Field
          label="الحي"
          required
          icon="ri-community-line"
          value={value.district}
          placeholder="مثال: حي الملقا"
          onChange={(district) => onChange({ ...value, district })}
        />
        <div className="sm:col-span-2">
          <Field
            label="الشارع"
            required
            icon="ri-road-map-line"
            value={value.street}
            placeholder="مثال: طريق الأمير محمد بن سلمان"
            onChange={(street) => onChange({ ...value, street })}
          />
        </div>
        <Field
          label="العنوان الوطني"
          required
          icon="ri-map-pin-2-line"
          value={value.national}
          placeholder="مثال: RRRD2929"
          onChange={(national) => onChange({ ...value, national })}
        />
        <Field
          label="الرقم الإضافي"
          icon="ri-hashtag"
          value={value.extra}
          placeholder="مثال: 1234"
          onChange={(extra) => onChange({ ...value, extra })}
        />
      </div>

      <p className="flex items-center gap-2 text-[12.5px] text-[#8A7B6E]">
        <span className="w-4 h-4 flex items-center justify-center text-[16px] text-[#C2A06B]">
          <i className="ri-information-line"></i>
        </span>
        العنوان الوطني يساعدنا في توصيل طلبك بدقة وبأسرع وقت.
      </p>

      <button
        type="button"
        disabled={!valid}
        onClick={onNext}
        className="w-full sm:w-auto h-12 px-8 rounded-full bg-[#8A6A4F] text-[#FFFDF9] text-[15px] font-bold whitespace-nowrap cursor-pointer transition-colors hover:bg-[#6F5440] disabled:opacity-40 disabled:cursor-not-allowed"
      >
        متابعة إلى الشحن
      </button>
    </div>
  );
}