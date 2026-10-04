import AccountPageLayout from "@/components/account/AccountPageLayout";
import ProfileSection from "@/components/account/ProfileSection";

export const metadata = {
  title: "بياناتي | سوق مجاز",
  description:
    "حدّث بياناتك الشخصية ورقم جوالك وبريدك الإلكتروني وتفضيلات الإشعارات في حسابك على سوق مجاز.",
};

export default function ProfilePage() {
  return (
    <AccountPageLayout
      title="بياناتي"
      subtitle="حدّث بياناتك وتفضيلات الإشعارات في أي وقت."
      crumbs={["حسابي", "بياناتي"]}
    >
      <ProfileSection />
    </AccountPageLayout>
  );
}