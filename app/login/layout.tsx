import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تسجيل الدخول | سوق مجاز",
  description:
    "سجّل دخولك أو أنشئ حسابًا جديدًا في سوق مجاز لمتابعة طلباتك وحفظ مفضلتك وطلب التصاميم المخصصة باسمك.",
  robots: { index: false, follow: false },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}