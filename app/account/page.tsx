import AccountPageLayout from "@/components/account/AccountPageLayout";
import OverviewSection from "@/components/account/OverviewSection";

export const metadata = {
  title: "حسابي | سوق مجاز",
  description:
    "نظرة سريعة على طلباتك ونقاطك وعناوينك ومفضلتك في حسابك على سوق مجاز.",
};

export default function AccountPage() {
  return (
    <AccountPageLayout
      title="حسابي"
      subtitle="نظرة سريعة على طلباتك ونقاطك وروابطك المفضلة."
      crumbs={["حسابي"]}
    >
      <OverviewSection />
    </AccountPageLayout>
  );
}