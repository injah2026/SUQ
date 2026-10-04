import Link from "next/link";
import StatusBadge from "./StatusBadge";
import { orders } from "@/lib/accountData";

export default function LastOrderCard() {
  const order = orders[0];

  return (
    <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-heading text-[19px] font-semibold text-[#2B211B]">آخر طلب</h2>
        <Link
          href="/account/orders"
          className="text-[13.5px] font-semibold text-[#8A6A4F] hover:text-[#6F5440] transition-colors cursor-pointer whitespace-nowrap"
        >
          كل الطلبات
        </Link>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <span className="block text-[15px] font-bold text-[#2B211B]">{order.id}</span>
          <span className="mt-1 block text-[12.5px] text-[#8A7B6E]">{order.date}</span>
        </div>
        <StatusBadge status={order.status} />
      </div>

      <div className="mt-5 flex items-center gap-2.5">
        {order.items.slice(0, 4).map((it) => (
          <span
            key={it.name}
            className="w-14 h-14 rounded-xl overflow-hidden bg-[#F6F1E8] border border-[#EFE7DB]"
          >
            <img src={it.image} alt={it.name ? `${it.name} - سوق مجاز` : "منتج من سوق مجاز"} loading="lazy" decoding="async" className="w-full h-full object-top object-cover" />
          </span>
        ))}
        <div className="ms-auto text-left">
          <span className="block text-[12.5px] text-[#8A7B6E]">الإجمالي</span>
          <span className="block text-[17px] font-bold text-[#2B211B]">{order.total} ر.س</span>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/account/orders/${order.id}`}
          className="h-11 px-6 rounded-full bg-[#8A6A4F] text-[#FFFDF9] text-[14px] font-bold inline-flex items-center gap-2 whitespace-nowrap cursor-pointer hover:bg-[#6F5440] transition-colors"
        >
          <span className="w-4 h-4 flex items-center justify-center text-[17px]">
            <i className="ri-file-list-3-line"></i>
          </span>
          عرض التفاصيل
        </Link>
        <Link
          href="/shop"
          className="h-11 px-6 rounded-full border-[1.5px] border-[#2B211B] text-[#2B211B] text-[14px] font-bold inline-flex items-center gap-2 whitespace-nowrap cursor-pointer hover:bg-[#2B211B] hover:text-[#FFFDF9] transition-colors"
        >
          <span className="w-4 h-4 flex items-center justify-center text-[17px]">
            <i className="ri-refresh-line"></i>
          </span>
          إعادة الطلب
        </Link>
      </div>
    </div>
  );
}