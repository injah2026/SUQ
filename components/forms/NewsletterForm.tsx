"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const hp = String(fd.get("contact_alt") ?? "").trim();
    if (hp) {
      form.reset();
      setStatus("success");
      setMsg("تم الاشتراك بنجاح، كود الخصم في بريدك");
      return;
    }
    fd.delete("contact_alt");
    const body = new URLSearchParams();
    fd.forEach((v, k) => body.append(k, String(v)));
    setStatus("loading");
    setMsg("");
    try {
      const res = await fetch("https://readdy.ai/api/form/db177t6oc082o2i1ka30", {
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
        setMsg(serverMsg || "تعذر الاشتراك، حاول مرة أخرى");
        return;
      }
      form.reset();
      setStatus("success");
      setMsg("تم الاشتراك بنجاح، كود الخصم في بريدك");
    } catch {
      setStatus("error");
      setMsg("تعذر الاتصال، حاول مرة أخرى");
    }
  }

  return (
    <form data-readdy-form id="newsletter-form" onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-2 sm:items-center sm:bg-[#F8F4EE]/5 sm:border sm:border-[#C2A06B]/35 sm:rounded-full sm:p-1.5 sm:pr-5">
        <span className="hidden sm:flex w-5 h-5 items-center justify-center text-[#C2A06B] shrink-0">
          <i className="ri-mail-line"></i>
        </span>
        <input
          type="email"
          name="email"
          required
          placeholder="بريدك الإلكتروني"
          className="w-full sm:flex-1 h-[50px] sm:h-11 px-5 sm:px-2 rounded-full sm:rounded-none bg-[#F8F4EE]/5 sm:bg-transparent border border-[#C2A06B]/35 sm:border-0 text-[14px] text-[#F8F4EE] placeholder:text-[#F8F4EE]/40 outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto h-[50px] sm:h-11 px-8 rounded-full bg-[#C2A06B] text-[#FFFDF9] text-[14px] font-semibold whitespace-nowrap cursor-pointer hover:bg-[#8A6A4F] transition-colors duration-300 disabled:opacity-60"
        >
          {status === "loading" ? "جارٍ الإرسال" : "اشترك"}
        </button>
      </div>
      <input
        type="text"
        name="contact_alt"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        readOnly
        className="majaz-guard"
      />
      {msg && (
        <p className={`mt-3 text-[12.5px] ${status === "error" ? "text-red-400" : "text-[#C2A06B]"}`}>
          {msg}
        </p>
      )}
    </form>
  );
}