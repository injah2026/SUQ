import AccountPageLayout from "@/components/account/AccountPageLayout";
import OrderDetailSection from "@/components/account/OrderDetailSection";
import { findOrder, orders } from "@/lib/accountData";

export const metadata = {
  title: "تفاصيل الطلب | سوق مجاز",
  description:
    "اطّلع على تفاصيل طلبك من سوق مجاز ومتابعة حالة الشحن لحظة بلحظة.",
};

export function generateStaticParams() {
  return orders.map((o) => ({ id: o.id }));
}

export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const order = findOrder(decodeURIComponent(id));

  if (!order) {
    return (
      <AccountPageLayout title="تفاصيل الطلب" crumbs={["حسابي", "طلباتي", "التفاصيل"]}>
        <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-10 text-center text-[15px] text-[#8A7B6E]">
          لم نجد هذا الطلب.
        </div>
      </AccountPageLayout>
    );
  }

  return (
    <AccountPageLayout
      title={`الطلب ${order.id}`}
      subtitle="كل تفاصيل الطلب والمنتجات ومسار الشحن."
      crumbs={["حسابي", "طلباتي", order.id]}
    >
      <OrderDetailSection order={order} />
    </AccountPageLayout>
  );
}