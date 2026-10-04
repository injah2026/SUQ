import AccountPageLayout from "@/components/account/AccountPageLayout";
import AddressesSection from "@/components/account/AddressesSection";

export const metadata = {
  title: "عناويني | سوق مجاز",
  description:
    "أضف وعدّل عناوين الشحن الخاصة بك على سوق مجاز لإتمام طلباتك بشكل أسرع.",
};

export default function AddressesPage() {
  return (
    <AccountPageLayout
      title="العناوين"
      subtitle="أضف عناوينك المفضلة لنجعل إتمام طلبك أسرع."
      crumbs={["حسابي", "العناوين"]}
    >
      <AddressesSection />
    </AccountPageLayout>
  );
}