"use client";

import { useState } from "react";
import type { Address } from "@/lib/accountData";

const empty: Omit<Address, "id"> = {
  label: "المنزل",
  name: "",
  phone: "",
  city: "",
  district: "",
  street: "",
  national: "",
  isDefault: false,
};

const fields: { key: keyof typeof empty; label: string; placeholder: string }[] = [
  { key: "label", label: "اسم العنوان", placeholder: "المنزل / العمل" },
  { key: "name", label: "الاسم الكامل", placeholder: "الاسم" },
  { key: "phone", label: "رقم الجوال", placeholder: "05xxxxxxxx" },
  { key: "city", label: "المدينة", placeholder: "الرياض" },
  { key: "district", label: "الحي", placeholder: "حي الملقا" },
  { key: "street", label: "الشارع", placeholder: "طريق أنس بن مالك" },
  { key: "national", label: "العنوان الوطني", placeholder: "13527" },
];

export default function AddressFormModal({
  initial,
  onClose,
  onSave,
}: {
  initial?: Address;
  onClose: () => void;
  onSave: (data: Omit<Address, "id">, id?: string) => void;
}) {
  const [form, setForm] = useState<Omit<Address, "id">>(initial ?? empty);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="relative w-full max-w-lg rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-6 lg:p-7 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-[20px] font-semibold text-[#2B211B]">
            {initial ? "تعديل العنوان" : "إضافة عنوان جديد"}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center text-[22px] text-[#8A7B6E] hover:text-[#2B211B] cursor-pointer"
            aria-label="إغلاق"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {fields.map((f) => (
            <label key={f.key} className={`flex flex-col gap-2 ${f.key === "street" ? "sm:col-span-2" : ""}`}>
              <span className="text-[13.5px] font-semibold text-[#2B211B]">{f.label}</span>
              <input
                type="text"
                value={form[f.key] as string}
                placeholder={f.placeholder}
                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                className="h-12 rounded-xl border border-[#E0D6C8] bg-white px-4 text-[14px] text-[#2B211B] outline-none focus:border-[#C2A06B] transition-colors"
              />
            </label>
          ))}
        </div>

        <label className="mt-4 flex items-center gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={form.isDefault}
            onChange={(e) => setForm({ ...form, isDefault: e.target.checked })}
            className="w-4 h-4 accent-[#0B3D2E]"
          />
          <span className="text-[14px] text-[#5c5349]">تعيين كعنوان افتراضي</span>
        </label>

        <div className="mt-7 flex items-center gap-3">
          <button
            type="button"
            onClick={() => onSave(form, initial?.id)}
            className="flex-1 h-12 rounded-full bg-[#8A6A4F] text-[#FFFDF9] text-[15px] font-bold whitespace-nowrap cursor-pointer hover:bg-[#6F5440] transition-colors"
          >
            حفظ العنوان
          </button>
          <button
            type="button"
            onClick={onClose}
            className="h-12 px-6 rounded-full border-[1.5px] border-[#2B211B] text-[#2B211B] text-[15px] font-bold whitespace-nowrap cursor-pointer hover:bg-[#2B211B] hover:text-[#FFFDF9] transition-colors"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
}