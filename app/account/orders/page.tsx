import AccountPageLayout from "@/components/account/AccountPageLayout";
import OrdersSection from "@/components/account/OrdersSection";

export const metadata = {
  title: "طلباتي | سوق مجاز",
  description:
    "تابع حالة طلباتك السابقة والحالية من سوق مجاز واستعرض تفاصيلها أو أعد الطلب بضغطة.",
};

export default function OrdersPage() {
  return (
    <AccountPageLayout
      title="طلباتي"
      subtitle="تابع حالة طلباتك واستعرض تفاصيلها أو أعد الطلب بضغطة."
      crumbs={["حسابي", "طلباتي"]}
    >
      <OrdersSection />
    </AccountPageLayout>
  );
}