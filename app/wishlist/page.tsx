import AccountPageLayout from "@/components/account/AccountPageLayout";
import WishlistSection from "@/components/account/WishlistSection";

export const metadata = {
  title: "المفضلة | سوق مجاز",
  description:
    "كل القطع التي أحببتها محفوظة في مفضلة سوق مجاز بانتظارك لإضافتها إلى السلة وإتمام طلبك.",
};

export default function WishlistPage() {
  return (
    <AccountPageLayout
      title="المفضلة"
      subtitle="كل القطع التي أحببتها محفوظة هنا بانتظارك."
      crumbs={["حسابي", "المفضلة"]}
    >
      <WishlistSection />
    </AccountPageLayout>
  );
}