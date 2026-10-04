"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import TrackTimeline from "@/components/track/TrackTimeline";
import { demoOrders } from "@/lib/trackData";

const field =
  "w-full h-[54px] rounded-xl bg-[#FFFDF9] border border-[#E8DFD3] px-5 text-[15px] text-[#2B211B] placeholder:text-[#A99C8E] outline-none focus:border-[#C2A06B] transition-colors";

export default function TrackView() {
  const [orderNumber, setOrderNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<typeof demoOrders[number] | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!orderNumber.trim() || phone.replace(/\D/g, "").length < 9) {
      setError("تأكد من إدخال رقم الطلب ورقم الجوال بشكل صحيح");
      setResult(null);
      return;
    }
    setError("");
    const found = demoOrders.find(
      (o) => o.orderNumber.toLowerCase() === orderNumber.trim().toLowerCase()
    );
    setResult({ ...(found ?? demoOrders[0]), orderNumber: orderNumber.trim() });
  }

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="max-w-3xl mx-auto rounded-[28px] bg-[#FFFDF9] border border-[#E8DFD3] shadow-[0_40px_80px_-60px_rgba(43,33,27,.4)] p-8 lg:p-11">
        <h2 className="font-heading text-[24px] lg:text-[30px] font-semibold text-[#2B211B] text-center">
          أدخل تفاصيل طلبك
        </h2>
        <p className="mt-3 text-[15px] leading-8 text-[#8A7B6E] text-center">
          نحتاج رقم الطلب ورقم الجوال الذي استخدمته عند الشراء لعرض حالة طلبك.
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-[13px] font-semibold text-[#2B211B] mb-2" htmlFor="track-order">
              رقم الطلب
            </label>
            <input
              id="track-order"
              type="text"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="مثال: MJ-48213"
              className={field}
            />
          </div>
          <div>
            <label className="block text-[13px] font-semibold text-[#2B211B] mb-2" htmlFor="track-phone">
              رقم الجوال
            </label>
            <input
              id="track-phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="05xxxxxxxx"
              className={field}
            />
          </div>
          <div className="sm:col-span-2 flex flex-col items-center gap-4">
            <Button type="submit" icon="ri-search-line" className="w-full sm:w-auto">
              تتبّع الطلب
            </Button>
            {error && <span className="text-[15px] text-red-600">{error}</span>}
          </div>
        </form>
      </div>

      {result && (
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="rounded-[28px] bg-white border border-[#EFE7DB] shadow-[0_28px_70px_-58px_rgba(43,33,27,.5)] p-8 lg:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[12px] tracking-[0.3em] text-[#C2A06B]">رقم الطلب</span>
                <h3 className="mt-2 font-heading text-[22px] lg:text-[26px] font-semibold text-[#2B211B]">
                  {result.orderNumber}
                </h3>
              </div>
              <span className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-[#0B3D2E]/10 text-[#0B3D2E] text-[13.5px] font-semibold w-fit">
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-truck-line"></i>
                </span>
                {result.status}
              </span>
            </div>

            <div className="mt-9">
              <TrackTimeline step={result.step} />
            </div>

            <div className="mt-9 rounded-2xl bg-[#F8F4EE] border border-[#EFE3CC] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="flex items-center gap-2.5 text-[14.5px] text-[#2B211B]">
                <span className="w-5 h-5 flex items-center justify-center text-[18px] text-[#8A6A4F]">
                  <i className="ri-map-pin-line"></i>
                </span>
                {result.carrier} — {result.city}
              </span>
              <span className="text-[14px] text-[#8A7B6E]">{result.carrierNote}</span>
            </div>
            <p className="mt-4 text-center text-[14px] font-semibold text-[#8A6A4F]">{result.eta}</p>
          </div>

          <div className="mt-6 rounded-[28px] bg-white border border-[#EFE7DB] p-8 lg:p-10">
            <h3 className="font-heading text-[20px] font-semibold text-[#2B211B]">منتجات الطلب</h3>
            <div className="mt-5 flex flex-col gap-4">
              {result.items.map((it) => (
                <div key={it.name} className="flex items-center gap-4">
                  <img
                    src={it.image}
                    alt={it.name ? `${it.name} - سوق مجاز` : "منتج من سوق مجاز"}
                    loading="lazy"
                    decoding="async"
                    className="w-[64px] h-[80px] rounded-xl object-cover object-top border border-[#EFE7DB]"
                  />
                  <div className="flex-1 min-w-0 text-right">
                    <p className="text-[15px] font-semibold text-[#2B211B] truncate">{it.name}</p>
                    <p className="mt-1 text-[13.5px] text-[#8A7B6E]">الكمية: {it.qty}</p>
                  </div>
                  <span className="text-[15px] font-bold text-[#2B211B] whitespace-nowrap">{it.price} ر.س</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-[#EFE3CC] flex items-center justify-between">
              <span className="text-[15px] text-[#8A7B6E]">تاريخ الطلب: {result.placedAt}</span>
              <span className="text-[17px] font-bold text-[#2B211B]">
                {result.items.reduce((s, it) => s + it.price * it.qty, 0)} ر.س
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}