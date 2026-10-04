import AccountPageLayout from "@/components/account/AccountPageLayout";
import PointsSection from "@/components/account/PointsSection";

export const metadata = {
  title: "نقاط مجاز | سوق مجاز",
  description:
    "تابع رصيد نقاطك في برنامج مكافآت سوق مجاز وارتقِ بين المستويات لتكسب مزايا وخصومات أكثر.",
};

export default function PointsPage() {
  return (
    <AccountPageLayout
      title="نقاط مجاز"
      subtitle="اجمع النقاط مع كل طلب وارتقِ بين المستويات لتكسب مزايا أكثر."
      crumbs={["حسابي", "نقاط مجاز"]}
    >
      <PointsSection />
    </AccountPageLayout>
  );
}