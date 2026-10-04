"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SuccessCheck from "./SuccessCheck";
import { LAST_ORDER_KEY, type LastOrder } from "@/lib/checkoutData";

const trackingSteps = [
  { icon: "ri-checkbox-circle-fill", title: "تم تأكيد الطلب", note: "استلمنا طلبك بنجاح", done: true },
  { icon: "ri-scissors-2-line", title: "قيد التجهيز والتغليف", note: "نغلّف طلبك بعناية فاخرة", done: false },
  { icon: "ri-truck-line", title: "في الطريق إليك", note: "سيصلك خلال 3–5 أيام عمل", done: false },
];

export default function OrderSuccessView() {
  const [order, setOrder] = useState<LastOrder | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(LAST_ORDER_KEY);
      if (raw) setOrder(JSON.parse(raw));
    } catch {}
  }, []);

  return (
    <section className="w-full max-w-[760px] mx-auto px-6 lg:px-8 py-14 lg:py-20 text-center">
      <SuccessCheck />

      <h1 className="mt-8 font-heading text-[28px] lg:text-[38px] font-semibold text-[#2B211B]">
        شكرًا لك، تم استلام طلبك!
      </h1>
      <p className="mt-3 text-[15px] text-[#8A7B6E]">
        أرسلنا تفاصيل الطلب إلى بريدك الإلكتروني. نبدأ بتجهيزه بحب فورًا.
      </p>

      <div className="mt-8 rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-6 text-right">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          <div>
            <span className="block text-[12.5px] text-[#A99C8E]">رقم الطلب</span>
            <span className="mt-1 block text-[15px] font-bold text-[#2B211B]" suppressHydrationWarning={true}>
              {order?.number ?? "MJZ-000000"}
            </span>
          </div>
          <div>
            <span className="block text-[12.5px] text-[#A99C8E]">عدد القطع</span>
            <span className="mt-1 block text-[15px] font-bold text-[#2B211B]">{order?.count ?? 0}</span>
          </div>
          <div>
            <span className="block text-[12.5px] text-[#A99C8E]">طريقة الشحن</span>
            <span className="mt-1 block text-[15px] font-bold text-[#2B211B]">{order?.method ?? "توصيل عادي"}</span>
          </div>
          <div>
            <span className="block text-[12.5px] text-[#A99C8E]">الإجمالي</span>
            <span className="mt-1 block text-[15px] font-bold text-[#8A6A4F]">
              {order?.total ?? 0} ر.س
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href="#track"
          className="h-12 px-8 rounded-full bg-[#0B3D2E] text-[#FFFDF9] text-[15px] font-bold inline-flex items-center justify-center gap-2.5 whitespace-nowrap cursor-pointer transition-colors hover:bg-[#0f5140]"
        >
          <span className="w-5 h-5 flex items-center justify-center text-[19px]">
            <i className="ri-map-pin-time-line"></i>
          </span>
          تتبع طلبك
        </a>
        <Link
          href="/shop"
          className="h-12 px-8 rounded-full border-[1.5px] border-[#2B211B] text-[#2B211B] text-[15px] font-bold inline-flex items-center justify-center gap-2.5 whitespace-nowrap cursor-pointer transition-colors hover:bg-[#2B211B] hover:text-[#FFFDF9]"
        >
          متابعة التسوق
        </Link>
      </div>

      <div id="track" className="mt-14 text-right scroll-mt-8">
        <h2 className="font-heading text-[20px] font-semibold text-[#2B211B] mb-6">حالة الطلب</h2>
        <ol className="relative border-s border-dashed border-[#E2D3BB] ms-4 space-y-7">
          {trackingSteps.map((s) => (
            <li key={s.title} className="relative ps-8">
              <span
                className={`absolute -start-[15px] top-0 w-7 h-7 rounded-full flex items-center justify-center text-[16px] ${
                  s.done ? "bg-[#0B3D2E] text-[#FFFDF9]" : "bg-[#EFE3CC] text-[#8A7B6E]"
                }`}
              >
                <i className={s.icon}></i>
              </span>
              <span className={`block text-[15px] font-bold ${s.done ? "text-[#2B211B]" : "text-[#5c5349]"}`}>
                {s.title}
              </span>
              <span className="mt-0.5 block text-[13px] text-[#8A7B6E]">{s.note}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}