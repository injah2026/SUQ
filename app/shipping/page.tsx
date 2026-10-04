import PolicyPage from "@/components/policy/PolicyPage";

export const metadata = {
  title: "سياسة الشحن والتوصيل | سوق مجاز",
  description:
    "تفاصيل مدة الشحن ورسوم التوصيل ومناطق التغطية وخيارات التوصيل السريع في سوق مجاز داخل المملكة وخارجها.",
};

export default function ShippingPage() {
  return <PolicyPage slug="shipping" />;
}