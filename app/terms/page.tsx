import PolicyPage from "@/components/policy/PolicyPage";

export const metadata = {
  title: "الشروط والأحكام | سوق مجاز",
  description:
    "الشروط والأحكام لاستخدام متجر سوق مجاز: الطلبات والأسعار والدفع والملكية الفكرية والمسؤوليات وسياسة الاستخدام.",
};

export default function TermsPage() {
  return <PolicyPage slug="terms" />;
}