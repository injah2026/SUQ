"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const field =
  "w-full h-12 rounded-xl bg-[#FFFDF9] border border-[#E8DFD3] px-5 text-[15px] text-[#2B211B] placeholder:text-[#A99C8E] outline-none focus:border-[#C2A06B] transition-colors";
const labelCls = "block text-[13px] font-semibold text-[#2B211B] mb-2";

const subjects = ["استفسار عن طلب", "الهدايا المخصصة", "طلبات الشركات", "الشحن والتوصيل", "أخرى"];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const hp = String(fd.get("website_alt") ?? "").trim();
    if (hp) {
      form.reset();
      setStatus("success");
      setMsg("تم إرسال رسالتك، سنتواصل معك قريبًا");
      return;
    }
    fd.delete("website_alt");
    const body = new URLSearchParams();
    fd.forEach((v, k) => body.append(k, String(v)));
    setStatus("loading");
    setMsg("");
    try {
      const res = await fetch("https://readdy.ai/api/form/db18hdb2asjjtt1sl6bg", {
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
      setStatus("success");
      setMsg("تم إرسال رسالتك، سنتواصل معك قريبًا");
    } catch {
      setStatus("error");
      setMsg("تعذر الاتصال، حاول مرة أخرى");
    }
  }

  return (
    <div className="w-full rounded-[28px] bg-[#FFFDF9] border border-[#E8DFD3] shadow-[0_40px_80px_-60px_rgba(43,33,27,.4)] p-8 lg:p-11">
      <SectionLabel>راسلنا</SectionLabel>
      <h3 className="mt-0 font-heading text-[24px] lg:text-[30px] font-semibold text-[#2B211B]">
        أرسل لنا رسالة
      </h3>
      <p className="mt-3 text-[15px] leading-8 text-[#8A7B6E]">
        اترك تفاصيلك ورسالتك، وسيرد عليك فريق مجاز خلال ساعات العمل.
      </p>

      <form
        data-readdy-form
        id="contact-form"
        onSubmit={onSubmit}
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        <div>
          <label className={labelCls} htmlFor="contact-name">الاسم</label>
          <input id="contact-name" type="text" name="name" required placeholder="الاسم الكامل" className={field} />
        </div>
        <div>
          <label className={labelCls} htmlFor="contact-phone">الجوال</label>
          <input id="contact-phone" type="text" name="phone" required placeholder="05xxxxxxxx" className={field} />
        </div>
        <div>
          <label className={labelCls} htmlFor="contact-email">البريد الإلكتروني</label>
          <input id="contact-email" type="email" name="email" required placeholder="name@email.com" className={field} />
        </div>
        <div>
          <label className={labelCls} htmlFor="contact-subject">الموضوع</label>
          <select id="contact-subject" name="subject" required defaultValue="" className={`${field} appearance-none pr-8 cursor-pointer`}>
            <option value="" disabled>اختر الموضوع</option>
            {subjects.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="contact-message">الرسالة</label>
          <textarea
            id="contact-message"
            name="message"
            required
            maxLength={500}
            placeholder="اكتب رسالتك هنا"
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
            {status === "loading" ? "جارٍ الإرسال" : "أرسل الرسالة"}
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