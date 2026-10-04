"use client";

import Link from "next/link";
import StatusBadge from "./StatusBadge";
import TrackingTimeline from "./TrackingTimeline";
import type { Order } from "@/lib/accountData";

export default function OrderDetailSection({ order }: { order: Order }) {
  function downloadInvoice() {
    const lines = [
      "فاتورة سوق مجاز",
      "-----------------------------",
      `رقم الطلب: ${order.id}`,
      `التاريخ: ${order.date}`,
      "",
      "المنتجات:",
      ...order.items.map((i) => `- ${i.name} (${i.color}) × ${i.qty} = ${i.price * i.qty} ر.س`),
      "",
      `الإجمالي: ${order.total} ر.س`,
      `طريقة الدفع: ${order.payment}`,
      `عنوان التوصيل: ${order.address}`,
      "",
      "شكرًا لتسوقك من مجاز",
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `invoice-${order.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-6">
      <Link
        href="/account/orders"
        className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#8A6A4F] hover:text-[#6F5440] transition-colors cursor-pointer"
      >
        <span className="w-4 h-4 flex items-center justify-center text-[17px]">
          <i className="ri-arrow-right-line"></i>
        </span>
        رجوع لكل الطلبات
      </Link>

      <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="font-heading text-[22px] font-semibold text-[#2B211B]">{order.id}</h2>
              <StatusBadge status={order.status} />
            </div>
            <span className="mt-2 block text-[13px] text-[#8A7B6E]">{order.date}</span>
          </div>
          <button
            type="button"
            onClick={downloadInvoice}
            className="h-11 px-6 rounded-full bg-[#0B3D2E] text-[#FFFDF9] text-[14px] font-bold inline-flex items-center gap-2 whitespace-nowrap cursor-pointer hover:bg-[#0f5140] transition-colors"
          >
            <span className="w-4 h-4 flex items-center justify-center text-[17px]">
              <i className="ri-download-2-line"></i>
            </span>
            تحميل الفاتورة
          </button>
        </div>
      </div>

      <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-6">
        <h3 className="font-heading text-[18px] font-semibold text-[#2B211B] mb-4">منتجات الطلب</h3>
        <ul className="flex flex-col divide-y divide-[#EFE7DB]">
          {order.items.map((it) => (
            <li key={it.name} className="py-4 first:pt-0 last:pb-0 flex items-center gap-4">
              <span className="w-16 h-16 rounded-xl overflow-hidden bg-[#F6F1E8] border border-[#EFE7DB] shrink-0">
                <img src={it.image} alt={it.name ? `${it.name} - سوق مجاز` : "منتج من سوق مجاز"} loading="lazy" decoding="async" className="w-full h-full object-top object-cover" />
              </span>
              <div className="min-w-0 flex-1">
                <span className="block text-[15px] font-semibold text-[#2B211B] truncate">
                  {it.name}
                </span>
                <span className="mt-0.5 block text-[13px] text-[#8A7B6E]">
                  {it.color} · الكمية {it.qty}
                </span>
              </div>
              <span className="text-[15px] font-bold text-[#2B211B] whitespace-nowrap">
                {it.price * it.qty} ر.س
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t border-[#EFE7DB] flex items-center justify-between">
          <span className="text-[14px] text-[#8A7B6E]">الإجمالي</span>
          <span className="text-[19px] font-bold text-[#8A6A4F]">{order.total} ر.س</span>
        </div>
      </div>

      <TrackingTimeline steps={order.timeline} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-6">
          <h3 className="flex items-center gap-2 font-heading text-[17px] font-semibold text-[#2B211B] mb-3">
            <span className="w-5 h-5 flex items-center justify-center text-[18px] text-[#8A6A4F]">
              <i className="ri-map-pin-line"></i>
            </span>
            عنوان التوصيل
          </h3>
          <p className="text-[14px] leading-7 text-[#8A7B6E]">{order.address}</p>
        </div>
        <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-6">
          <h3 className="flex items-center gap-2 font-heading text-[17px] font-semibold text-[#2B211B] mb-3">
            <span className="w-5 h-5 flex items-center justify-center text-[18px] text-[#8A6A4F]">
              <i className="ri-bank-card-line"></i>
            </span>
            طريقة الدفع
          </h3>
          <p className="text-[14px] leading-7 text-[#8A7B6E]">{order.payment}</p>
        </div>
      </div>
    </div>
  );
}