"use client";

import Field from "./Field";

export type ContactValue = { name: string; email: string; phone: string; guest: boolean };

export default function ContactStep({
  value,
  onChange,
  onNext,
}: {
  value: ContactValue;
  onChange: (v: ContactValue) => void;
  onNext: () => void;
}) {
  const valid = value.name.trim() && value.email.trim() && value.phone.trim();

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <Field
            label="الاسم الكامل"
            required
            icon="ri-user-line"
            value={value.name}
            placeholder="اكتب اسمك هنا"
            onChange={(name) => onChange({ ...value, name })}
          />
        </div>
        <Field
          label="البريد الإلكتروني"
          required
          type="email"
          icon="ri-mail-line"
          value={value.email}
          placeholder="name@email.com"
          onChange={(email) => onChange({ ...value, email })}
        />
        <Field
          label="رقم الجوال"
          required
          icon="ri-smartphone-line"
          value={value.phone}
          placeholder="05xxxxxxxx"
          onChange={(phone) => onChange({ ...value, phone })}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { guest: true, icon: "ri-flashlight-line", title: "أكمل كضيف", note: "بدون إنشاء حساب، أسرع طريقة" },
          { guest: false, icon: "ri-user-line", title: "تسجيل الدخول", note: "احفظ بياناتك لطلباتك القادمة" },
        ].map((opt) => {
          const active = value.guest === opt.guest;
          return (
            <button
              key={opt.title}
              type="button"
              onClick={() => onChange({ ...value, guest: opt.guest })}
              className={`flex items-start gap-3 rounded-2xl border p-4 text-right transition-colors cursor-pointer ${
                active ? "border-[#C2A06B] bg-[#FBF8F2]" : "border-[#E8DFD3] bg-white/60 hover:border-[#C2A06B]/60"
              }`}
            >
              <span
                className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                  active ? "border-[#8A6A4F] bg-[#8A6A4F]" : "border-[#C2A06B]/60"
                }`}
              >
                {active && <span className="w-2 h-2 rounded-full bg-[#FFFDF9]"></span>}
              </span>
              <span className="flex-1">
                <span className="flex items-center gap-2 text-[14.5px] font-bold text-[#2B211B]">
                  <span className="w-5 h-5 flex items-center justify-center text-[18px] text-[#C2A06B]">
                    <i className={opt.icon}></i>
                  </span>
                  {opt.title}
                </span>
                <span className="mt-1 block text-[12.5px] text-[#8A7B6E]">{opt.note}</span>
              </span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        disabled={!valid}
        onClick={onNext}
        className="w-full sm:w-auto h-12 px-8 rounded-full bg-[#8A6A4F] text-[#FFFDF9] text-[15px] font-bold whitespace-nowrap cursor-pointer transition-colors hover:bg-[#6F5440] disabled:opacity-40 disabled:cursor-not-allowed"
      >
        متابعة إلى العنوان
      </button>
    </div>
  );
}