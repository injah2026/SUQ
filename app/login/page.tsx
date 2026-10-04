"use client";

import { useRouter } from "next/navigation";
import AuthSplitLayout from "@/components/auth/AuthSplitLayout";
import AuthFlow from "@/components/auth/AuthFlow";

export default function LoginPage() {
  const router = useRouter();

  return (
    <AuthSplitLayout>
      <AuthFlow onDone={() => router.push("/")} />
    </AuthSplitLayout>
  );
}