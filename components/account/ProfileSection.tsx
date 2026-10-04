"use client";

import { useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";

const notifOptions = [
  { id: "offers", label: "العروض والتخفيضات", note: "أخبار العروض الحصرية أول بأول" },
  { id: "orders", label: "تحديثات الطلبات", note: "حالة طلبك وشحنه خطوة بخطوة" },
  { id: "points", label: "نقاط مجاز", note: "تنبيه عند إضافة أو استبدال النقاط" },
  { id: "whatsapp", label: "رسائل واتساب", note: "توصيل سريع عبر واتساب" },
];

export default function ProfileSection() {
  const { user, loginUser, logout } = useAuth();
  const [name, setName] = useState(user?.name ?? "");
  const [phone, setPhone] = useState(user?.phone ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [birthdate, setBirthdate] = useState(user?.birthdate ?? "");
  const [notif, setNotif] = useState<Record<string, boolean>>({
    offers: true,
    orders: true,
    points: true,
    whatsapp: false,
  });
  const [saved, setSaved] = useState(false);

  function save() {
    loginUser({ name: name || "ضيف مجاز", phone, email, birthdate });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-6 lg:p-7">
        <h2 className="font-heading text-[19px] font-semibold text-[#2B211B] mb-5">البيانات الشخصية</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="الاسم" value={name} onChange={setName} placeholder="اسمك الكامل" />
          <Field label="رقم الجوال" value={phone} onChange={setPhone} placeholder="05xxxxxxxx" />
          <Field label="البريد الإلكتروني" value={email} onChange={setEmail} placeholder="name@email.com" type="email" />
          <Field label="تاريخ الميلاد" value={birthdate} onChange={setBirthdate} placeholder="لنفاجئك بهدية في يومك" />
        </div>
      </div>

      <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-6 lg:p-7">
        <h2 className="font-heading text-[19px] font-semibold text-[#2B211B] mb-5">تفضيلات الإشعارات</h2>
        <div className="space-y-3">
          {notifOptions.map((o) => (
            <label
              key={o.id}
              className="flex items-center justify-between gap-4 rounded-2xl bg-[#FBF8F2] border border-[#EFE3CC] px-4 py-3.5 cursor-pointer"
            >
              <span>
                <span className="block text-[14.5px] font-semibold text-[#2B211B]">{o.label}</span>
                <span className="mt-0.5 block text-[12.5px] text-[#8A7B6E]">{o.note}</span>
              </span>
              <input
                type="checkbox"
                checked={!!notif[o.id]}
                onChange={(e) => setNotif({ ...notif, [o.id]: e.target.checked })}
                className="w-5 h-5 accent-[#0B3D2E] shrink-0"
              />
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={save}
          className="h-12 px-8 rounded-full bg-[#8A6A4F] text-[#FFFDF9] text-[15px] font-bold inline-flex items-center gap-2 whitespace-nowrap cursor-pointer hover:bg-[#6F5440] transition-colors"
        >
          <span className="w-5 h-5 flex items-center justify-center text-[18px]">
            <i className={saved ? "ri-check-line" : "ri-save-3-line"}></i>
          </span>
          {saved ? "تم الحفظ" : "حفظ التغييرات"}
        </button>
        <button
          type="button"
          onClick={logout}
          className="h-12 px-8 rounded-full border-[1.5px] border-[#B4552F] text-[#B4552F] text-[15px] font-bold inline-flex items-center gap-2 whitespace-nowrap cursor-pointer hover:bg-[#B4552F] hover:text-[#FFFDF9] transition-colors"
        >
          <span className="w-5 h-5 flex items-center justify-center text-[18px]">
            <i className="ri-logout-box-r-line"></i>
          </span>
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[13.5px] font-semibold text-[#2B211B]">{label}</span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 rounded-xl border border-[#E0D6C8] bg-white px-4 text-[14px] text-[#2B211B] outline-none focus:border-[#C2A06B] transition-colors"
      />
    </label>
  );
}