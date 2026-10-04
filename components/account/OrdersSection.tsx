import OrderCard from "./OrderCard";
import AccountEmpty from "./AccountEmpty";
import { orders } from "@/lib/accountData";

export default function OrdersSection() {
  if (orders.length === 0) {
    return (
      <AccountEmpty
        icon="ri-file-list-3-line"
        title="لا توجد طلبات بعد"
        note="عند إتمام أول طلب لك في مجاز ستجد هنا كل التفاصيل وحالة الشحن خطوة بخطوة."
        ctaLabel="ابدأ التسوق"
        ctaHref="/shop"
      />
    );
  }

  return (
    <div className="space-y-5">
      {orders.map((o) => (
        <OrderCard key={o.id} order={o} />
      ))}
    </div>
  );
}