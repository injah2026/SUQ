"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { occasionOptions, budgetOptions } from "@/lib/corporateData";

const field =
  "w-full h-12 rounded-xl bg-[#FFFDF9] border border-[#E8DFD3] px-5 text-[15px] text-[#2B211B] placeholder:text-[#A99C8E] outline-none focus:border-[#C2A06B] transition-colors";
const labelCls = "block text-[13px] font-semibold text-[#2B211B] mb-2";

export default function CorporateForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");
  const [fileName, setFileName] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const hp = String(fd.get("website_alt") ?? "").trim();
    if (hp) {
      form.reset();
      setFileName("");
      setStatus("success");
      setMsg("تم إرسال طلبك، سنتواصل معك قريبًا");
      return;
    }
    fd.delete("website_alt");
    const body = new URLSearchParams();
    fd.forEach((v, k) => {
      body.append(k, v instanceof File ? "Uncollectable" : String(v));
    });
    setStatus("loading");
    setMsg("");
    try {
      const res = await fetch("https://readdy.ai/api/form/db18cbuoc082o2i1kaag", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      const responseText = await res.text();
      let parsed: any = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }
      const serverMsg =
        parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText;
      const isSpam = typeof serverMsg === "string" && serverMsg.toLowerCase().includes("spam");
      if (!res.ok || parsed?.code !== "OK" || isSpam) {
        setStatus("error");
        setMsg(serverMsg || "تعذر الإرسال، حاول مرة أخرى");
        return;
      }
      form.reset();
      setFileName("");
      setStatus("success");
      setMsg("تم استلام طلبك، سنوافيك بعرض سعر خلال يوم عمل");
    } catch {
      setStatus("error");
      setMsg("تعذر الاتصال، حاول مرة أخرى");
    }
  }

  return (
    <div
      id="corporate-form"
      className="w-full rounded-[28px] bg-[#FFFDF9] border border-[#E8DFD3] shadow-[0_40px_80px_-60px_rgba(43,33,27,.4)] p-8 lg:p-12"
    >
      <SectionLabel>عرض مخصص</SectionLabel>
      <h3 className="mt-0 font-heading text-[26px] lg:text-[34px] font-semibold text-[#2B211B]">
        اطلب عرض سعر للشركات
      </h3>
      <p className="mt-4 text-[15px] leading-8 text-[#2B211B] max-w-2xl">
        أخبرنا بتفاصيل مناسبتك والكمية، وسنوافيك بعرض مخصص وعيّنة تصميم خلال يوم عمل.
      </p>

      <form
        data-readdy-form
        id="corporate-quote-form"
        onSubmit={onSubmit}
        className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        <div>
          <label className={labelCls} htmlFor="corp-name">الاسم</label>
          <input id="corp-name" type="text" name="name" required placeholder="الاسم الكامل" className={field} />
        </div>
        <div>
          <label className={labelCls} htmlFor="corp-company">الشركة</label>
          <input id="corp-company" type="text" name="company" required placeholder="اسم الشركة" className={field} />
        </div>
        <div>
          <label className={labelCls} htmlFor="corp-phone">الجوال</label>
          <input id="corp-phone" type="text" name="phone" required placeholder="05xxxxxxxx" className={field} />
        </div>
        <div>
          <label className={labelCls} htmlFor="corp-email">البريد الإلكتروني</label>
          <input id="corp-email" type="email" name="email" required placeholder="name@company.com" className={field} />
        </div>
        <div>
          <label className={labelCls} htmlFor="corp-occasion">المناسبة</label>
          <select id="corp-occasion" name="occasion" required defaultValue="" className={`${field} appearance-none pr-8 cursor-pointer`}>
            <option value="" disabled>اختر المناسبة</option>
            {occasionOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="corp-qty">الكمية</label>
          <input id="corp-qty" type="text" name="quantity" required placeholder="مثال: 50 قطعة" className={field} />
        </div>
        <div>
          <label className={labelCls} htmlFor="corp-budget">الميزانية</label>
          <select id="corp-budget" name="budget" required defaultValue="" className={`${field} appearance-none pr-8 cursor-pointer`}>
            <option value="" disabled>اختر الميزانية</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="corp-logo">رفع الشعار</label>
          <label
            htmlFor="corp-logo"
            className="flex items-center gap-3 h-12 rounded-xl bg-[#FBF8F2] border border-dashed border-[#C2A06B]/60 px-5 text-[14px] text-[#8A7B6E] cursor-pointer hover:border-[#C2A06B] transition-colors"
          >
            <span className="w-5 h-5 flex items-center justify-center text-[18px] text-[#8A6A4F]">
              <i className="ri-upload-2-line"></i>
            </span>
            <span className="truncate">{fileName || "ارفع ملف الشعار (PNG / PDF)"}</span>
          </label>
          <input
            id="corp-logo"
            type="file"
            name="logo"
            accept="image/*,.pdf"
            className="majaz-guard"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="corp-details">التفاصيل</label>
          <textarea
            id="corp-details"
            name="message"
            maxLength={500}
            placeholder="أخبرنا بتفاصيل الطلب والمناسبة وأي ملاحظات على التغليف أو التطريز"
            className="w-full h-32 rounded-xl bg-[#FFFDF9] border border-[#E8DFD3] p-5 text-[15px] text-[#2B211B] placeholder:text-[#A99C8E] outline-none focus:border-[#C2A06B] transition-colors resize-none"
          ></textarea>
        </div>

        <input
          type="text"
          name="website_alt"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          readOnly
          className="majaz-guard"
        />

        <div className="sm:col-span-2 flex items-center gap-4 flex-wrap">
          <Button
            type="submit"
            icon="ri-send-plane-line"
            className={status === "loading" ? "opacity-60 pointer-events-none" : ""}
          >
            {status === "loading" ? "جارٍ الإرسال" : "أرسل طلب عرض السعر"}
          </Button>
          {msg && (
            <span className={`text-[15px] ${status === "error" ? "text-red-600" : "text-[#0B3D2E]"}`}>
              {msg}
            </span>
          )}
        </div>
      </form>
    </div>
  );
}