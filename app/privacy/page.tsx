import PolicyPage from "@/components/policy/PolicyPage";

export const metadata = {
  title: "سياسة الخصوصية | سوق مجاز",
  description:
    "تعرّف على كيفية جمع سوق مجاز لبياناتك واستخدامها وحمايتها، وحقوقك في الخصوصية وطرق التواصل معنا بشأنها.",
};

export default function PrivacyPage() {
  return <PolicyPage slug="privacy" />;
}